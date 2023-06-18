let outputEl = document.getElementById("output-el")
let eq = false
clear()
let records = []

numEl = document.querySelectorAll(".number")
numEl.forEach(item => {
	item.addEventListener("click", function() {
		let isOp = outputEl.value
		if (eq === true) {
			eq = false
			clear()
		}
		if (isOperand(isOp) && isOp != "") {
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
	for (let i = 0; i < records.length; ++i) {
		if (i % 2 == 0) {
			if (isOperand(records[i])) {
				records.pop()
				clear()
			}
		} else if (i % 2 == 1) {
			if (!isOperand(records[1])) {
				records.pop()
				clear()
			}
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

	let str = ""
	for (let i = 0; i < records.length; ++i) {
		if (i % 2 == 0)
			str += `${Number(records[i])}`
		else
		str += `${records[i]}`
	}
	console.log(str)
	let result = eval(str)
	outputEl.value = result
	records = []
	eq = true
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

let dotEl = document.getElementById("dot")
dotEl.addEventListener("click", function() {
	if (!outputEl.value.includes('.'))
		outputEl.value += '.'
})
