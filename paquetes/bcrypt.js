const bcrypt = require('bcrypt')

let password = 'jesus12345*.'

/* bcrypt.hash(password, 8, (err, hash) => {
    console.log(hash)
    bcrypt.compare(password,hash, (err, hash) => {
        console.log("resultado ",hash)
    })
}) */

async function verifyPassword(pass,hash){
    const password = await bcrypt.compare(pass,hash)
    return password
}

async function encryptPassword(){
    const hash = await bcrypt.hash(password,8)
    console.log(hash)
    const res = await verifyPassword('jesus12345*.',hash)
    console.log("async res ",res)
}

encryptPassword()



