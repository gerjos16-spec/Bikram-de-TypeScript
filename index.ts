// Ejercicio 1
let nombre: string = "Gerson";
let edad: number = 26;
let activo: boolean = true;

console.log(nombre);
console.log(edad);
console.log(activo);

// Asignación con un tipo incorrecto:
// edad = "veintiséis";
// Error TS2322: Type 'string' is not assignable to type 'number'.

// Ejercicio 2
let precios: number[] = [12.5, 30, 8.99, 45];

function sumarPrecios(lista: number[]): number {
  let total: number = 0;
  for (const precio of lista) {
    total += precio;
  }
  return total;
}

console.log(sumarPrecios(precios));

// Ejercicio 3
function presentar(nombre: string, apellido?: string): string {
  if (apellido) {
    return `Hola, ${nombre} ${apellido}`;
  }
  return `Hola, ${nombre}`;
}

console.log(presentar("Ana", "Pérez"));
console.log(presentar("Ana"));

// Ejercicio 4
function calcularDescuento(precio: number, porcentaje: number): number {
  return precio - (precio * porcentaje) / 100;
}

console.log(calcularDescuento(100, 20));

// Ejercicio 5
function mostrarId(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

mostrarId("usr-25");
mostrarId(25);

// Ejercicio 6
type Producto = {
  nombre: string;
  precio: number;
  descripcion?: string;
};

let teclado: Producto = {
  nombre: "Teclado",
  precio: 35,
  descripcion: "Teclado mecánico con retroiluminación",
};

let raton: Producto = {
  nombre: "Ratón",
  precio: 15,
};

// Ejercicio 7
function mostrarProducto(producto: Producto): string {
  return `${producto.nombre}: ${producto.precio} €`;
}

console.log(mostrarProducto(teclado));
console.log(mostrarProducto(raton));

// Ejercicio 8
type EstadoTarea = "pendiente" | "en-proceso" | "completada";

let estado: EstadoTarea = "pendiente";
console.log(estado);

// Asignación con un valor no permitido:
// estado = "cancelada";
// Error TS2322: Type '"cancelada"' is not assignable to type 'EstadoTarea'.

// Ejercicio 9
interface Persona {
  nombre: string;
  edad: number;
  ciudad?: string;
}

let persona1: Persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
};

let persona2: Persona = {
  nombre: "Luis",
  edad: 25,
};

function mostrarPersona(persona: Persona): void {
  if (persona.ciudad) {
    console.log(`${persona.nombre}, ${persona.edad} años, vive en ${persona.ciudad}`);
  } else {
    console.log(`${persona.nombre}, ${persona.edad} años`);
  }
}

mostrarPersona(persona1);
mostrarPersona(persona2);

