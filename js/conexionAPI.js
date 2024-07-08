async function listarImagenes(){
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionCovertida = conexion.json();
    return conexionCovertida
    //console.log(conexionCovertida);
}

async function enviarImagen(nombre,precio,imagenes){
    const conexion = await fetch("http://localhost:3001/productos",{
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagenes:imagenes,    
        })
    })

    const conexionCovertida = conexion.json();

    return conexionCovertida;
}

export const conexionAPI = {
    listarImagenes, enviarImagen
}
