package com.login.back.services.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.login.back.model.User;
import com.login.back.model.UserRole;
import com.login.back.repository.RoleRepository;
import com.login.back.repository.UserRepository;
import com.login.back.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;

	// Creating User...
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findUserByUsername(user.getUsername());
		
		if(local != null) {
			System.out.println("User Already Existed...");
			throw new Exception("User Already Existed");
		}
		else {
			// create user
			for(UserRole ur: userRoles) {
				this.roleRepository.save(ur.getRole());
			}
			
			user.getUserRole().addAll(userRoles);
			local = this.userRepository.save(user);
			
		}
		
		return local;
	}

	@Override
	public User getUserByUsername(String username) {
		return this.userRepository.findUserByUsername(username);
	}

	@Override
	public void deleteUser(Long id) {
		
		this.userRepository.deleteById(id);
	}

}
