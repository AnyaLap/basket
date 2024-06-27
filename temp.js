//Создаем массив городов
let cities = ['Москва','Париж','Рим','Лондон','Афины'];

//Создаем пустой массив температур
let temperatures = [];

// Получаем температуру для каждого города
for(let i = 0; i < cities.length; i ++){
    let temperature = prompt(`Температура в городе ${cities[i]}`);
    temperatures.push(Number(temperature));
}

//Создаем список с информацией о каждом городе и его температуре
const container = document.querySelector('.container');
let list = document.createElement('div');
container.append(list);
let minTemp = Infinity;
let maxTemp = -Infinity;

for(let i = 0; i < cities.length; i ++){
    let listItem = document.createElement('p');
    listItem.classList.add('fontTemp');
    listItem.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]} °C`;
    list.append(listItem);

// Находим минимальную и максимальную температуру
    if (temperatures[i] < minTemp) {
         minTemp = temperatures[i];
    }

    if (temperatures[i] > maxTemp) {
        maxTemp = temperatures[i];
    }
}

// Выводим максимальную и минимальную температуру
let maxInfo = document.createElement('p');
maxInfo.classList.add('fontMaxMin');
maxInfo.textContent = `Максимальная температура: ${maxTemp} °C`;
container.append(maxInfo);

let minInfo = document.createElement('p');
minInfo.classList.add('fontMaxMin');
minInfo.textContent = `Минимальная температура: ${minTemp} °C`;
container.append(minInfo);
