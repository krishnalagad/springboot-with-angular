package com.login.back;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.login.back.model.Role;
import com.login.back.model.User;
import com.login.back.model.UserRole;
import com.login.back.services.UserService;

@SpringBootApplication
public class LoginBackApplication implements CommandLineRunner {
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(LoginBackApplication.class, args);
	}

	
	
	@Override
	public void run(String... args) throws Exception {
		
		System.out.println("Project Started");
		
//		User user = new User();
//		user.setUsername("krishna46");
//		user.setPassword("abc123");
//		user.setfName("Krishna");
//		user.setmName("Dilip");
//		user.setlName("Lagad");
//		user.setEmail("krishnalagad2@gmail.com");
//		user.setGender("Male");
//		user.setMobile("9834808052");
//		user.setImage("default.png");
//		
//		Role role1 = new Role();
//		role1.setRoleId(46L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet = new HashSet<UserRole>();
//		
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		
//		User user1 = this.userService.createUser(user, userRoleSet);
//		System.out.println(user1.getUsername());
	}

}
