let screenEl = document.getElementById("screen")
let outputEl = document.createElement("output")
clear()
screenEl.appendChild(outputEl)
let store = []

numEl = document.querySelectorAll(".number")
numEl.forEach(item => {
	item.addEventListener("click", function() {
		let isOp = outputEl.innerText
		if (isOperand(isOp))
		{
			store.push(isOp)
			recordOp()
			clear()
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
		if (!isOperand(isNum))
		{
			store.push(isNum)
			recordOp()
			clear()
		}
		outputEl.innerText = item.innerText
		console.log(outputEl.innerText)
		console.log(store)
	})
})

function recordOp() {
	if (store.length === 1) {
		if (isOperand(store[0])) {
			store.pop()
			clear()
		}
	} else if (store.length === 2) {
		if (!isOperand(store[1])) {
			store.pop()
			clear()
		}
	} else if (store.length === 3) {
		if (isOperand(store[2])) {
			store.pop()
			clear()
		}
	}
}

let equalEl = document.getElementById("equal")
equalEl.addEventListener("click", function() {
	let isNum = outputEl.innerText
	if (!isOperand(isNum)) {
		store.push(isNum)
		recordOp()
	}
	console.log(store)

	let str = `${Number(store[0])} ${store[1]} ${Number(store[2])}`
	let result = eval(str)
	outputEl.innerText = result
	store = []
})

function clear() {
	outputEl.innerText = ""
}

let resetEl = document.getElementById("all-clear")
resetEl.addEventListener("click", function() {
	clear()
	store = []
})

let clearEl = document.getElementById("clear")
clearEl.addEventListener("click", function() {
	clear()
})