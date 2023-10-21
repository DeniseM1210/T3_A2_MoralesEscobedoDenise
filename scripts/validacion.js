function validacion(){
    const numC = document.getElementById("caja_num_control").value;
    const nombre = document.getElementById("caja_nombre").value;
    const primerApe = document.getElementById("caja_primer_apellido").value;
    const segundoApe = document.getElementById("caja_segundo_apellido").value;
    console.log("Validación de formularios");

    console.log((13).toString(16));

    if(numC == null || numC.length === 0 || !/^\d{8}$/g.test(numC)){
        alert("numero de control no válido");
        return false;
    }else if(nombre == null || nombre.length === 0 || !/[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*/g.test(nombre)){
        alert("nombre no válido");
        return false;
    }else if(primerApe == null || primerApe.length === 0 || !/[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*/g.test(primerApe)){
        alert("Primer apellido no valido");
        return false;
    }else if(segundoApe == null || segundoApe.length === 0 || !/[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*/g.test(segundoApe)){
        alert("Segundo apellido no valido");
        return false;
    }else{
        alert("Registro exitoso");
        return true;
    }
}