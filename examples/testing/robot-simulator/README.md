Escribir un simulador de robot.

Las instalaciones de prueba de una fábrica de robots necesitan un programa para verificar los movimientos de los robots.

Los robots tienen tres posibles movimientos:

- Girar a la derecha
- Girar a la izquierda
- Avanzar

Los robots se colocan en una cuadrícula infinita hipotética, frente a una determinada
dirección (norte, este, sur u oeste) en un conjunto de coordenadas {x,y}.

Luego, el robot recibe una serie de instrucciones, momento en el cual la
instalación de prueba verifica la nueva posición del robot, y en que
dirección apunta.

- La cadena de letras "RAALAL" significa:
  - Girar a la derecha
  - Avanzar dos veces
  - Girar a la izquierda
  - Avanzar una vez
  - Gire a la izquierda una vez más
- Digamos que un robot comienza en {7, 3} mirando al norte. Luego, ejecutar esta secuencia
  de instrucciones debe dejarlo en {9, 4} mirando al oeste.

1. Crear un proyecto de NPM.
2. Instalar Jest como dependencia de desarrollo.
3. Crear un archivo `robot.js` que exporta una función `createRobot`.
4. Crear un archivo `robot.test.js` con las pruebas automatizadas para `robot.js`.

Cualquiera de los movimientos lanza un error si se sale de los límites 0,0 a 10,10.

Intentar TDD en esta misión.

### Nota:

Recuerda usar matchers como:

- .toBe
- .toMatch
- .toHaveProperty
