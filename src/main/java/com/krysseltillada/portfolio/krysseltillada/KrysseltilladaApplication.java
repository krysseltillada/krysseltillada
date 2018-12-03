package com.krysseltillada.portfolio.krysseltillada;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class KrysseltilladaApplication {

	public static void main(String[] args) {
		SpringApplication.run(KrysseltilladaApplication.class, args);
	}
}
