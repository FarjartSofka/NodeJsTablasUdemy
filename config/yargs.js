const argv = require('yargs')
                        .option('b',{
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'base de la tabla de multiplicar'
                        })
                        .option('l', {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'listar de la tabla de multiplicar'
                        })
                        .option('h',{
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            describe: 'hasta donde se generara la tabla de multiplicar'
                        })
                        .check((argv, options) => {
                            if ( isNaN(argv.b)){
                                throw 'base debe ser numero'
                            }
                            return true
                        })
                        .argv;

module.exports = argv;