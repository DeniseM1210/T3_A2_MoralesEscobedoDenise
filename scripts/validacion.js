function validacion() {
    const nombre = document.getElementById("caja_nombre").value;
    const cp = document.getElementById("caja_cp").value;
    const numC = document.getElementById("caja_nc").value;
    const numCl = document.getElementById("caja_ncl").value;
    const numTel = document.getElementById("caja_numtel").value;
    const correo = document.getElementById("caja_correo").value;
    const contra = document.getElementById("caja_contra").value;

    console.log("Validación de formularios");

    console.log((13).toString(16));

    if (nombre == null || nombre.length === 0 || !/[a-zA-Z]{2,}(\s[a-zA-Z]{2,})*/g.test(nombre)) {
        alert("nombre no valido");
        return false;
    } else if (cp == null || cp.length === 0 || !/^\d{5}$/g.test(cp)) {
        alert("código postal no valido");
        return false;
    } else if (numC == null || numC.length === 0 || !/^\d{8}$/g.test(numC)) {
        alert("numero de control no valido");
        return false;
    } else if (numCl == null || numCl.length === 0 || !/^[SMACIsmaci]\d{8}$/g.test(numCl)) {
        alert("La letra del numero de control no es valida");
        return false;
    } else if (numTel == null || numTel.length === 0 || !/^\d{3}(-)*\d{3}(-)*\d{4}$/g.test(numTel)) {
        alert("número de telefono no valido");
        return false;
    } else if (correo == null || correo.length === 0 || !/^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/g.test(correo)) {
        alert("correo no valido");
        return false;
    } else if (contra == null || contra.length === 0 || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g.test(contra)) {
        alert("contraseña no valida");
        return false;
    } else {
        alert("Registro exitoso");
        return true;
    }
}