package com.cfblj.carrental.model;

/**
 * @date 2020-4-25 15:05
 */
public class Result {
    private String msg;
    private boolean flag;
    private Object data;

    public Result(String msg, boolean flag) {
        this.msg = msg;
        this.flag = flag;
    }

    public Result(Object data) {
        this.data = data;
    }

    public Result(String msg, boolean flag, Object data) {
        this.msg = msg;
        this.flag = flag;
        this.data = data;
    }

    public String getMsg() {
        return msg;
    }

    public Result(boolean flag) {
        this.flag = flag;
    }


    public void setMsg(String msg) {
        this.msg = msg;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
