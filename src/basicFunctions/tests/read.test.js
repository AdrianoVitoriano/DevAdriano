import Read from '../read';

describe('Testing the getAll function', () => {
    it('Should return an error if params is not passed', async () => {
        try {
            await Read.getAll();
        } catch (error) {
            console.log(error.message);
            expect(error.message).toBe("Model is required.");
        }
    })
    
});