let variable = prompt("Please enter random number")
var list = document.querySelectorAll('#list li')

if (isNaN(variable)) {
    alert(`It's not a valid value, only number are allowed`)
} else {
    if (variable > list.length) {
        for (let i = 0; i < list.length; i++) {
            list[i].style.color = 'red'
        }
    } else {
        for (let i = 0; i < variable; i++) {
            list[i].style.color = 'red'
        }
    }
}