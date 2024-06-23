import encrypt from '../Encryption/encrypt.js'
import decrypt from '../Encryption/decrypt.js'

describe("Testing encryption function", ()=>{
    it("Call the function", async () =>{
        const encryptPassword = await encrypt("14567654")
        const decryptPassword = await decrypt("14567654",encryptPassword)
        expect(decryptPassword).toBe(true)
    })
})