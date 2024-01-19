package com.example.controller;

import com.example.entity.Users;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class userController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public List<Users> getAllUsers(){
        return userRepository.findAll();
    }
   @RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") int id){
        userRepository.deleteById(id);
   }
   @RequestMapping(value = "users", method = RequestMethod.POST)
   public Users createBook(@RequestBody Users user){
       return userRepository.save(user);
   }
   @RequestMapping(value = "all", method = RequestMethod.PUT)
    public void updateUser(@RequestBody Users user){
        Users u1 = userRepository.findById(user.getId()).get();
        u1.setFirstName(user.getFirstName());
        u1.setLastName(user.getLastName());
        u1.setEmail(user.getEmail());
        userRepository.save(u1);
   }
}
