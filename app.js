historyVal = document.querySelector('#history-value')
outputVal = document.querySelector('output-value')

function getHistory() {
    return historyVal.innerHTML
}

function printHistory(num) {
    historyVal.textContent = num
}

function getOutput() {
    return document.getElementById('output-value').innerText
}

function printOutput(num) {
    if (num == "") {
        outputVal.textContent = num
    } else {
        outputVal.textContent = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    var n = Number(num)
    var value = n.toLocaleString('en')
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(',', ''))
}

let operator = document.getElementsByClassName('operator')
for(let i = 0;i<operator.length;i++){
    operator[i].addEventListener('click', function(){
        alert('the operator '+this.id)
    })
}