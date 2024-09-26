package edu.escuelaing.arep.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeliveryController {
    @GetMapping
    public String getData(){
        return "";
    }
}
