
const fs = require('fs');
const { argv } = require('process');
const colors =  require('colors')

const crearArchivo = async (constanet = 1, listar = false, hasta = 10) => {
  try {
    let salida = '';

    for (let i = 0; i <= hasta; i++) {
      let result = constanet * i;
      salida += `${constanet} x ${i} = ${result}\n`;
    }
    // fs.writeFile('tabla-5.txt',salida, (err)=>{
    //     if (err) throw err;
    //     console.log('Table del 5 creada');
    // })
    if (listar) {
      fs.writeFileSync(`./salida/tabla-${constanet}.txt`, salida);
      console.log( colors.cyan(salida));
      console.log(`tabla-${constanet}.txt creada`.blue);
    }
    return `tabla-${constanet}.txt`;
  } catch (err) {
    throw (err);
  }


}

module.exports = {
  crearArchivo
}