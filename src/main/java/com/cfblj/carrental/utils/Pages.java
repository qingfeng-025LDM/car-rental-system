package com.cfblj.carrental.utils;

import java.io.Serializable;
import java.util.List;

/**
 * 分页
 * @author 16581
 *
 */
public class Pages implements Serializable{

	private long sum;		//查询的总数
	private List<?> rows;	//每页的行数，?表示任意类型
	
	public Pages(long sum, List<?> rows) {
		super();
		this.sum = sum;
		this.rows = rows;
	}

	public long getSum() {
		return sum;
	}

	public void setSum(long sum) {
		this.sum = sum;
	}

	public List<?> getRows() {
		return rows;
	}
	public void setRows(List<?> rows) {
		this.rows = rows;
	}
	
}
