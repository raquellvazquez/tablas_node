const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta) => {

    // return new Promise( (resolve, reject ) => {

    //     let salida= '';

    //     for(i=1; i <=10 ; i++){
    //     salida += `${base} x ${i} = ${base *i}\n`;
    //     }

    //     fs.writeFileSync(`tabla-${base}.txt`, salida);

    //     resolve(`tabla-${base}.txt`)

    // })

    try{
        let salida, consola= '';

        for(i=1; i <=hasta ; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.brightCyan} ${i} ${'='.brightCyan} ${base *i}\n`;
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        if(listar) {
            console.log(consola)
        }
    
        return `tabla-${base}.txt`
        } catch(e) {
            throw  e;
        }

}

module.exports = {
   crearArchivo
};