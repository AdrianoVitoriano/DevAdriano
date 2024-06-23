
import Create from "../create";

describe('Testing the createOne function', () => {
    const data = {
        name: "Test"
    }
    const model = {
        name: "Test"
    }
    const select ={
        name:true
    }
    it('Should return an error if params is not passed', async () => {
        try {
            await Create.createOne();
        } catch (error) {
            console.log(error.message);
            expect(error.message).toBe("Data and model is required.");
        }
    })
    it('Should return an error if modal is not passed', async () => {

        try {
            await Create.createOne(data);
        } catch (error) {
            console.log(error.message);
            expect(error.message).toBe("Model is required.");
        }
    })
    it('Should return an error if select is not a object', async () => {

        try {
            await Create.createOne(data,model, select);
        } catch (error) {
            console.log(error.message);
            expect(error.message).toBe("Select isn't a object");
        }
    })

});
// describe('Testing the createMany function', () => {
//     it('Should return an error if params is not passed', async () => {
//         try {
//             await Create.createMany();
//         } catch (error) {
//             console.log(error.message);
//             expect(error.message).toBe("Data and model is required.");
//         }
//     })
//     it('Should return an error if modal is not passed', async () => {
//         try {
//             await Create.createMany(data);
//         } catch (error) {
//             console.log(error.message);
//             expect(error.message).toBe("Model is required.");
//         }
//     })

// });