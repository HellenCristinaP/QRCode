import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.blue("Digite o link para gerar o QR code"),
  },
  {
    name: "type",
    description: chalk.blue.bold("Escolha o tipo do QR code: 1 - NORMAL, 2 - TERMINAL"),
    pattern: /^[1-2]$/,
    message: chalk.red.bold("Escolha apenas entre 1 e 2"),
    required: true
  },
];

export default promptQRCode;
