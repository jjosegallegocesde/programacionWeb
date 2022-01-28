export function llenarParques(){
    let arregloParques = [
       {nombreParque:"Magic Kingdom Park", img:"../img/parques/Parque1.jpg",descripcionParque: "Explora tierras de encanto infinito, donde tus fantasías se convierten en realidad"},
       {nombreParque:"Disney's Hollywood Studios", img:"../img/parques/Parque2.jpg",descripcionParque: "Que empiece tu aventura con momentos emocionantes que  te esperan en cada esquina Horarios de los Parques"},
       {nombreParque:"Disney's Typhoon Lagoon", img:"../img/parques/Parque3.jpg",descripcionParque: "Empápate de acción"}
    ]

    let parques = document.getElementById("parques")
    /*
    1. arreglo que voy a utilizar
   */
    arregloParques.forEach(function(parque){
        //creamos la etiqueta div
        let columna=document.createElement("div")
        //a columna le agregagamos la clase col
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let imagen = document.createElement("img")
        imagen.classList.add("rounded-circle")
        imagen.classList.add("img-fluid")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.src=parque.foto
    
        let nombreParque = document.createElement("h4")
        nombreParque.textContent=arregloParques
        nombreParque.classList.add("text-center")
    
        let descripcionParque = document.createElement("h6")
        descripcionParque.textContent="Descripcion: "+parque.descripcionParque
        descripcionParque.classList.add("text-center")
    
        //Padres e hijos 
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreParque)
        tarjeta.appendChild(descripcionParque)
        columna.appendChild(tarjeta)
        parques.appendChild(columna)

    })
}