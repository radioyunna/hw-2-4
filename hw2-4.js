// Задание 1
let i = 0;
while (i <= 1) {
    console.log('Привет');
    i++;
}

// Задание 2
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3
let i = 7;
while (i <=22) {
    console.log(i)
    i++
}


// Задание 4
let obj = {
    'Коля': '200',
    'Петя': '400',
    'Вася': '300',
}

for (let key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов.`);
}


//Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n = n/2;
    num++;
 }
 console.log(n);
 console.log(num);

 //Задание 6

 for (let dayNumber = 1; dayNumber <= 31; dayNumber+=7) {
    if (dayNumber % 7 === 0) {
        console.log('Сегодня не пятница, отчет не нужен.');
        continue;
    }
    console.log(`Сегодня пятница, ${dayNumber} -e число. Нужно подготовить отчёт.`)
}
