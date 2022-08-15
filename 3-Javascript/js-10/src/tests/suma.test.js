const suma = require('../js/suma')

//pedir un valor esperado
//comparar el valor con el valor esperados

test('sumar 1 + 2 es igual a 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('sumar 1 + 4 no es igual a 0', () => {
    expect(suma(1, 2)).not.toBe(0);
});