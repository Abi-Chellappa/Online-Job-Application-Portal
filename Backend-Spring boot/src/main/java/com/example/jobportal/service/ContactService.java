package com.example.jobportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.jobportal.entity.Contact;
import com.example.jobportal.repository.ContactRepository;
@Service
public class ContactService 
{
     @Autowired
    private ContactRepository contactrepo;
    
    public void saveContact(Contact contact)
    {
        contactrepo.save(contact);
    }
    public List<Contact> getContact()
    {
        return contactrepo.findAll();
    }
    public void updateContact(Contact contact)
    {
        contactrepo.save(contact);
    }
    public void deleteContact(int id)
    {
        contactrepo.deleteById(id);
    }
}
