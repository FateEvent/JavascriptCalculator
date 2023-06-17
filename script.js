let outputEl = document.getElementById("output-el")
clear()
let records = []

numEl = document.querySelectorAll(".number")
numEl.forEach(item => {
	item.addEventListener("click", function() {
		let isOp = outputEl.value
		if (isOperand(isOp) && isOp != "")
		{
			records.push(isOp)
			checkRecords()
			clear()
		}
		outputEl.value += item.innerText
		console.log(outputEl.value)
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
		let isNum = outputEl.value
		if (!isOperand(isNum) && isNum != "")
		{
			records.push(isNum)
			checkRecords()
			clear()
		}
		outputEl.value = item.innerText
		console.log(outputEl.value)
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
	let isNum = outputEl.value
	if (!isOperand(isNum)) {
		records.push(isNum)
		checkRecords()
	}
	console.log(records)

	if (records.length === 3) {
		let str = `${Number(records[0])} ${records[1]} ${Number(records[2])}`
		let result = eval(str)
		outputEl.value = result
		records = []
	}
})

function clear() {
	outputEl.value = ""
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