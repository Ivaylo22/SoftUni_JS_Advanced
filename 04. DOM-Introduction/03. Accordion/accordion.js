function toggle() {
    let buttonState = document.getElementsByClassName("button")[0].innerHTML

    if(buttonState === "More"){
        document.getElementsByClassName("button")[0].innerHTML = "Less";
        document.getElementById("extra").style.display = "block";
    }

    if(buttonState === "Less"){
        document.getElementsByClassName("button")[0].innerHTML = "More";
        document.getElementById("extra").style.display = "none";
    }


    console.log(buttonState);
}