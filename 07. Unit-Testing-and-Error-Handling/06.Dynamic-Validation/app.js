function validate() {
    let input = document.getElementById('email');
    input.addEventListener("change", onChange)

    function onChange(e){
        let myReg = new RegExp("[a-z]+@[a-z]+[.]{1}[a-z]+");
        if(e.target.value.match(myReg) ){
            e.target.classList.add("error");
            e.target.classList.remove("error");
        }
        else {
            console.log("error");
            e.target.classList.add("error");
        }
    }
}