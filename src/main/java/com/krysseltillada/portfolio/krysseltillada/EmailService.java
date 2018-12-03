package com.krysseltillada.portfolio.krysseltillada;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService
{
    @Autowired
    private JavaMailSender emailSender;

    @Async
    public void sendEmail(ContactForm contactForm) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setTo("krysseltillada@gmail.com");
        message.setSubject("[FREELANCE CLIENT] You have a Freelance Client Inquiry From " + contactForm.getName() + " (" + contactForm.getEmail() + ")");
        message.setFrom(contactForm.getEmail());
        message.setText(contactForm.getMessage() + "\n" +
                                "------------------------------------------" + "\n" +
                                "Email his/her at " + contactForm.getEmail());

        emailSender.send(message);
    }
}
