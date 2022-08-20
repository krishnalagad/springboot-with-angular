package com.login.back.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.login.back.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

	
}
