package com.krysseltillada.portfolio.krysseltillada;

public class ContactForm
{
    private String name;
    private String email;
    private String subject;
    private String message;

    public String getName()
    {
        return name;
    }

    public void setName(String pName)
    {
        name = pName;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String pEmail)
    {
        email = pEmail;
    }

    public String getSubject()
    {
        return subject;
    }

    public void setSubject(String pSubject)
    {
        subject = pSubject;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String pMessage)
    {
        message = pMessage;
    }

    @Override
    public String toString()
    {
        return "ContactForm{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
