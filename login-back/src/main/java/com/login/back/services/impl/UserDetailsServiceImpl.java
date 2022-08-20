package com.login.back.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.login.back.model.User;
import com.login.back.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		User user = this.userRepository.findUserByUsername(username);
		if(user == null) {
			System.out.println("Error!! User not found");
			throw new UsernameNotFoundException("No User Found...");
		}
		
		return user;
	}	
}
