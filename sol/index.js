let array_personas = [];

let enviar = document.getElementById("enviar");
let inputEdades = document.getElementById("edad");
let inputNombre = document.getElementById("nombre");

// Constructor de objetos
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

// Crear una instancia del objeto Persona
var persona = new Persona("Juan", 25, "EjemploCity");

enviar.addEventListener("click", () => {
    let persona = new Persona((inputNombre.value), parseInt(inputEdades.value))
    array_personas = [...array_personas, persona];

    inputEdades.value = "";
    inputNombre.value = "";

    ordenar();
    lista_html();

    console.log(array_personas)
});

function ordenar() {
    const n = array_personas.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array_personas[j].edad > array_personas[j + 1].edad) {
                [array_personas[j], array_personas[j + 1]] = [array_personas[j + 1], array_personas[j]];
            }
        }
    }
}

function lista_html() {
    let listaDiv = document.getElementById("lista");
    let elementosFila = document.getElementsByClassName("fila");
    
    if (elementosFila.length > 0) {
      Array.from(elementosFila).forEach(e => {
        listaDiv.removeChild(e);
      });
    }

    array_personas.forEach(p => {
        let filaDiv = document.createElement("div");
        filaDiv.className = "fila";

        //nombre
        let nombreUserDiv = document.createElement("div");
        nombreUserDiv.className = "nombre_user";

        let nombreUserParrafo = document.createElement("p");
        nombreUserParrafo.textContent = p.nombre;
        nombreUserDiv.appendChild(nombreUserParrafo);

        //edad
        let edadUserDiv = document.createElement("div");
        edadUserDiv.className = "edad_user";

        let edadUserParrafo = document.createElement("p");
        edadUserParrafo.textContent = p.edad;
        edadUserDiv.appendChild(edadUserParrafo);

        // agregar elementos
        filaDiv.appendChild(nombreUserDiv);
        filaDiv.appendChild(edadUserDiv);
        listaDiv.appendChild(filaDiv);
    });

    document.body.appendChild(listaDiv);
}











