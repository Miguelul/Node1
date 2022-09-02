
const {crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs.js');

console.clear();
console.log("Holaa\n")
// console.log(argv);
// console.log(process.argv);
// console.log('base-yargs',argv.base);

const base = argv.b;
crearArchivo(base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'çreado'))
    .catch( err => console.log(err));