
export interface CreaTableUseCase{
  
  execute: (options: CreateTableOptions) => string;


}


interface CreateTableOptions{
  
  base: number,
  limit?: number

}

export class CreateTable implements CreaTableUseCase{
  constructor() {
    /*
     * INYECCION DE DEPENDENCIAS
     */
  }

  execute({ base, limit = 10 }: CreateTableOptions) {
    let table = `` 
    for (let numero: number = 1; numero <= limit; numero++) {
      table += `\n${base}*${numero}=${numero * base}`;
    }
    return table;
  }
}
