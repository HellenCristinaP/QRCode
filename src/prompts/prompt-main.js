import chalk from 'chalk';

const maiPrompt = [{
    name: "select",
    description: chalk.blue("Escolha a ferramenta: 1 - Gerar QR code, 2 - Gerar Senha"),
    pattern: /^[1-2]$/,
    message: chalk.red.bold("Escolha apenas entre 1 e 2"),
    required: true
}]

export default maiPrompt;