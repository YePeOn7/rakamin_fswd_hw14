import bcrypt from 'bcrypt'

const SALT_ROUND = 10
export function hashPassword(password){
    const h = bcrypt.hashSync(password, SALT_ROUND);
    return h;
}

export async function comparePassword(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword);
}