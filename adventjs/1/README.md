# Reto #1: 🎁 ¡Primer regalo repetido!

Con la función `prepareGifts` buscamos procesar una lista de números mágicos que representan regalos para Santa Claus, eliminando duplicados y ordenándolos en orden ascendente antes de entregárselos a los elfos.

Esta función recibe como entrada un arreglo llamado `gifts`, que **puede contener números enteros duplicados**.

Primero, utilizamos `new Set(gifts)` para eliminar los duplicados, ya que los conjuntos (`Set`) en JavaScript almacenan únicamente valores únicos.

Posteriormente, convierte el conjunto de vuelta a un arreglo, ya que la respuesta debe darse en forma de arreglo, para esto usaremos `Array.from(...)`. Una vez obtenidos los números únicos, aplicamos el método `.sort((a, b) => a - b)` para ordenarlos en orden ascendente, usando una función de comparación que asegura un orden numérico correcto.

El método `.sort()`, por defecto, nos permite ordenar un arreglo con base en su orden lexicográfico (como el de un diccionario) de menor a mayor peso, por ejemplo, la `a` iría antes de la `b` y la `c`. Para poder ordenarlo con base en otro criterio, podemos pasarle una _función de comparación,_ la cual dicta en que orden se deben organizar los elementos del arreglo. Esta función debe retornar un número, este número le dice a la función que hacer en cada par de elementos:

- Si `a - b` es negativo, significa que `a` debe de ir antes que `b` en el arreglo.
- Si `a - b` es positivo, significa que `a`debe ir después de `b` en el arreglo
- Si `a - b` es cero, significa que no debe cambiarse el orden.

Finalmente, la función devuelve un nuevo arreglo que contiene los números únicos, organizados de menor a mayor.
