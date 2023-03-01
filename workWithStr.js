const convertStr = (str) => {
	let newStr = str.trim()
	return newStr[0].toUpperCase() + newStr.slice(1).toLowerCase()
}

const placementSpace = (str) => {
	return str
		.replace(/\s+(?=[.,!?])/g, '')
		.replace(/[.,!?-]/g, '$& ')
		.replace(/\s{2,}/g, ' ')
		.trim()
}

const strToArr = (str) => {
	return placementSpace(str)
		.replace(/[.,!?]/g, '')
		.split(/\s+/g)
}

const countWords = (str) => {
	return strToArr(str).length
}

const countUniqueWords = (str) => {
	let map = new Map()
	const arr = strToArr(str.toLowerCase())

	for (const word of arr) {
		const value = map.get(word)
		if (value) map.set(word, value + 1)
		else map.set(word, 1)
	}
	let result = ``
	for (const [keys, value] of map) {
		result += `"${keys}" встречается ${value}р\n`
	}
	return result
}

console.log(
	countUniqueWords(
		'Текст, в котором в слово текст несколько раз встречается и слово тоже',
	),
)
