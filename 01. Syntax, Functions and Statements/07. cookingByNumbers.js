function cook(num, ...params){
    let number = Number(num);
    params.forEach(x => {
        number = moderate(number, x)
        console.log(number);       
    });

    function moderate(num, param){
        switch(param){
            case "chop":
                return num /= 2;
            case "dice":
                return num = Math.sqrt(num);
            case "spice":
                return num += 1;
            case "bake":
                return num *= 3;
            case "fillet":
                return num = num * 0.8;
        }
    }
}

cook('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
