// 方法区
/**
 * 页面跳转
 */
function function_click_button() {
	// id:a_food方法 进入订餐表单
	$("#a_food").click(function() {
		function_json_init();// 初始化值
		function_click_li();// 绑定事件
		function_Nbutton_click("div_index", "div_food");
	});
	// id:a_food_back方法 返回订餐页面
	function_button_click("a_food_back", "div_food", "div_index");
	// id:a_select_people方法 选人页面显示
	function_button_click("a_select_people", "div_food", "div_food_people");
	// id:a_select_restaurant方法 选餐厅页面显示
	function_button_click("a_select_restaurant", "div_food",
			"div_food_restaurants");
	// id:div_food_people_back 返回订餐表单
	function_button_click("div_food_people_back", "div_food_people", "div_food");
	// id:div_food_restaurants_back 返回订餐表单
	function_button_click("div_food_restaurants_back", "div_food_restaurants",
			"div_food");
}

/**
 * 列表项单击事件
 */
function function_click_li() {
	// 设置订餐人
	$("#div_food_people ul li").click(function() {
		$("#input_people").val($(this).text());
		function_Nbutton_click("div_food_people", "div_food");
	});
	// 设置餐馆
	$("#div_food_restaurants ul li").click(function() {
		$("#input_restaurants").val($(this).text());
		function_Nbutton_click("div_food_restaurants", "div_food");
	});
}

// ////////////////////////////数值处理方法//////////////////////////
/**
 * 解析初始化值的JSON串
 * 
 * @param ul_ID
 *            显示列表的UL
 */
function function_json_init() {
	$("#div_food_people ul").html("");
	$("#div_food_restaurants ul").html("");
	// 初始化Users数据
	$.each(users, function(index, info) {
		// alert(info.name);
		var html = "<li><a data-ajax=\"false\">" + info.name + "</a></li>"
		$("#div_food_people ul").append(html);
	});
	// 初始化restaurants数据
	$.each(restaurants, function(index, info) {
		// alert(info.name);
		var html = "<li><a data-ajax=\"false\" href=\"#\">" + info.name
				+ "</a></li>"
		$("#div_food_restaurants ul").append(html);
	});
	$("#div_food_people ul").listview('refresh');// 刷新列表
	$("#div_food_restaurants ul").listview('refresh');// 刷新列表
}

// ////////////重构方法////////////////
/**
 * 点击按钮，DIV切换
 * 
 * @param buttonID
 *            按钮ID
 * @param close
 *            要关闭DIV的id
 * @param open
 *            要显示DIV的id
 */
function function_button_click(buttonID, close, open) {
	var closeDIV = "#" + close;
	var openDIV = "#" + open;
	var button = "#" + buttonID;
	$(button).click(function() {
		$(closeDIV).hide();
		$(openDIV).show();
	});
}

function function_Nbutton_click(close, open) {
	var closeDIV = "#" + close;
	var openDIV = "#" + open;
	$(closeDIV).hide();
	$(openDIV).show();
}