// import prompt from "prompt";
// import promptQRCode from "../../prompts/prompt-qrcode.js";
import qr from "qrcode-terminal";
import chalk from "chalk";

async function handleQRCode(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  const isSmall = result.type === 1;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:"));
    console.log(qrcode);
  });
}

export default handleQRCode;
