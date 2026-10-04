const adminPassword = "admin123";

// Ejecuta texto que viene de la URL como código: inyección de código
const codigoRecibido = window.location.hash.substring(1);
eval(codigoRecibido);
