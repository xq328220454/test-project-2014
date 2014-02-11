// 对象
/**
 * 订单对象
 */
function order(name, price, restaurants,food) {
	this.name = name;
	this.price = price;
	this.restaurants = restaurants;
	this.food = food;
}

/**
 * 用户对象
 * 
 * @param name
 */
function user(name) {
	this.name = name;
}