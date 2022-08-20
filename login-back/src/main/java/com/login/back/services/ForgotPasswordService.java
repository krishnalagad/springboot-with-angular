package com.login.back.services;

import com.login.back.model.User;

public interface ForgotPasswordService {
	
	public User getUserByUsername(String username); 

}
