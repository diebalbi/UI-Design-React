## Costas que Faltan:

1) No pudimos arreglar Routing y por ende no podemos entrar al detalle de una ciudad en específico.
Por otro lado si existen los distintos componentes pero utilizando texto "lorem ipsum".

2) La WebApi quedó lista, todos los endpoints estan prontos pero no llegamos a consumir los recursos.

## Jerarquía de componentes
- Header
  - Login
  - Register
- Main
  - HomePage
  - Detail
- Footer

## Instrucciones nuevo ambiente

- Clonar el repositorio 
- Correr comando `npm install`
- Correr comando `npm start`

### Para deployment en Now

- Modificar web/apollo.js e indicar la nueva URL

## Dependencies

### [Material UI](https://material-ui.com/)
- npm install @material-ui/core

### [styled-components](https://styled-components.com/)
- npm install --save styled-components

### [Formik](https://jaredpalmer.com/formik/)
- npm install formik --save

### [Yup](https://www.npmjs.com/package/yup)
- npm install -S yup

### [Mongoose](https://mongoosejs.com)
- npm install mongoose

### [GraphQL](https://graphql.org/)
- npm install --save graphql

## Project Idea + Prototype
[Prototype link](figma.com/file/PFDGyPfof3jsY7bt6dvu2h/Desarrollo-UI?node-id=0%3A1)
 
### MENU GLOBAL: 
- icono a la izquierda
- barra de busqueda
- boton de page register
- boton de page login

### Home
- orden, primero 
- imagen + nombre + cantidad actividades
	
### Login (Modal)

### Register (Modal)

### Local Detail
- nombre + valoracion media
- descripcion
- imagenes
- actividades disponibles
- reseñas de visitantes
	- nombre, estrellas en la reseña
- agregar reseña
	- debe estar logueado
