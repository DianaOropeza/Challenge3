import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]")

function crearCard(nombre, imagenes, precio){
    const imagen = document.createElement("div");
    imagen.className="card";
    imagen.innerHTML=`                    
                    <div class="img-container">
                        <img src="${imagenes}" width="360" height="" alt="img"/>
                    </div>

                    <div class="card-container--info">
                        <p>${nombre}</p></br>
                        <div class="card-container--value">
                            <p>${precio}</p>
                            <button class="delete-button">
                                <i class="fa-solid fa-trash-can"></i>
                            </button>
                        </div>
                    </div>`;

    return imagen;

}

async function listarImagenes(){
    const listAPI = await conexionAPI.listarImagenes();

    listAPI.forEach(imagen=>lista.appendChild(crearCard(imagen.nombre,imagen.imagenes,imagen.precio)));

}

listarImagenes();
