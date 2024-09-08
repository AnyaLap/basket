//Находим необходимые элементы
const sumInfo1 = document.getElementById('sumInfo1');
const sumInfo2 = document.getElementById('sumInfo2');
const sumInfo3 = document.getElementById('sumInfo3');
const sumInfo4 = document.getElementById('sumInfo4');
const totalSumInfo = document.getElementById('totalSumInfo');
const addDiscount = document.getElementById ('addDiscount');


addDiscount.addEventListener('click', function () {

      //Создаем переменную и находим итоговую сумму
    let totalS = +sumInfo1.innerHTML+ +sumInfo2.innerHTML+ +sumInfo3.innerHTML+ +sumInfo4.innerHTML;

    //Выводим значение суммы на страницу
    totalSumInfo.textContent = totalS;
 
    //Рассчитываем каждую сумму товара с учетом скидки
    let newSumInfo1 = +sumInfo1.innerHTML*0.8;
    sumInfo1.textContent = newSumInfo1;

    let newSumInfo2 = +sumInfo2.innerHTML*0.8;
    sumInfo2.textContent = newSumInfo2;

    let newSumInfo3 = +sumInfo3.innerHTML*0.8;
    sumInfo3.textContent = newSumInfo3;

    let newSumInfo4 = +sumInfo4.innerHTML*0.8;
    sumInfo4.textContent = newSumInfo4;

    let newTotal = totalS*0.8;
    totalSumInfo.textContent = newTotal + "₽";
 },
 
 //Делаем так, чтобы функция сработала только один раз
 { once: true });
