

function validar() {
    var resp = validaRut();
    if (resp == false) {
        return false;
    }
    resp = validaFecha();
    if (resp == false) {
        return false;
    }
    return true;
}

function validaFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    var fechaSistema = new Date();
    console.log('Fecha Usuario: ' + fechaUsuario);
    console.log('Fecha Sistema: ' + fechaSistema);

    var anio = fechaUsuario.slice(0, 4);
    var mes = fechaUsuario.slice(5, 7);
    var dia = fechaUsuario.slice(8, 10);
    console.log('año: ' + anio);
    console.log('mes: ' + mes);
    console.log('dia: ' + dia);

    var fechaNuevaUsuario = new Date(anio, (mes - 1), dia);
    console.log('Nuev Fecha: ' + fechaNuevaUsuario);

    if (fechaNuevaUsuario > fechaSistema) {
        alert('Fecha incorrecta');
        return false;
    }
    var unDia = 24 * 60 * 60 * 1000//un dia en milisegundos
    var diferencia = Math.trunc((fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / unDia);
    console.log('Dias: ' + diferencia);
    var anios = Math.trunc(diferencia / 365);
    console.log('Edad: ' + anios);
    if (anios < 18) {
        alert('Es menor de edad, usted tiene ' + anios + ' años de edad')
    }

}

function validaRut() {
    var rut = document.getElementById('txtRut').value;
    console.log(rut);
    var num = 3;
    var suma = 0
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index, index + 1);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('suma es: ' + suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    if (dv > 9) {
        if (dv == 10) {
            dv = 'k'
        } else {
            dv = 0;
        }
    }
    console.log(dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('Rut es incorrecto');
        return false;
    }
    return true;
}