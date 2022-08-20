package com.login.back.controller;

import java.security.Principal;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.login.back.config.JwtUtils;
import com.login.back.model.JwtRequest;
import com.login.back.model.JwtResponce;
import com.login.back.model.User;
import com.login.back.repository.UserRepository;
import com.login.back.services.impl.EmailServiceImpl;
import com.login.back.services.impl.UserDetailsServiceImpl;

@RestController
@CrossOrigin("*")
public class AuthenticateController {
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetailsServiceImpl userDetailsService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private EmailServiceImpl emailServiceImpl;
	
	private String otp;
	
	// generate token
	
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest){
		
		try {
			
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
			
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("User not found...");
		}
		
		// Authentication completed
		
		UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
		String token = this.jwtUtils.generateToken(userDetails);
		
		return ResponseEntity.ok(new JwtResponce(token));
	}
	
	private void authenticate(String username, String password) throws Exception {
		
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
			
		} catch (DisabledException e) {
			throw new Exception("User disabled : " + e.getMessage());
		} catch (BadCredentialsException e) {
			throw new Exception("Invalid Credentials : " + e.getMessage());
		}
		
	}
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		
		return ((User) this.userDetailsService.loadUserByUsername(principal.getName()));
	}
	
	// generate otp
	public String generateOtp() {
		Random rand = new Random();
        
        int number = rand.nextInt(999999);
        System.out.println("Random Integers: "+number);
        
        return String.valueOf(number);
	}
	
	@GetMapping("/verify-user/{username}")
	public ResponseEntity<?> getEnteredUser(@PathVariable("username") String username) {
		
		User user = this.userRepository.findUserByUsername(username);
		if(user == null) {
			System.out.println("Error!! User not found");
			throw new UsernameNotFoundException("No User Found...");
		}
		
		this.otp = generateOtp();
		System.out.println(this.otp);
		
		
		
		String to = user.getEmail();
		System.out.println(to);
		String subject = "Classroom Quiz | Forgot Password OTP ";
		String message = "<h1>Your OTP is </h1>" + this.otp;
		
//		boolean flag = this.emailServiceImpl.sendEmail(subject, message, to);
		
		
		return ResponseEntity.ok(user);
	}
	
	

}
