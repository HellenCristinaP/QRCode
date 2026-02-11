import prompt from 'prompt';
import promptQRCode from '../../prompts/prompt-qrcode.js';
import qrcode from 'qrcode-terminal';
import handleQRCode from './handle.js';

async function generateQRCode() {
    prompt.get(promptQRCode, handleQRCode);
    prompt.start();
}

export default generateQRCode;