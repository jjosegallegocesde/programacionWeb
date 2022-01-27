
//exportaccion de elementos
export function llenarTienda(){
    let productos = [
        {nombre:"Muñeca Rapunzel",precio:220000,foto:"../img/productos/munecaRapunzel.jpg",decripcion:"Muñeca Rapunzel de 40cm, articulada y puede cantar"},
        {nombre:"Muñeca Ana",precio:250000,foto:"../img/productos/munecaAna.jpg",decripcion:"Muñeca Ana de 40cm, articulada y puede cantar"},
        {nombre:"Muñeca Ariel",precio:280000,foto:"../img/productos/munecaAriel.jpg",decripcion:"Muñeca Ariel de 40cm, articulada y puede cantar"},
        {nombre:"Muñeca Elsa",precio:220000,foto:"../img/productos/munecaElsa.jpg",decripcion:"Muñeca Elsa de 40cm, articulada y puede cantar"},
        {nombre:"Muñeca coleccion cenicienta",precio:180000,foto:"../img/productos/cenicienta.jpg",decripcion:"Muñeca Coleccion Disney Otoño de 30cm"},
        {nombre:"Minni Mouse Navideña",precio:300000,foto:"../img/productos/minni.jpg",decripcion:"Muñeca de coleccion Navideña de 30cm"},
        {nombre:"Peluche Olaf",precio:90000,foto:"../img/productos/pelucheOlaf.jpg",decripcion:"Peluche olaf de la pelicula Frozen, 50cm y de algodon"},
        {nombre:"Peluche stich",precio:120000,foto:"../img/productos/stich.jpg",decripcion:"Disney Peluche Lilo Y Stich Stitch 20 cmo"},
        {nombre:"Collar Raya",precio:30000,foto:"../img/productos/collarRaya.jpg",decripcion:"Collar de la pelicula Raya, alumbra en la oscuridad con pilas recargables"},
        {nombre:"Kit de muñecas Raya",precio:230000,foto:"../img/productos/kitPrincesas.jpg",decripcion:"Set de 3 muñecas de 20 cm de la pelicula raya"},
    ]

    let fila= document.getElementById("fila")
    /*
    1. arreglo que voy a utilizar
    2. */
    productos.forEach(function(producto){
        //creamos la etiqueta div
        let columna=document.createElement("div")
        //a columna le agregagamos la clase col
        columna.classList.add("col")
    
        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        let imagen = document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.classList.add("h-50")
        imagen.classList.add("p-3")
        imagen.src=producto.foto
    
        
        let nombreProducto = document.createElement("h4")
        nombreProducto.textContent=producto.nombre
        nombreProducto.classList.add("text-center")
    
        let precioProducto = document.createElement("h6")
        precioProducto.textContent=("Precio: $"+producto.precio)
        precioProducto.classList.add("text-center")
    
        
        let descripcionProducto = document.createElement("h6")
        descripcionProducto.textContent=("Descripcion: "+producto.decripcion)
        descripcionProducto.classList.add("text-center")

        //Padres e hijos 
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(precioProducto)
        tarjeta.appendChild(descripcionProducto)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })


}