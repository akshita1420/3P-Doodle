package com._P_Doodle.Backend.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/Home")
public class Test {

    @GetMapping("/")
    public String Authentication() {
        return "Authenticated Successfully";
    }

}
