# Reemplazar perforación de props con contexto

En este ejemplo, activar la casilla cambia la prop `imageSize` que se pasa a cada `<PlaceImage>`. El estado de la casilla se mantiene en el nivel superior del componente `App`, pero cada `<PlaceImage>` necesita estar consciente del estado.

Actualmente, `App` pasa `imageSize` a `List`, el cual lo pasa a cada `Place`, el cual lo pasa al `PlaceImage`. Remueve la prop `imageSize`, y en su lugar pásala desde el componente `App` directamente al `PlaceImage`.

Puedes declarar el contexto en `Context.jsx`.

## Pistas

Elimina la prop `imageSize` de todos los componentes.

Crea y exporta `ImageSizeContext` desde `Context.jsx`. Luego, envuelve la lista con `<ImageSizeContext.Provider value={imageSize}>` que lo puedes crearlo en el `Context.jsx`,  para pasar el valor hacia abajo, y `useContext(ImageSizeContext)` para leerlo en el componente `PlaceImage`.
