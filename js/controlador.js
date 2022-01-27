//mportacion de elementos
//import nombreFuncion from nombre de archivo
import {llenarTienda} from "./llenadoTienda.js"
import {ampliarInfoProducto} from "./AmpliarInfoProducto.js"
//llamo a la funcion lleneartienda
llenarTienda()


let modalInfoProducto = new bootstrap.Modal(document.getElementById('modalInfoProducto'))

//llamo la funcion apliarInfoProdcto
let listaProductos= document.getElementById("fila")
listaProductos.addEventListener("click",function(event){
   ampliarInfoProducto(event)
   modalInfoProducto.show()
})