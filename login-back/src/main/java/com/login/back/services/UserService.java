package com.login.back.services;

import java.util.Set;

import com.login.back.model.User;
import com.login.back.model.UserRole;

public interface UserService {
	
	// Create user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	// get User
	public User getUserByUsername(String username);
	
	// delete user
	public void deleteUser(Long id);

}
