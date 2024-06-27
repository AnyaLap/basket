let numbers = [];

// Заполняем массив
for(let i = -10; i <= 10; i ++){
    numbers.push(i);
}
console.log(numbers);

let newNumbers =[];
//Удаляем все отрицательные числа из массива
for(let i = 0; i < numbers.length; i ++){
    if(numbers[i] < 0){
    continue;
    }
    newNumbers.push(numbers[i]);
}
numbers = newNumbers;
console.log(numbers);

//Возведем каждое число в квадрат
for(let i = 0; i < numbers.length; i ++){
numbers[i] = numbers[i]**2;
}
console.log(numbers);

//Отсортируем числа в порядке убывания
let sortedNumbers = [];

for (let i = 0; i < numbers.length; i ++) {
    let choice = false;
    for (let j = 0; j < sortedNumbers.length; j ++) {
        if (numbers[i] > sortedNumbers[j]) {
            sortedNumbers.splice(j, 0, numbers[i]);
            choice = true;
            break;
        }
    }
    if (!choice) {
        sortedNumbers.push(numbers[i]);
    }
}
numbers = sortedNumbers;
console.log(numbers);
