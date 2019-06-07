package com.studio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.studio.model.User;

@Controller
public class LoginController {

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public @ResponseBody User getShopInJSON() {

		User shop = new User();
		shop.setUser("ppe");
		shop.setPassword("123");

		return shop;

	}
}