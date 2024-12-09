# Reto #2: 🖼️ Enmarcando nombres

[NO DISPONIBLE](https://youtube.com/@achalogy)

Buscamos generar un marco rectangular para una serie de nombres, construyéndolo con asteriscos (`*`). Dado que el marco debe encerrar todos los nombres, debemos considerar el ancho del nombre más largo. Por ejemplo:

Tenemos los siguientes nombres: `['midu', 'madeval', 'educalvolpz']`. El nombre con la longitud mayor, es decir, el que ocupa más espacio en el marco, es `educalvolpz`. Por lo tanto, el marco debe cubrir:

- **2** _(Borde de `*`)_
- **2** _(Borde de espacios)_
- **11** _(Mayor longitud de los nombres)_

Esto nos da un total de:

```js
* educalvolpz *
|--    15   --|
```

De esta forma, encontramos el ancho que debe tener el marco. En este ejemplo, es **15**.

Para obtener este valor máximo, utilizamos `Math.max()`, que recibe cualquier cantidad de parámetros y devuelve el mayor. Por ejemplo:

```js
const names = ["midu", "madeval", "educalvolpz"];

const maxWidth = Math.max(4, 7, 11); // 11
```

Este `4, 7, 11` lo podemos generar utilizando el operador de propagación (`...`) para separar el arreglo de longitudes de los nombres, el cual es `[4, 7, 11]`. El cálculo final del ancho del marco puede realizarse de la siguiente manera:

```js
const width = Math.max(...names.map((x) => x.length)) + 4;
```

En esta longitud basamos toda nuestra solución, ya que podemos crear los bordes superior e inferior repitiendo el `"*"` (asterisco) tantas veces como indique el ancho:

```js
const borderY = '*'.repeat(width);
```

Cada nombre deberá tener un `*` al lado izquierdo y otro al lado derecho, lo cual ya llena **4** de ese ancho necesario. Sin embargo, como los nombres más cortos tienen un ancho menor al máximo, debemos agregar `width - nombre.length - 4` espacios al final de cada nombre:

```js
const wrappedNames = names.map((x) => "* " + x.padEnd(width - 4, " ") + " *");
```

En este punto, ya tenemos todo. Solo debemos unir los elementos en un string, donde cada línea representa un borde o un nombre:

```js
function createFrame(names) {
  const width = Math.max(...names.map((x) => x.length)) + 4;
  const borderY = '*'.repeat(width);
  const wrappedNames = names
    .map((x) => "* " + x.padEnd(width - 4, " ") + " *")
    .join("\n");

  return borderY + "\n" + wrappedNames + "\n" + borderY;
}
```
