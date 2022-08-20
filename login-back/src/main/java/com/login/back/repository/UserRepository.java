package com.login.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.back.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findUserByUsername(String username);

}
