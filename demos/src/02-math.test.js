const { sum, multiply, divide } = require("./02-math");

test("añadir 1 + 3 debe dar 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("añadir 9 x 2 debe dar 18", () => {
  const rta = multiply(9, 2);
  expect(rta).toBe(18);
});

test("añadir 12 / 3 debe dar 4", () => {
  const rta = divide(12, 3);
  expect(rta).toBe(4);

  // Podemos tener varios escenarios de prueba en nuestros test
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});
