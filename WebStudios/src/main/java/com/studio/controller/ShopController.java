package com.studio.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.studio.model.User;

@RestController
public class ShopController {

	@RequestMapping("/shop")
	public @ResponseBody User getShopInJSON() {

		User shop = new User();
		shop.setUser("ppe");
		shop.setPassword("123");

		return shop;

	}

}