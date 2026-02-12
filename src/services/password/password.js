import handle from "./handle.js"
import chalk from "chalk"

async function createPassword() {
    console.log(chalk.blue.bold.italic("Gerando senha..."));
    const password = await handle()
    console.log(chalk.green.bold(`Senha gerada: ${chalk.reset.blue(password)}`));
}

export default createPassword