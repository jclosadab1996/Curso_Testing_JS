// matchers

test("test obj", () => {
  const data = { name: "andru" };

  // Nos sirve para trabajar con objetos .toEqual({property:'value'})
  data.lastname = "losada";
  expect(data).toEqual({ name: "camilo", lastname: "losada" });
});

test("null", () => {
  const data = null;

  // El valor que espera es null
  expect(data).toBeNull();
  // El valor que espera es undefined
  expect(undefined).toBeUndefined();

  // El dato a retornar es definido como nulo
  expect(data).toBeDefined();
  // El dato que espera NO es undefined
  expect(data).not.toBeUndefined();
});

test("booleans", () => {
  // El valor que esperamos es un "true"
  expect(true).toEqual(true);
  // El valor que esperamos es un "false"
  expect(false).toEqual(false);

  // Recordemos que hay valores que se pueden interpretar como falsos
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("string", () => {
  // Podemos hacer uso de expreciones regulares
  expect("Chirstoph").toMatch(/stop/); // ¿Contiene la palabra stop?
});

test("Arrays", () => {
  const numbers = [1, 2, 3, 4, 5];
  // La lista debe contener el número 3
  expect(numbers).toContain(3);
});
