import bcrypt from "bcryptjs";

export default async function encrypt(password) {
	try {
		const salt = await bcrypt.genSalt(10);
		return await bcrypt.hash(password, salt);
	  } catch (error) {
		console.error("Error encrypting password:", error);
		throw error; // Rethrow or handle as needed
	  }
}
