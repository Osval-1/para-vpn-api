import crypto from "crypto"
export const networkStrength = ()=>{
    const randomNumber = crypto.randomInt(1, 6)
    const array =  new Array(randomNumber).fill(0)
    return array
}