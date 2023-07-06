# Docker 🐳

Docker es una plataforma de contenedores de software. Los contenedores son una forma de empaquetar y distribuir aplicaciones de manera que puedan ser ejecutadas en cualquier entorno de manera consistente, independientemente de las dependencias o configuraciones del sistema. Docker permite crear, desplegar y ejecutar contenedores de manera fácil y eficiente.

## Crear e iniciar un contenedor

```bash
docker run --name my_container -d -p 8080:80 -v my_volume:/var/www/html nginx
```

- `--name` Asignar un nombre al contenedor
- `-d` Ejecute el contenedor en segundo plano e imprima el ID del contenedor
- `-e` Establecer variables de entorno
- `-p` Publicar los puertos de un contenedor en el host.
- `-v` Enlazar montar un volumen-d

## Listar contenedores

```bash
docker ps
```

## Listar todos los contenedores

```bash
docker ps -a
```

## Iniciar un contenedor

```bash
docker start my_container
```

## Detener un contenedor

```bash
docker stop my_container
```

## Eliminar un contenedor

```bash
docker rm my_container
```

## Eliminar todos los contenedores

```bash
docker rm $(docker ps -a -q)
```

## Eliminar todas las imágenes

```bash
docker rmi $(docker images -q)
```

## Crear una imagen

```bash
docker build -t my_image .
```

## Listar imágenes

```bash
docker images
```

## Eliminar una imagen

```bash
docker rmi my_image
```

## Crear un volumen

```bash
docker volume create my_volume
```

## Listar volúmenes

```bash
docker volume ls
```

## Eliminar un volumen

```bash
docker volume rm my_volume
```

## Crear una red

```bash
docker network create my_network
```

## Listar redes

```bash
docker network ls
```

## Eliminar una red

```bash
docker network rm my_network
```

## Conectar un contenedor a una red

```bash
docker network connect my_network my_container
```

## Desconectar un contenedor de una red

```bash
docker network disconnect my_network my_container
```

## Conectar un contenedor a una red

```bash
docker network connect my_network my_container
```

## Desconectar un contenedor de una red

```bash
docker network disconnect my_network my_container
```

## Crear un contenedor con una red

```bash
docker run --name my_container -d --network my_network nginx
```

## Crear un contenedor con un volumen

```bash
docker run --name my_container -d -v my_volume:/var/www/html nginx
```

## Docker compose

```bash
docker-compose up -d
```

## Docker compose con build

```bash
docker-compose up -d --build
```

## Docker compose con build y sin cache

```bash
docker-compose up -d --build --no-cache
```

## Docker compose node, express y mongo - `docker-compose.yml`

```
version: '3'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - mongo
    environment:
      - MONGO_URL=mongodb://mongo:27017/mydb
  mongo:
    image: mongo
    ports:
      - 27017:27017
    volumes:
      - db_data:/data/db
```

En este ejemplo, tenemos dos servicios: "app" y "mongo". El servicio "app" se construye a partir del directorio actual (.) y se expone en el puerto 8080 del host. El servicio "app" también depende del servicio "mongo", y se utiliza una variable de entorno para especificar la URL de conexión a la base de datos. El servicio "mongo" utiliza la imagen oficial de MongoDB y se expone en el puerto 27017 del host.

Para ejecutar este compose, se debería de ejecutar el comando `docker-compose up` en la terminal en la ruta donde se encuentra el archivo yml, y esto levantaría los dos servicios.

### Ejercicio Docker y MongoDB

1. Crear un contenedor de MongoDB llamado `mongo-dev` que se ejecute en segundo plano y que este expuesto en el puerto 27017 del host. Crear un volumen y enlazarlo al contenedor.
2. Ingresar al contenedor `mongo-dev` y crear una base de datos llamada `movies_db`. Para resolver este ejercicio se utilizara el 'mongo shell' de MongoDB.

Ejemplo:

```bash
docker exec -it mongo-dev mongosh
```

3. Crear una colección llamada `movies` y agregar los siguientes documentos a la colección.

```
title : Fight Club
writer : Chuck Palahniuk
year : 1999
actors : [
  Brad Pitt
  Edward Norton
]
```

```
title : Pulp Fiction
writer : Quentin Tarantino
year : 1994
actors : [
  John Travolta
  Uma Thurman
]
```

```
title : Inglorious Basterds
writer : Quentin Tarantino
year : 2009
actors : [
  Brad Pitt
  Diane Kruger
  Eli Roth
]
```

```
title : The Hobbit: An Unexpected Journey
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit
```

```
title : The Hobbit: An Unexpected Journey
writer : J.R.R. Tolkein
year : 2012
franchise : The Hobbit
```

```
title : Pee Wee Herman's Big Adventure
```

```
title : Pee Wee Herman's Big Adventure
```

4. Consultas / Buscar documentos

Realizar las siguientes consultas en la colección `movies`:

- Obtener todos los documentos
- Obtener documentos con `writer` igual a "Quentin Tarantino"
- Obtener documentos con `actors` que incluyan a "Brad Pitt"
- Obtener documentos con `franchise` igual a "The Hobbit"
- Obtener todas las películas de los 90s.
- Obtener las películas estrenadas entre el año 2000 y 2010.

