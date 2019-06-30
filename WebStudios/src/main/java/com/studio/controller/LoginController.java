package com.studio.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.studio.dao.IUsuarioDao;
import com.studio.model.MessajeResponse;
import com.studio.model.User;

@Controller
public class LoginController {

	private static final Logger logger = Logger.getLogger(LoginController.class);

	@Autowired
	IUsuarioDao iUsuarioDao;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public @ResponseBody MessajeResponse getShopInJSON(@RequestBody User userParam) {
		MessajeResponse msgResponse = new MessajeResponse();
		User user = iUsuarioDao.getUsuarioByUserAndPassword(userParam.getUsername(), userParam.getPassword());

		// logs debug message
		if (logger.isDebugEnabled()) {
			logger.debug("getWelcome is executed!");
		}

		// logs exception
//		logger.error("This is Error message", new Exception("Testing"));

		if (user != null) {
			msgResponse.setMessaje("Loguue exitosos");
			msgResponse.setObj(user);
			msgResponse.setCode("0");
		} else {
			msgResponse.setCode("1");
			msgResponse.setMessaje("Usuario o passwors incorrecotos  faor de validar");
		}
		System.out.println("msgResponse:" + msgResponse.toString());
		return msgResponse;
	}
}