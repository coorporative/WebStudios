package com.studio.model;

public class MessajeResponse {

	String code;
	String messaje;
	Object obj;

	public MessajeResponse() {
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessaje() {
		return messaje;
	}

	public void setMessaje(String messaje) {
		this.messaje = messaje;
	}

	public Object getObj() {
		return obj;
	}

	public void setObj(Object obj) {
		this.obj = obj;
	}

	@Override
	public String toString() {
		return "MessajeResponse [code=" + code + ", messaje=" + messaje + ", obj=" + obj + "]";
	}

}
