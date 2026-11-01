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

// Ejercicio 10
interface Libro {
  titulo: string;
  autor: string;
  paginas: number;
  disponible: boolean;
}

let libros: Libro[] = [
  { titulo: "1984", autor: "George Orwell", paginas: 352, disponible: true },
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry", paginas: 96, disponible: false },
  { titulo: "Rayuela", autor: "Julio Cortázar", paginas: 736, disponible: true },
  { titulo: "Ficciones", autor: "Jorge Luis Borges", paginas: 224, disponible: false },
];

function estaDisponible(libro: Libro): boolean {
  return libro.disponible;
}

for (const libro of libros) {
  if (estaDisponible(libro)) {
    console.log(`${libro.titulo} (${libro.autor})`);
  }
}

// Ejercicio 11
function buscarUsuario(id: number): string | undefined {
  if (id === 1) {
    return "Ana";
  }
  return undefined;
}

let usuarioEncontrado = buscarUsuario(1);
if (usuarioEncontrado) {
  console.log(usuarioEncontrado.toUpperCase());
} else {
  console.log("Usuario no encontrado");
}

let usuarioNoEncontrado = buscarUsuario(2);
if (usuarioNoEncontrado) {
  console.log(usuarioNoEncontrado.toUpperCase());
} else {
  console.log("Usuario no encontrado");
}

// Ejercicio 12
let dato: unknown = "hola mundo";

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("El dato no es un texto");
}

dato = 42;

if (typeof dato === "string") {
  console.log(dato.toUpperCase());
} else {
  console.log("El dato no es un texto");
}

// Ejercicio 13
type Usuario = {
  id: number;
  nombre: string;
  email: string;
  edad: number;
};

let cambios: Partial<Usuario> = {
  email: "ana.nueva@correo.com",
};

let resumen: Pick<Usuario, "id" | "nombre"> = {
  id: 1,
  nombre: "Ana",
};

console.log(cambios);
console.log(resumen);

// Ejercicio 14
type UsuarioPublico = Omit<Usuario, "email">;

let usuarioPublico: UsuarioPublico = {
  id: 1,
  nombre: "Ana",
  edad: 30,
};

console.log(usuarioPublico);

// Ejercicio 15
interface Configuracion {
  tema?: string;
  idioma?: string;
}

let configuracionCompleta: Required<Configuracion> = {
  tema: "oscuro",
  idioma: "es",
};

console.log(configuracionCompleta);

let usuarioFijo: Readonly<Usuario> = {
  id: 2,
  nombre: "Luis",
  email: "luis@correo.com",
  edad: 25,
};

console.log(usuarioFijo);

// Intento de cambiar una propiedad de solo lectura:
// usuarioFijo.nombre = "Pedro";
// Error TS2540: Cannot assign to 'nombre' because it is a read-only property.

// Ejercicio 16
class CuentaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  ingresar(cantidad: number): void {
    if (cantidad > 0) {
      this.saldo += cantidad;
    } else {
      console.log("Solo se pueden ingresar cantidades positivas");
    }
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}

let cuenta = new CuentaBancaria(100);
cuenta.ingresar(50);
cuenta.ingresar(-20);
console.log(cuenta.consultarSaldo());

// Ejercicio 17
interface Reproducible {
  reproducir(): void;
}

class Cancion implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo canción 🎵");
  }
}

class Video implements Reproducible {
  reproducir(): void {
    console.log("Reproduciendo vídeo 🎬");
  }
}

let reproducibles: Reproducible[] = [new Cancion(), new Video()];

for (const elemento of reproducibles) {
  elemento.reproducir();
}

// Ejercicio 18
enum EstadoPedido {
  Pendiente,
  Enviado,
  Entregado,
}

function mensajePedido(estado: EstadoPedido): string {
  switch (estado) {
    case EstadoPedido.Pendiente:
      return "Tu pedido está pendiente de envío";
    case EstadoPedido.Enviado:
      return "Tu pedido está en camino";
    case EstadoPedido.Entregado:
      return "Tu pedido ha sido entregado";
  }
}

console.log(mensajePedido(EstadoPedido.Pendiente));
console.log(mensajePedido(EstadoPedido.Enviado));
console.log(mensajePedido(EstadoPedido.Entregado));

// Ejercicio 19
function primero<T>(elementos: T[]): T | undefined {
  if (elementos.length === 0) {
    return undefined;
  }
  return elementos[0];
}

console.log(primero([10, 20, 30]));
console.log(primero(["manzana", "pera", "uva"]));
console.log(primero([]));

// Ejercicio 20
type Puntuaciones = Record<string, number>;

let puntuaciones: Puntuaciones = {
  Ana: 8.5,
  Luis: 9.2,
  Marta: 7.8,
};

async function obtenerMensaje(lista: Puntuaciones): Promise<string> {
  let mejorAlumno: string = "";
  let mejorPuntuacion: number = -Infinity;

  for (const alumno in lista) {
    if (lista[alumno] > mejorPuntuacion) {
      mejorAlumno = alumno;
      mejorPuntuacion = lista[alumno];
    }
  }

  return `La puntuación más alta es de ${mejorAlumno}, con un ${mejorPuntuacion}`;
}

obtenerMensaje(puntuaciones).then((mensaje) => {
  console.log(mensaje);
});
