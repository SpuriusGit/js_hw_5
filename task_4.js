class StringBuilder{
    constructor(_value){
        this.value = _value;
    }
    get(_value){
        return console.log(this.value);
    }
    append(str){
        return this.value = this.value + str;
    }
    prepend(str){
        return this.value = str += this.value;
    }
    pad(str){
        return this.value = str += this.value +=str;
    }
}


const builder = new StringBuilder('.');
builder.get();
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='