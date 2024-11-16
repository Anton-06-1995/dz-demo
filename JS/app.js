//Исходные данные
const positionLat = 10;
const positionLong = 20;
const addressLat = 30;
const addressLong = 50;

//Решение

console.log("Расстояние до точки назначения " + ((Math.sqrt(((positionLong - positionLat) **2) + ((addressLong - addressLat)**2)))).toFixed(2) + "м");

