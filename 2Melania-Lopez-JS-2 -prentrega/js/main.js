//Array de productos ofrecidos por la tienda -lista de objetos, array original
let cantidad = 0;
const prodOfrecidos = [
  { nombre: "Shampoo Carica", propiedad: "antigrasa", precio: 6000 },
  { nombre: "Rinse Carica", propiedad: "antigrasa", precio: 5000 },
  { nombre: "Shampoo Monteverde", propiedad: "anticaspa", precio: 6500 },
  { nombre: "Rinse Monteverde", propiedad: "anticaspa", precio: 6500 },
  {
    nombre: "Shampoo Guaria",
    propiedad: "crecimiento",
    precio: 6000,
  },
  { nombre: "Rinse Guaria", propiedad: "crecimiento", precio: 5500 },
  {
    nombre: "Shampoo Vainilla",
    propiedad: "humectante",
    precio: 7000,
  },
  { nombre: "Rinse Vainilla", propiedad: "humectante", precio: 7000 },
  { nombre: "Shampoo Tangerine", propiedad: "detox", precio: 6500 },
  { nombre: "Rinse Tangerine", propiedad: "detox", precio: 6000 },
];
//aqui se despliega en la consola en formato table la lista de productos ofrecidos (array original)
console.log("Lista de productos que ofrecemos:".toUpperCase());
console.table(prodOfrecidos);

//funcion para calcular el precio de cada seleccion de articulos * su cantidad
const precioSeleccion = (precioP, cantidadP) => {
  precioPorCant = parseFloat(precioP * cantidadP);
  return precioPorCant;
};

//carrito-menu de seleccion- objeto constructor
class Producto {
  constructor(nombre, precio, cantidad, precioSeleccion) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
    this.precioSeleccion = this.precio * this.cantidad;
  }
}

//array que voy a rellenar con todo lo que agreguen
const carrito = [];

//Bucle para que pregunte al usuario varias veces hasta que él diga que no quiere agregar mas productos
let confirmacion = true;
do {
  let confirmacion = prompt(
    "Ingrese un producto o ingrese 'X' para terminar",
    "Ej: Shampoo Carica"
  );
  if (confirmacion === "X" || confirmacion === "x") {
    break;
  } else {
    let nombreP = confirmacion;
    //prompts para recibir el item ingresado
    let precioP = parseFloat(prompt("Ingresa el precio del producto"));
    if (isNaN(precioP)) {
      alert("Error: por favor ingresa un numero válido");
      continue;
    }
    let cantidadP = parseInt(
      prompt("Ingresa la cantidad de productos que deseas")
    );
    if (isNaN(cantidadP)) {
      alert("Error: Cantidad no válida");
      continue;
    }
    carrito.push(new Producto(nombreP, precioP, cantidadP, precioSeleccion));
  }
} while (confirmacion != "X" || confirmacion != "x");

if (carrito.length != 0) {
  console.log("Este es tu carrito:".toUpperCase());
}
//aqui se despliega el "carrito" en formato table
console.table(carrito);

//conclusion de la compra si o no y adios
if (carrito.length != 0) {
  let respuesta = prompt("Deseas llevar a cabo la compra? si/no");
  if (respuesta == "si" || respuesta == "Si") {
    alert(
      "Felicidades! Te enviaremos tus productos a la dirección registrada. \nY no olvides: revisa nuestro nuevo filtro de las propiedades de tus productos!"
    );
  } else {
    alert(
      "Gracias por tu visita, vuelve pronto!\nY no olvides: revisa nuestro nuevo filtro de las propiedades de tus productos!"
    );
  }
}

//funcion que calcula el precio total delos articulos carrito
let precioTotal = 0;
const calcPrecioTotal = (carrito) => {
  for (let i = 0; i < carrito.length; i++) {
    precioTotal = precioTotal + carrito[i].precioSeleccion;
  }
  return precioTotal;
};
console.log(`El precio total de tu carrito es $${calcPrecioTotal(carrito)}`);

//filtro para buscar propiedad del articulo dentro de un while que evalua si el valor ingresado no esta
let encontrado = false;
let propiedadesP = [];

while (!encontrado) {
  let ingresoP = prompt(
    "No te vayas sin probar nuestro nuevo filtro, buscando por la propiedad del producto de tu interés: ",
    "Ej: anticaspa"
  );

  //filtro filter
  propiedadesP = prodOfrecidos.filter((el) => {
    encontrado = el.propiedad === ingresoP;
    return encontrado;
  });

  if (propiedadesP.length > 0) {
    encontrado = true;
    console.log(
      `Los productos que te ofrecemos con la propiedad ${ingresoP} son:`
    );
    console.table(propiedadesP);
  } else {
    alert("Por favor ingresa un criterio válido");
  }
}

/*tambien probé esta filtro con "filter" como tb explico el profe, pero como es el "find"  solo me trae el primero que encuentra y en mi array hay 2 de cada atributo: propiedad
/* const buscarProd = (arr, filtro) => {
  const pEncontrado = arr.find((el) => {
    return el.propiedad.includes(filtro);
  });
  return pEncontrado;
}; 
const prodEncontrado = buscarProd(prodOfrecidos, ingresoP);
console.table(
  `Los productos que te ofrecemos con la propiedad ${ingresoP} son:`
);
console.table(prodEncontrado);*/
