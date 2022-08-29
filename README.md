
# Proyecto: Minimarket-Gamonal

Este es un ecommerce para una tienda de abarrotes y pasteleria, la aplicación
fue creada utilizando tecnologias como React.js y Firebase, para entregar diferentes
funcionalidades entre las cuales se enucentran, la obtencion de datos desde Firestore,
carrito de compras y checkout entre otras funcionalidades que se mencionaran a
coontinuacón.



## Navegación de la pagina

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Detalle de producto

En esta pagina se realiza una llamada asyncrona para la obtencion de un producto
en cuestión, esta llamada es desencadenada al momento de realizar un click en el boton
"Ver detalle" en la pagina principal sobre un producto.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Una vez es obtenido dicho Id se realiza una consulta a firestore para obtener la
información correspondiente a dicho producto, en el caso de no encontrarse dicho
id se es retornado un mensaje "not found".

## Carrito de compras

En esta pagina se ven reflejados todos los productos agregados al carrito con
su respectiva cantidad seleccionada por el cliente, ademas de poder modificar la cantidad
de productos a comprar.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Finalizar compra - Checkout

En esta modal se solicita la información del usuario para la generacion de una orden de 
compra, la cual se encuentra constituida con la informacion del ususario, los productos 
almacenados dentro del carrito ademas de otros campos como la fecha actual y el estado
de la orden.

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

Posteriormente al clickear el boton de finalizar la compra, se genera una orden con los 
datos anteriormente mencionados y es registrada en firestore, cabe mencionar que la 
cantidad de productos al ingresar una orden es restada del stock total de los productos
almacenados en firebase, esto quiere decir que el total de los productos sigue un orden
coherente en los siguientes flujos de compra.
## Aprendizaje

Primeramente aprendi el funcionamiento y el como trabajar con React.js, tanto el uso de 
los [Hooks](https://es.reactjs.org/docs/hooks-intro.html) y su enfoque a componentes como tambien el como trabajar con las [Promises.](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Por otro lado tambien aprendi a como trabajar con firebase a la hora del manejo de datos,
tanto al momento de la obtencion para consumirlos en mis componenetes como en la generación
y almanecemiento de estos en Firestore.


## 🛠 Herramientas - Tecnologias utilizadas

Este proyecto se construyo utilizando las siguientes tecnologias

- [React.js](https://es.reactjs.org/)
- Html5
- [React-Bootstrap5](https://react-bootstrap.github.io/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Firebase](https://firebase.google.com/)


## Objetivos del proyecto

1 . En primera instancia el proyecto cumple con el objetivo de ser el entregable final de 
el curso de [CODERHOUSE sobre React.js](https://www.coderhouse.cl/online/reactjs)

2 . Como segundo objetivo cumple con la necesidad de una tienda para ofrecer sus
productos de forma online, y de esta forma buscar aumentar sus ganancias facilidando 
el acceso a sus productos.

3 . Finalmente como tercer objetivo funcionara como un extra a mi portafolio.


## Mapa de ruta

- [x]  Modificación de cantidad desde el carrito 
- [ ]  Ambiente administrador 
- [ ]  Crud productos
- [ ]  Sistema de pago



## Ejecutar localmente

Clonar el proyecto

```bash
  git clone https://github.com/Blueshadow58/minimarket-gamonal.git
```

Ir al directorio del proyecto

```bash
  cd minimarket-gamonal
```

Instalar las dependencias

```bash
  npm install
```

Iniciar el servidor

```bash
  npm run start / npm start
```


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/franco-gamonal-57b8971b6/)


