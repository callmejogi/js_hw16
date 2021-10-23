const x = 4;
const y = 9;
const radius = 10;

const radius1 = Math.sqrt((x**2 + y**2));
console.log(radius1);

radius1 < radius? alert(`Да,точка А лежит внутри окружности`) : alert(`Нет,точка А не лежит внутри окружности`);