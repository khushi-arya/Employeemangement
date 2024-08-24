package com.Myporject.fullstack_backend.Controler;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Myporject.fullstack_backend.Repositery.UserRepositery;
import com.Myporject.fullstack_backend.model.User;

@RestController
@CrossOrigin("http://localhost:3000/")
public class Usecontroler {
	@Autowired
	private UserRepositery Userrepo;
	
	@GetMapping("/get")
     List<User> getUserById() {
		return Userrepo.findAll();      
      }
	
	@PostMapping("/post")
	User newUser(@RequestBody User newUser) {
		return Userrepo.save(newUser);
		
	}
	@DeleteMapping("/del/{id}")
	Optional<User> getUserbyId(@PathVariable Long id) {
		return Userrepo.findById(id);
		
	}
	
	
	

}
