let screenEl = document.getElementById("screen")
let outputEl = document.createElement("output")
clear()
screenEl.appendChild(outputEl)
let records = []

numEl = document.querySelectorAll(".number")
numEl.forEach(item => {
	item.addEventListener("click", function() {
		let isOp = outputEl.innerText
		if (isOperand(isOp) && isOp != "")
		{
			records.push(isOp)
			checkRecords()
			clear()
		}
		outputEl.innerText += item.innerText
		console.log(outputEl.innerText)
		console.log(records)
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
		if (!isOperand(isNum) && isNum != "")
		{
			records.push(isNum)
			checkRecords()
			clear()
		}
		outputEl.innerText = item.innerText
		console.log(outputEl.innerText)
		console.log(records)
	})
})

function checkRecords() {
	if (records.length === 1) {
		if (isOperand(records[0])) {
			records.pop()
			clear()
		}
	} else if (records.length === 2) {
		if (!isOperand(records[1])) {
			records.pop()
			clear()
		}
	} else if (records.length === 3) {
		if (isOperand(records[2])) {
			records.pop()
			clear()
		}
	}
}

let equalEl = document.getElementById("equal")
equalEl.addEventListener("click", function() {
	let isNum = outputEl.innerText
	if (!isOperand(isNum)) {
		records.push(isNum)
		checkRecords()
	}
	console.log(records)

	if (records.length === 3) {
		let str = `${Number(records[0])} ${records[1]} ${Number(records[2])}`
		let result = eval(str)
		outputEl.innerText = result
		records = []
	}
})

function clear() {
	outputEl.innerText = ""
}

let resetEl = document.getElementById("all-clear")
resetEl.addEventListener("click", function() {
	clear()
	records = []
})

let clearEl = document.getElementById("clear")
clearEl.addEventListener("click", function() {
	clear()
})