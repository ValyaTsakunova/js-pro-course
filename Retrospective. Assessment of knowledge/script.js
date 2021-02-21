//Создание счетчика

function createCounter(initialValue = 0){
    let number = initialValue;
    let newCounter = {
        showValue: function (){
            return number;
        },
        increment: function (n = 1) {
                return number = number + n;
        },
        decrement:  function (m = 1) {
                return number = number - m;
        },
        discard: function(){
            return number = initialValue
        }  
    }
  return newCounter
  }

const counter = createCounter();

console.log(counter.showValue());
console.log(counter.increment());
console.log(counter.increment(5));
console.log(counter.decrement());
console.log(counter.decrement(2));
console.log(counter.showValue());
console.log(counter.discard());


const counter1 = createCounter(3);

console.log(counter1.showValue());
console.log(counter1.increment());
console.log(counter1.increment(3));
console.log(counter1.decrement());
console.log(counter1.decrement(3));
console.log(counter1.showValue());
console.log(counter1.discard());


Создание фильтра

function filter(){
    let array = [];
    let arrOfNumbers = [];
    for(var i = 0; i < arguments.length;i++){
        arrOfNumbers[i] = arguments[i];
        
        }
    for(let num of arrOfNumbers){
        if(!array.includes(num)){
        array.push(num);
        }
    }
    
    
    return array
}

console.log(filter(1,1,1,1,4,4,7,7,9,4,7,8,9));