class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    get length() {
        return this._innerLength;
    }
    set length(value){
        if(value <0){
            this._innerLength = 0;
        }
    }

    increase(length){
        this.innerLength += length;
    }

    decrease(length){
        this.innerLength -= length;
        if(this.innerLength < 0){
            this.innerLength = 0;
        }
    }

    toString(){
        if(this.innerLength >= this.innerString.length){
            return this.innerString;
        }
        else{
            let currString = this.innerString.slice(0, Number(this.innerLength));
            return currString + "...";
        }
    }
}

let s = new Stringer("Viktor", 6);
console.log(s.toString());


