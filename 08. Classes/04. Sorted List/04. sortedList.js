class List{
    list = [];
    size = 0;

    add(element){
        this.list.push(element);
        this.size++;
        this.list.sort((a,b)=>{return Number(a) - Number(b)})
    }

    remove(index){
        if(index > this.list.length - 1 || index < 0){
            return;
        }
        this.list.splice(index, 1);
        this.size--;
    }

    get(index){
        if(index > this.list.length - 1 || index < 0){
            return;
        }
        return this.list[index];
    }
}

let list = new List();
list.add(7);
list.add(6);
list.add(5);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

