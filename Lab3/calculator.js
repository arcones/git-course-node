const { Command } = require('commander');
const program = new Command();

program
  .command('sumar numero1 numero2')
  .description('Suma dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1) + parseInt(numero2);
    console.log(`El resultado es: ${result}`);
  });

program
  .command('restar numero1 numero2')
  .description('Resta dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1) - parseInt(numero2);
    console.log(`El resultado es: ${result}`);
  });

program
  .command('multiplicar numero1 numero2')
  .description('Multiplica dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1) * parseInt(numero2);
    console.log(`El resultado es: ${result}`);
  });

  program
  .command('dividor numero1 numero2')
  .description('Dividir dos números enteros')
  .action((numero1, numero2) => {
    const result = parseInt(numero1) / parseInt(numero2);
    console.log(`El resultado es: ${result}`);
  });


program.parse(process.argv);
