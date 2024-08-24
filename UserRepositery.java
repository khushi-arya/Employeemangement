package com.Myporject.fullstack_backend.Repositery;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Myporject.fullstack_backend.model.User;

public interface UserRepositery extends JpaRepository<User , Long> {

}
