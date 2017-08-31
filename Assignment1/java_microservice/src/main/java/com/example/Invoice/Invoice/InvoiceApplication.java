package com.example.Invoice.Invoice;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class InvoiceApplication {
	
	private static final Logger log = LoggerFactory.getLogger(InvoiceApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(InvoiceApplication.class, args);
	}
	
	public RestTemplate restTemplate(RestTemplateBuilder builder) {
		return builder.build();
	}
	
	public CommandLineRunner run(RestTemplate restTemplate) throws Exception {
		return args-> {
			Invoice invoice= restTemplate.getForObject("http://localhost:8080/invoice", Invoice.class);
			log.info(invoice.toString());
		};
		
	}
}

