import bcrypt from "bcryptjs";

export default async function decrypt(password, hash) {
	try {
		return bcrypt.compare(password, hash);
	} catch (error) {
		console.error("Error decrypting password:", error);
		throw error; 
	}
}
