class Calculator {
	#isBigInt(number) {
		return typeof number === 'bigint'
	}

	sum(a, b) {
		if (this.#isBigInt(a) && this.#isBigInt(b)) {
			return (BigInt(a) + BigInt(b)).toString()
		}
		return 'Введите числа типа "BigInt"'
	}

	sub(a, b) {
		if (this.#isBigInt(a) && this.#isBigInt(b)) {
			return (BigInt(a) - BigInt(b)).toString()
		}
		return 'Введите числа типа "BigInt"'
	}

	multiply(a, b) {
		if (this.#isBigInt(a) && this.#isBigInt(b)) {
			return (BigInt(a) * BigInt(b)).toString()
		}
		return 'Введите числа типа "BigInt"'
	}

	divide(a, b) {
		if (this.#isBigInt(a) && this.#isBigInt(b)) {
			return (BigInt(a) / BigInt(b)).toString()
		}
		return 'Введите числа типа "BigInt"'
	}
}
