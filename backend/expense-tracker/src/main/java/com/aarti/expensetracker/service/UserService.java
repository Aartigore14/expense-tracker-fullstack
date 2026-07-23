package com.aarti.expensetracker.service;

import com.aarti.expensetracker.entity.User;
import com.aarti.expensetracker.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    Optional<User> exisitingUser = userRepository.findByEmail("");
}
