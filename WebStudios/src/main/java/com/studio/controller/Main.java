package com.studio.controller;

import java.util.Hashtable;

import javax.activation.DataSource;
import javax.naming.Context;
import javax.naming.InitialContext;

public class Main {
	public static void main(String[] args) throws Exception {

		Hashtable<String, String> env = new Hashtable<String, String>();
		env.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.jndi.dnc.DnsContextFactory");
		env.put(Context.PROVIDER_URL, "localhost:8081");
		Context cxt = new InitialContext(env);

//		InitialContext cxt = new InitialContext();
		DataSource ds = (DataSource) cxt.lookup("java:comp/env/jdbc/MyDB");

		if (ds == null) {
			throw new Exception("Data source not found!");
		}
	}

}
