String.prototype.contains = String.prototype.includes
String.prototype.starts = String.prototype.startsWith
String.prototype.ends = String.prototype.endsWith
Number.prototype['>'] = function (value) {
	return this > value
}
Number.prototype['<'] = function (value) {
	return this < value
}
Number.prototype['='] = function (value) {
	return this == value
}
Number.prototype['<='] = function (value) {
	return this <= value
}
Number.prototype['>='] = function (value) {
	return this >= value
}

class Product {
	constructor({ name, price, quantity, description }) {
		this.name = name
		this.price = price
		this.quantity = quantity
		this.description = description
	}
}

class Products {
	constructor() {
		this.products = []
	}

	newProduct({ name, price, quantity, description }) {
		let p = new Product({ name, price, quantity, description })
		this.products.push(p)
		return p
	}

	getAllProducts() {
		return this.products
	}

	getProducts(str) {
		const strArr = str.split('&')
		const params = strArr.map((item) => ({
			p: item
				.split(/(-|>=?|<=?|=)/)
				.filter((value) => value && /[^-]/.test(value)),
		}))

		const result = this.products.filter((value) => {
			for (let param of params) {
				if (!value[param.p[0]][param.p[1]](param.p[2])) return false
			}
			return true
		})

		return result
	}
}

let shop = new Products()

shop.newProduct({
	name: 'Guitar'.toLowerCase(),
	price: 50,
	quantity: 3,
	description: 'new guitar'.toLowerCase(),
})
shop.newProduct({
	name: 'mens jacket',
	price: 20,
	quantity: 5,
	description: 'slim-fitting style',
})
shop.newProduct({
	name: 'sandisk ssd',
	price: 100,
	quantity: 2,
	description: 'easy upgrade for faster boot up',
})
shop.newProduct({
	name: 'samsung 49-inch  144hz',
	price: 900,
	quantity: 1,
	description: 'new 49 inch super ultrawide 32:9 monitor'.toLowerCase(),
})
shop.newProduct({
	name: 'mens casual slim fit'.toLowerCase(),
	price: 15.99,
	quantity: 10,
	description:
		'the color could be slightly different between on the screen and in practice.'.toLowerCase(),
})

console.log(shop.getProducts('name-starts-sa&price-<1900-&quantity->=2'))
