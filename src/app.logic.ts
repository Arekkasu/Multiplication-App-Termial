import * as fs from 'fs'
import { yarg } from './config/plugins/yargs.plugin'



const {b:base,l:limit,s:showTable,}= yarg 

let table: string = `
=========================
    TABLA DEL ${base}
=========================
` 
for(let numero: number = 1; numero <= limit; numero++ ){
  table += `\n${base}*${numero}=${numero*base}` 
}

if( showTable)
  console.log(table);


fs.writeFileSync(`outputs/tabla-${base}.txt`, table)

console.log("Finalizado")

//console.log("LECTURA")

/*fs.readFile('outputs/tabla-5.txt', 'utf-8',(err, data) => {

  console.log(data)

})*/

//fs.readFileSync('outputs/tabla-5.txt', { encoding: 'utf8', flag: 'r' })
