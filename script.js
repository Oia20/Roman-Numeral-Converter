let userInput = document.getElementById("number")
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output")
let romanNumArr = []
const numToRoman = () => {
    output.innerHTML = ""
    romanNumArr = []
    console.log(userInput.value)
    if (userInput.value > 3999) {
        output.innerHTML = "Please enter a number less than or equal to 3999"
        return
    } else if(isNaN(userInput.value) || userInput.value == "") {
        output.innerHTML = "Please enter a valid number"
        return
    } else if(userInput.value < 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1"
        return
    } 

  while (userInput.value > 0) {
    if (userInput.value >= 1000) {
        romanNumArr.push("M")
        userInput.value -= 1000
    } else if (userInput.value >= 900) {
        romanNumArr.push("CM")
        userInput.value -= 900
    } else if (userInput.value >= 500) {
        romanNumArr.push("D")
        userInput.value -= 500
    } else if (userInput.value >= 400) {
        romanNumArr.push("CD")
        userInput.value -= 400
    } else if (userInput.value >= 100) {
        romanNumArr.push("C")
        userInput.value -= 100
    } else if (userInput.value >= 90) {
        romanNumArr.push("XC")
        userInput.value -= 90
    } else if (userInput.value >= 50) {
        romanNumArr.push("L")
        userInput.value -= 50
    } else if (userInput.value >= 40) {
        romanNumArr.push("XL")
        userInput.value -= 40
    } else if (userInput.value >= 10) {
        romanNumArr.push("X")
        userInput.value -= 10
    } else if (userInput.value >= 9) {
        romanNumArr.push("IX")
        userInput.value -= 9
    } else if (userInput.value >= 5) {
        romanNumArr.push("V")
        userInput.value -= 5
    } else if (userInput.value >= 4) {
        romanNumArr.push("IV")
        userInput.value -= 4
    } else {
        romanNumArr.push("I")
        userInput.value -= 1
    }
    } 
    output.innerHTML = romanNumArr.join("")
}

convertBtn.addEventListener("click", numToRoman)