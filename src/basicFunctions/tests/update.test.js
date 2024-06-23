import Update from "../update";

describe("Testing the getAll function", () => {
	const id = 1;
	const model = { nome: "Test" };
	it("Should return an error if params is not passed", async () => {
		try {
			await Update.updateOneById();
		} catch (error) {
			console.log(error.message);
			expect(error.message).toBe("Id, model and data is required.");
		}
	});
	it("Should return an error if model and data is not passed", async () => {
		try {
			await Update.updateOneById(id);
		} catch (error) {
			console.log(error.message);
			expect(error.message).toBe("Model and data is required.");
		}
	});
	it("Should return an error if data is not passed", async () => {
		try {
			await Update.updateOneById(id,model);
		} catch (error) {
			console.log(error.message);
			expect(error.message).toBe("Data is required.");
		}
	});
});
