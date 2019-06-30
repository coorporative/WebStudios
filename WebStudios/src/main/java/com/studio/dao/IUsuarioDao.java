package com.studio.dao;

import org.springframework.stereotype.Component;

import com.studio.model.User;


@Component
public interface IUsuarioDao {

	User getUsuarioByUserAndPassword(String user, String password);
}
