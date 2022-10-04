function subtract() {
    let a = document.getElementById("firstNumber").value;
    let b = document.getElementById("secondNumber").value;

    let result = Number(a) - Number(b);

    document.getElementById("result").innerText = result;

    console.log();
}