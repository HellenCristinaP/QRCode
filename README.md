# QR Code Generator

Gerador de QR codes e Senhas - Aplicação Node.js com interface interativa em linha de comando.

## 📋 Descrição

Este projeto é uma ferramenta CLI que permite gerar QR codes e senhas através de um menu interativo no terminal. Desenvolvido com Node.js e utiliza bibliotecas modernas para criar uma experiência de usuário intuitiva.

## 📁 Estrutura do Projeto

```
QRCode/
├── package.json                 # Configurações do projeto e dependências
├── README.md                    # Documentação do projeto
└── src/
    ├── index.js                 # Arquivo principal da aplicação
    ├── prompts/                 # Configurações de prompts interativos
    │   ├── prompt-main.js       # Menu principal
    │   ├── prompt-password.js   # Prompt para geração de senhas
    │   └── prompt-qrcode.js     # Prompt para geração de QR codes
    └── services/                # Serviços da aplicação
        ├── password/            # Serviço de geração de senhas
        │    ├── password.js     # Lógica principal de password
        │    └── handle.js       # Tratamento de dados password
        └── qrcode/              # Serviço de geração de QR codes
            ├── qrcode.js        # Lógica principal do QR code
            └── handle.js        # Tratamento de dados do QR code
```

## 📦 Dependências

- **prompt** (^1.3.0) - Interface interativa para entrada de dados no terminal
- **chalk** (^5.6.2) - Coloração de texto no terminal
- **qrcode-terminal** (^0.12.0) - Geração de QR codes no terminal
- **dotenv** (^17.2.4) - Variáveis sensiveis

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente incluído com Node.js)

### Instalação

1. Acesse o diretório do projeto:
```bash
git clone https://github.com/HellenCristinaP/QRCode
```

2. Instale as dependências:
```bash
npm install
```

### Execução

Para iniciar a aplicação, execute:
```bash
npm start
```

Ou diretamente com Node.js:
```bash
node src/index.js
```

## 💡 Funcionamento

1. Ao executar o programa, um menu interativo será exibido no terminal
2. Selecione a opção desejada:
   - **Opção 1**: Gerar QR Code
   - **Opção 2**: Gerar Senha
3. Siga as instruções interativas para completar a operação
4. O resultado será exibido no terminal


## 👨‍💻 Autor

Desenvolvido como parte do Bootcamp de Node.js da DIO