function solve() {
    let string = document.getElementById("text").value;
    let currentCase = document.getElementById("naming-convention").value;

    string = string.toLowerCase();
    let allWords = string.split(' ');
    let res = '';
    let isCorrenct = false;

    if(currentCase === "Camel Case"){
        res = allWords[0];
        isCorrenct = true;
    }
    else if(currentCase === "Pascal Case"){
        res = allWords[0].charAt(0).toUpperCase() + allWords[0].slice(1);
        isCorrenct = true;
    }
    else {
        res = "Error!";
    }

    if(isCorrenct){
        for (let i = 1; i < allWords.length; i++){
            res += allWords[i].charAt(0).toUpperCase() + allWords[i].slice(1);
        }
    }
    document.getElementById("result").innerHTML = res;
    console.log(res);

}