# Reto #3: 🏗️ Organizando el inventario

[NO DISPONIBLE](https://youtube.com/@achalogy)

Para lograr reestructurar el arreglo de juguetes y reorganizarlo en un objeto estructurado por categorías, nos basaremos en la idea de comenzar con un objeto vacío que iremos llenando juguete por juguete.

Usando el método `.reduce()`, convertiremos el arreglo en un solo valor: este nuevo objeto estructurado. `.reduce()` recibe dos argumentos principales: una función de acumulación y un valor inicial.

Esta función de acumulación recibe dos argumentos principales: `accumulator` y `current`. Estos representan el valor acumulado en su estado actual y el elemento que estamos procesando actualmente, respectivamente. Esta función debe retornar el nuevo estado del valor acumulado.

Iniciaremos con:

```js
inventory.reduce((r, toy) => {

}, {})
```

En este caso, `r` representa el acumulador, que es el objeto donde iremos organizando los datos, y `toy` es el elemento actual del arreglo que se está procesando. El valor inicial del acumulador será un objeto vacío: `{}`.

Ya que intentar acceder a `r[toy.category][toy.name]` para cambiar la cantidad cuando una categoría o un juguete aún no estén presentes en el objeto generará un error, definiremos un valor por defecto si aún no existen estos elementos. Lograremos esto usando el operador `??=` (nullish coalescing assignment), que asigna un valor **solo si la clave no existe o si su valor es `undefined` o `null`**.

```js
function organizeInventory(inventory) {
  return inventory.reduce((r, toy) => {
    r[toy.category] ??= {}
    r[toy.category][toy.name] ??= 0
    r[toy.category][toy.name] += toy.quantity
    return r
  }, {})
}
```

Por lo tanto, por cada juguete:
1. Si no existe la categoría, la crea con un valor por defecto (`{}`).
2. Si no existe el juguete dentro de la categoría, lo crea con un valor por defecto (`0`).
3. Aumenta la cantidad del juguete.
4. Retorna el valor final en el estado actual.
