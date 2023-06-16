let screenEl = document.getElementById("screen")
let outputEl = document.createElement("output")
reset()
screenEl.appendChild(outputEl)
let store = []

numEl = document.querySelectorAll(".number")
numEl.forEach(item => {
	item.addEventListener("click", function() {
		let isOp = outputEl.innerText
		if (isOperand(isOp))
		{
			store.push(isOp)
			// recordOp()
			reset()
		}
		outputEl.innerText += item.innerText
		console.log(outputEl.innerText)
		console.log(store)
	})
})

function isOperand (operand) {
	if (operand == '+' || operand == '-'
	|| operand == '*' || operand == '/')
		return 1
	return 0
}

opEl = document.querySelectorAll(".op")
opEl.forEach(item => {
	item.addEventListener("click", function() {
		let isNum = outputEl.innerText
		if (Number(isNum) !== 'Nan')
		{
			store.push(isNum)
			// recordOp()
			reset()
		}
		outputEl.innerText = item.innerText
		console.log(outputEl.innerText)
		console.log(store)
	})
})

function recordOp() {
	if (store.length === 1) {
		if (Number(store[0]) === 'Nan') {
			store.pop()
			reset()
		}
	} else if (store.length === 2) {
		if (Number(store[1]) !== 'Nan') {
			store.pop()
			reset()
		}
	} else if (store.length === 3) {
		if (Number(store[2]) === 'Nan') {
			store.pop()
			reset()
		} else {
			let str = `${Number(store[0])} ${store[1]} ${Number(store[2])}`
			let result = eval(str)
			store = []
			console.log(result)
		}
	}
}

function equals() {
	if (store.length === 3)
	{
		recordOp()
	}
}

let equalEl = document.getElementById("equal")
equalEl.addEventListener("click", equals)

function reset() {
	outputEl.innerText = ""
}
