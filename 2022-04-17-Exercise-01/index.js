let firstNo = prompt("Please enter first number")
let secondNo = prompt("Please enter second number")

let result = document.getElementById('result')

if (firstNo == secondNo) {
    result.innerHTML = "<b>Number are equal</b>"
} else if (firstNo > secondNo) {
    result.innerHTML = `<b>The number ${firstNo} is bigger than number ${secondNo}</b>`
} else {
    result.innerHTML = `<b>The number ${secondNo} is bigger than number ${firstNo1}</b>`
}