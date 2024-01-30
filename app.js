let  numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function  asignarTextoHtml (elemento, texto ){

let titulo = document.querySelector(elemento);
titulo.innerHTML = texto ;
return;

}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value)
          
    // triple igual es como una validadcion que tienen que ser igual en valor y tipo de dato es decir string con string o numbre con number
   

    if( numeroDeUsuario === numeroSecreto ) {
        document.getElementById(`reiniciar`).removeAttribute(`disabled`); //removeAttribute nos remueveun atributo que en este caso esta en el HTML y es el `disable` que lo que ahce es bloquear el boton de reinicar
        asignarTextoHtml(`p`,`acertaste el numero en ${intentos } ${intentos === 1 ? `vez` : `veces` }`, ); // aca se puede hace la evalaucion como si sino o if else
       
    } else { //el usuario no acepto

    if (numeroDeUsuario > numeroSecreto) {

        asignarTextoHtml (`p`, `el numero secreto es menor `);

        } else { asignarTextoHtml("p","el numero es mayor")

        }

        limpiarCaja();
        intentos++;

    }
    return;
}

function limpiarCaja(){
    document.querySelector( `#valorUsuario`).value = ` `  ; //esto de la derecha es la otra forma de ahcerlo//let  valorCaja = documente.querySelector( `#valorUsuario`)
    //valorCaja.value = ` `;
} 

function generarNumeroSecreto() {

    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log (numeroGenerado);
    console.log(listaNumeroSorteados);
    
    // si el numero generado esta en la lista 

    if (listaNumeroSorteados.length == numeroMaximo){
    asignarTextoHtml(`p ` , `ya se sortearon todos los numeros posibles `  );

    } else{ 

        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return numeroGenerado();
    
            } else {
            listaNumeroSorteados.push [ numeroGenerado];
            return numeroGenerado;
        }

    }

   
}

function condicionesIniciales(){
        
    asignarTextoHtml ("h1" , "QUE COMIENCE EL JEUGO!");
    asignarTextoHtml ("p" , `indicame un valor del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1 ;
}

function reiniciarJuego(){ 
    //limpiar la caja
    limpiarCaja()
    //limpiar mensaje de intervalo de numeros
    condicionesIniciales()
    //generar el numero aleatorio
    //deshabilitatar el boton de nuevo jeugo
    //inicializar el numero intentos
    document.querySelector(`#reiniciarJuego `).setAttribute(`disabled `,` true`);


}

ondicionesIniciales()






