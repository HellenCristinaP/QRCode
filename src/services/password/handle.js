async function caracteres(){
    let characteres = []

    if(process.env.UPPERCASE_LETTERS === "TRUE") {
        characteres.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if(process.env.LOWERCASE_LETTERS === "TRUE") {
        characteres.push(..."abcdefghijklmnopqrstuvwxyz")
    }
    if(process.env.NUMBERS === "TRUE") {
        characteres.push(..."0123456789")
    }
    if(process.env.SPECIAL_CHARACTERS === "TRUE") {
        characteres.push(..."!@#$%^&*()-+_=<>?")
    }
    
    return characteres
}

async function handle() {
    let characteres = await caracteres()
    let password = ""

    const length = process.env.LENGTH || 12;
    
    for(let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characteres.length)
        password += characteres[index]
    }

    return password
}

export default handle