package com.studio.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class IndexController {
	String rrtunr = "index";

//	@RequestMapping(value="/index")
//    public String home() {
//        return "home";
//    }

//	@RequestMapping(value = "/staticPage", method = RequestMethod.GET)
//	public String redirect() {
//		return "redirect:/pages/final.htm";
//	}
//	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String redirectIndex() {
		return "redirect:/index.html";
	}
}