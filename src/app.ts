import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

(async () => {
  await main();
})();

async function main() {
  //EL TIPO DE DATO ES EL DE LA IZQUIERDA Y NOMBRE DE VARIABLE ES EL DE
  //LA DERECHA
  const { b: base, l: limit, s: showTable, d: destination, n: nameFile } = yarg;
  console.log(destination)
  ServerApp.run({
    base: base,
    limit: limit,
    showTable: showTable,
    destination: destination,
    nameFile: nameFile,
  });
}
