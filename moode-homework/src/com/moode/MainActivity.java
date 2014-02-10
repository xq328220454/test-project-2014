package com.moode;

import com.moode.values.ConstantOfValues;
import com.phonegap.DroidGap;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

/**
 * 初始化界面
 * 
 * @author xueqi
 * 
 */
public class MainActivity extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// setContentView(R.layout.activity_main);
		super.loadUrl(ConstantOfValues.LOAD_URL);
	}

}
