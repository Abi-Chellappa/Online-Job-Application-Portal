package com.example.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.jobportal.dtorequest.AuthenticationRequest;
import com.example.jobportal.dtorequest.registerDtoRequest;
import com.example.jobportal.dtoresponse.AuthenticationResponse;
//import com.example.jobportal.entity.Login;
import com.example.jobportal.entity.Registerentity;
import com.example.jobportal.service.AuthenticationService;

import lombok.RequiredArgsConstructor;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController 
{
    @Autowired
	private AuthenticationService service;
	
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody registerDtoRequest request) 
	{
		service.register(request);
		return ResponseEntity.ok("Registered Successfully");
    }
	@PreAuthorize("hasAuthority('ADMIN')")
	@GetMapping("/getRegister")
    public List<Registerentity> getRegisterDetails()
    {
   	 return service.getRegister();
    }
	@PreAuthorize("hasAuthority('ADMIN')")
	@PutMapping("/putRegister")
    public String updateRegisterDetails(@RequestBody Registerentity registerEntity,@RequestParam int id)
    {
    	registerEntity.setId(id);
   	    service.updateRegister(registerEntity);
   	    return ("Successfully Updated");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteRegister")
    public String deleteRegisterDetails(@RequestParam int id)
    {
        service.deleteRegister(id);
   	 return ("Successfully Deleted");
    }
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) 
	{
		
		return ResponseEntity.ok(service.authenticate(request));
	}
	{/*  @GetMapping("/getUser")
	    public List<Login> getUserDetails()
	    {
	   	 return service.getUser();
	    }
	 @PutMapping("/putUser")
	    public String updateUserDetails(@RequestBody Login login,@RequestParam int id)
	    {
	   	 login.setId(id);
	   	 service.updateUser(login);
	   	 return ("Successfully Updated");
	    }
	    
	    @DeleteMapping("/deleteUser")
	    public String deleteUserDetails(@RequestParam int id)
	    {
	   	 service.deleteUser(id);
	   	 return ("Successfully Deleted");
	    }*/}	
}
