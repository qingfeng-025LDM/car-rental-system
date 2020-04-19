package com.cfblj.carrental.utils;

/**
 * 返回对象类
 */
public class ReturnObject{

	private boolean success;	//是否成功
	private String msg;		//返回的信息
	private Object data;	//返回的数据
	
	public ReturnObject(boolean success, String msg, Object data) {
		this.success = success;
		this.msg = msg;
		this.data = data;
	}

	public ReturnObject(boolean success, String msg) {
		this.success = success;
		this.msg = msg;
	}

	public ReturnObject(Object data) {
		this.data = data;
	}

	public ReturnObject() {

	}

	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}
}
