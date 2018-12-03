package com.krysseltillada.portfolio.krysseltillada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController
{
    @Autowired
    private EmailService emailService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("contactForm", new ContactForm());
        return "home";
    }

    @PostMapping("/sendMessage")
    public @ResponseBody Response sendMessage(@RequestBody ContactForm contactForm) {
        emailService.sendEmail(contactForm);
        Response response = new Response();
        response.setStatus("success");
        return response;
    }

}
