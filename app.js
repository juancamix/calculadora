let number1 = document.getElementById("n1")
let number2 = document.getElementById("n2")
let plus = document.getElementById("sum")
let minus = document.getElementById("min")
let multi = document.getElementById("multi")
let div = document.getElementById("divi")
let modu = document.getElementById("modu")
let result = document.getElementById("result")
let operate = document.getElementById("operation")

// plus.addEventListener("enter", Fplus);
// minus.addEventListener("enter",Fmin);
// multi.addEventListener("enter",Fmulti);
// div.addEventListener("enter",Fdiv);
// modu.addEventListener("enter",Fmodu)


document.addEventListener("keydown", (event) => {
  const codeValue = event.keyCode;

  if (codeValue === 13) {
    if (operate.value == "+") {
      let count = parseInt(number1.value) + parseInt(number2.value);
      result.textContent = count;
    } else if (operate.value == "-") {
      let count = parseInt(number1.value) - parseInt(number2.value);
      result.textContent = count;
    } else if (operate.value == "*") {
      let count = parseInt(number1.value) * parseInt(number2.value);
      result.textContent = count;
    } else if (operate.value == "/") {
      let count = parseInt(number1.value) / parseInt(number2.value);
      result.textContent = count.toFixed(2);
    }else if (operate.value == "%") {
        let count = parseInt(number1.value) % parseInt(number2.value);
        result.textContent = count;
    }
  }
});
function Fplus() {
let n1 = Number (number1.value)
let n2 = Number (number2.value)

result.textContent = n1 + n2
}

function Fmin() {
let n1 = Number (number1.value)
let n2 = Number (number2.value)
  
  result.textContent = n1 - n2
}

function Fmulti() {
  let n1 = Number (number1.value)
  let n2 = number2.value
  
  result.textContent = n1 * n2
}

function Fdiv() {
  let n1 = Number (number1.value)
  let n2 = Number (number2.value)

  result.textContent = n1 / n2
  if (n1 === 0 || n2 === 0){
    alert("no es divisible por cero")
  }
}
function Fmodu() {
  let n1 = Number (number1.value)
  let n2 = Number (number2.value)
  
  result.textContent = n1 % n2
  }

