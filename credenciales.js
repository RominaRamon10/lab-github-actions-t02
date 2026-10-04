const password = "admin123";

// Ejecuta texto que viene de la URL como código: inyección de código
const userInput = window.location.hash.substring(1);
eval(userInput);
