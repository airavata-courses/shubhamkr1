package com.example.Invoice.Invoice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class InvoiceController {

	@GetMapping("/invoice")
	
	public String getInvoice() {
		return "Hello";
	}
}
