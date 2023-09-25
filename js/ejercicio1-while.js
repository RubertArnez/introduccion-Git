

let nota  = parseInt(prompt("Ingrese la calificacion del alumno")  );
let cantidadNotas = 0;
let acumuladoNotas = 0;



while(nota !== 0) {
        
    if(nota > 0) {
    cantidadNotas++;
    acumuladoNotas+= nota;
    }
    
    // nota = parseInt(prompt("Ingrese la calificacion del alumno"));
        

};

// while(nota !== 0);
const promedio = acumuladoNotas/cantidadNotas

console.log("El promedio de notas es de: ${promedio}" )
