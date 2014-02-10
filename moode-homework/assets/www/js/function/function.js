// 方法区
/**
 * id:a_food方法 进入订餐表单
 */
function function_a_food() {
	$("#a_food").click(function() {
		function_button_click("div_index", "div_food");
	});
}

/**
 * id:a_food_back方法 返回订餐页面
 */
function function_a_food_back() {
	$("#a_food_back").click(function() {
		function_button_click("div_food", "div_index");
	});
}

/**
 * id:a_select_people方法 选人页面显示
 */
function function_a_select_people() {
	$("#a_select_people").click(function() {
		function_json_users("div_food_people ul");
		function_button_click("div_food", "div_food_people");
	});
}

function function_div_food_people_back() {
	$("#div_food_people_back").click(function(){
		function_button_click("div_food_people", "div_food");
	});
}
// //////////////////////////////////////////////////////
/**
 * 解析users的JSON串
 * 
 * @param ul_ID
 *            显示列表的UL
 */
function function_json_users(ul_ID) {
	var id = "#" + ul_ID;
	$(id).html("");
	$.each(users, function(index, info) {
		// alert(info.name);
		var html = "<li><a data-ajax=\"false\" href=\"#\">"
				+ info.name + "</a></li>"
		$(id).append(html);
	});
	//$(id).attr("data-role", "listview");
	$(id).listview('refresh');// 刷新列表
}

/**
 * 点击按钮，DIV切换
 * 
 * @param close
 *            要关闭DIV的id
 * @param open
 *            要显示DIV的id
 */
function function_button_click(close, open) {
	var closeDIV = "#" + close;
	var openDIV = "#" + open;
	$(closeDIV).hide();
	$(openDIV).show();
}