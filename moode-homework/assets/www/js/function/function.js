// 方法区
/**
 * id:a_food方法
 */
function function_a_food() {
	$("#a_food").click(function() {
		$("#div_index").hide();
		$("#div_food").show();
	});
}

/**
 * id:a_food_back方法
 */
function function_a_food_back() {
	$("#a_food_back").click(function() {
		$("#div_food").hide();
		$("#div_index").show();
	});
}