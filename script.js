let fullName = "Muhammad Nouman Khalid";
let num = 7;
let isFollow = true;
let num1 = 25;
let num2 = 5;
let sum = num1+num2;
let diff= num1-num2;
let mul = num1*num2;
let div = num1/num2;
let cal = (36 / 6 * 3 + Math.pow(2, 4) - (3 + 5));

document.getElementById("alertName").onclick = () => {
    alert(fullName);
}
document.getElementById("alertNum").onclick  = () => {
    alert(`I am a number \"${num}\" stored in a variable.`);
} 
document.getElementById("varName").onclick   = () => {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("statement").innerHTML = "The variable name is <code>isFollow</code>"
    document.getElementById("result").innerHTML    = `The value of variable is \"${isFollow}\", it is Boolean DataType`
}
document.getElementById("camelCase").onclick  = () => {
    document.getElementById("statement").innerHTML = ""
    document.getElementById("result").innerHTML = ""
    document.getElementById("statement").innerHTML = ""
    document.getElementById("statement").innerHTML = "<ul class='left'><li>camelCase</li><li>userTime</li><li>userTimeLimit</li></ul>";
}
document.getElementById("sum").onclick             = () => {
    document.getElementById("statement").innerHTML = "<code>num1 = 25</code> and <code>num2 = 5</code>"
    document.getElementById("result").innerHTML = `${num1} + ${num2} = ${sum}`
}
document.getElementById("subtract").onclick        = () => {
    document.getElementById("statement").innerHTML = "<code>num1 = 25</code> and <code>num2 = 5</code>"
    document.getElementById("result").innerHTML = `${num1} - ${num2} = ${diff}`
}
document.getElementById("multiply").onclick        = () => {
    document.getElementById("statement").innerHTML = "<code>num1 = 25</code> and <code>num2 = 5</code>"
    document.getElementById("result").innerHTML = `${num1} * ${num2} = ${mul}`
}
document.getElementById("divide").onclick          = () => {
    document.getElementById("statement").innerHTML = "<code>num1 = 25</code> and <code>num2 = 5</code>"
    document.getElementById("result").innerHTML = `${num1} / ${num2} = ${div}`
}
document.getElementById("calculate").onclick       = () => {
    document.getElementById("statement").innerHTML = "36/6*3+2**4(3+5)"
    document.getElementById("result").innerHTML = `The result is ${cal}`
}


document.getElementById("clear1").onclick     = () => {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear2").onclick     = () => {
    document.getElementById("result").innerHTML = ""
}