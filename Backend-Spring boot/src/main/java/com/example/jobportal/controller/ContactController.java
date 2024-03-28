package com.example.jobportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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

import com.example.jobportal.entity.Contact;
import com.example.jobportal.service.ContactService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/contact")
public class ContactController 
{
    @Autowired
    private ContactService contactservice;
    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/getContact")
    public List<Contact>getContactDetails()
    {
        return contactservice.getContact();
    }
    @PostMapping("/postContact")
    public String saveContactDetails(@RequestBody Contact contact)
    {
        contactservice.saveContact(contact);
        return("Job Successfully saved");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/putContact")
    public String updateContactDetails(@RequestBody Contact contact,@RequestParam int id)
    {
        contact.setId(id);
        contactservice.saveContact(contact);
        return("Sucessfully Updated");
    }
    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/deleteContact")
    public String deleteContactDetails(@RequestParam int id)
    {
        contactservice.deleteContact(id);
        return("Sucessfully Deleted");
    }    
}
