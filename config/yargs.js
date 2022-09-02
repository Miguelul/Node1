

const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Permite intruducir la base'
            })
            .check( (argv, options) => {
                if(isNaN( argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                return true;
            })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                demandOption: true,
                default: false,
                describe: 'Permite mostral la tabla creada'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: 'Permite intruducir hata que numero llega la tabla'
            })
            .argv;

module.exports = argv;