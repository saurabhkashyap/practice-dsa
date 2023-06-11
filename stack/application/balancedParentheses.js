let arePair = function (opening, closing){
    if(opening === '(' && closing === ')') return true;
    else if(opening === '{' && closing === '}') return true;
    else if(opening === '[' && closing === ']') return true;
    else return false;
}

let isParenthesesBalanced = function (expr){
    let myStack = new Stack();
    for(let i=0; i<expr.length; i++){
        let exprSymbol = expr.charAt(i);
        if(exprSymbol === '(' || exprSymbol === '{' || exprSymbol === '['){
            myStack.push(exprSymbol);
        }else if(exprSymbol === ')' || exprSymbol === '}' || exprSymbol === ']'){
            if(!arePair(myStack.pop(), exprSymbol)){
                return false;
            }
        }
    }
    return true;
}

let Stack = function (){
    this.storage = [];
    this.top = 0;

    this.push = function (element){
        this.storage.push(element);
        this.top++;
    }

    this.pop = function (){
        if(this.top === 0){
            return undefined;
        }else{
            this.top--;
            let poppedItem = this.storage[this.top];
            delete this.storage[this.top];
            return poppedItem;
        }
    }

    this.printStack = function (){
        console.log(this.storage);
    }
}

console.log(isParenthesesBalanced('{()}'))
console.log(isParenthesesBalanced('{[}]'))