package com.example.Invoice.Invoice;

public class Invoice {
	String item_name;
	public Invoice(String item_name, float price) {
		super();
		this.item_name = item_name;
		this.price = price;
	}
	float price;
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	 @Override
	    public String toString() {
	        return "Value{" +
	                "id=" + item_name +
	                ", price='" + price + '\'' +
	                '}';
	    }
	
	

}
