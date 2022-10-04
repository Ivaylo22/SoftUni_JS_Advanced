function solve() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
    output.innerHTML = "";

    let splitText = input.split(".").filter(x => x.length > 0)

    for(let i = 0; i < splitText.length; i+= 3){
        let res = [];
        for(let x = 0; x < 3; x++){
            if(splitText[i + x]){
                res.push(splitText[i + x]);
            }
        }
        let resText = res.join(". ") + ".";
        output.innerHTML += `<p>${resText}</p>`;
    }
}