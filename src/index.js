import prompt from 'prompt';
import mainPrompt from './prompts/prompt-main.js';
import generateQRCode from './services/qrcode/qrcode.js';

(function main() {
    prompt.get(mainPrompt, async function (err, result) {
        if(result.select === '1') await generateQRCode(); 
        if(result.select === '2') console.log("Gerar Senha");
    })
})();