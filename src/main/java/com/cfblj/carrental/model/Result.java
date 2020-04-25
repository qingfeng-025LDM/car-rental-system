package com.cfblj.carrental.model;

/**
 * @author Wuhz
 * @date 2020-4-25 15:05
 */
public class Result {
    private String msg;
    private boolean flag;

    public Result(String msg, boolean flag) {
        this.msg = msg;
        this.flag = flag;
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
}
