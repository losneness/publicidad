function mostrarOferta(auto) {
    let mensaje = "";

    switch(auto) {
        case "Ferrari":
            mensaje = "¡Oferta especial! Ferrari F8 con financiamiento en 12 meses sin intereses.";
            break;
        case "Lamborghini":
            mensaje = "¡Oferta de lujo! Lamborghini Huracán con garantía extendida incluida.";
            break;
        case "Porsche":
            mensaje = "¡Imperdible! Porsche 911 con descuento por tiempo limitado.";
            break;
        default:
            mensaje = "¡Consulta nuestras ofertas exclusivas!";
    }

    alert(mensaje);
}