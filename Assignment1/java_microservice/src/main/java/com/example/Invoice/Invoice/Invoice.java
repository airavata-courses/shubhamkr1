package com.example.Invoice.Invoice;

public class Invoice {
	String name;
	float price;
	
	
	public String getName() {
		return name;
	}
	public Invoice(String name, float price) {
		super();
		this.name = name;
		this.price = price;
	}
	public void setName(String name) {
		this.name = name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	

}
