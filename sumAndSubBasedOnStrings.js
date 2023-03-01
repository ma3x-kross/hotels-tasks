//Сперва начал выполнять задание данным методом, но чтобы уложиться в дедлайн решил сделать используя BigInt (файл calc.js) 

//Сложение и вычитание на основе строк. (Только для положительных значений)
class Calculator {
	// Сложение
	#resSum(a, b, res, carry, base) {
		if (a.length == 0 && b.length == 0 && !carry) {
			return res
		}
		let lastA = parseInt(a.pop() || '0', 10)
		let lastB = parseInt(b.pop() || '0', 10)

		let sum = lastA + lastB + (carry || 0)

		return this.#resSum(
			a,
			b,
			(sum % base) + (res || ''),
			Math.floor(sum / base),
			base,
		)
	}

	sum(a, b) {
		return this.#resSum(a.split(''), b.split(''), '', '', 10).toString()
	}

	//Вычитание

	#resSub(a, b, res = '', carry) {
		if (a.length == 0 && b.length == 0) {
			return res
		}
		let lastA = parseInt(a.pop() || '0', 10)
		let lastB = parseInt(b.pop() || '0', 10)

		let sub = lastA - lastB - (carry || 0)
		if (sub < 0) {
			sub = sub + 10
			carry = 1
		} else carry = 0

		return this.#resSub(a, b, res + sub, carry)
	}

	sub(a, b) {
		let num1 = a,
			num2 = b,
			sign = ''

		if (+b > +a) {
			num1 = b
			num2 = a
			sign = '-'
		}

		const value = this.#resSub(num1.split(''), num2.split(''))
			.toString()
			.split('')
			.reverse()
			.join('')
			.replace(/0+(?=[1-9])/g, '')

		return sign + value
	}
}

const calc = new Calculator()

const a = '500000000000000000000000000000'
const b = '1111111111100000000011'

const c = calc.sub(a, b)
console.log(c)

const d = calc.sum(c, b)
console.log(d)

console.log(d == a)
