const argv =require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: "boolean",
        default: false,
        describe: 'Muestra la tabla de multiplicar en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: "number",
        describe: 'Hasta que numero multiplicar',
        demandOption: true,
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) throw 'La base debe ser un numero'
        else return true;
    })
    .argv

module.exports = argv;

/**
 * Proccess arg
 */
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
