function parseCount (value) {
    if (!Number.parseFloat(value)) {
        throw new Error('Невалидное значение');
    }
    return Number.parseFloat(value);
}

function validateCount (value) {
    try {
        if (parseCount(value)) {
            return parseCount(value);
        }
    } catch (error) {
        console.log(error);
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a)  {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return a + b + c;
    }

    get area() {
        let p = (a + b + c) / 2;
        return Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        this.perimeter = 'Ошибка! Треугольник не существует';
        this.area = 'Ошибка! Треугольник не существует';
        return new Triangle(a, b, c);
    }
}