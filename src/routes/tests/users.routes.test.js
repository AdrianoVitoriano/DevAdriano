// import "dotenv/config";


// describe("Testing user routes", ()=>{
//     it("Testing create a new user", async () =>{
//         const userData = {
//             firstName: "Adriano",
//             lastName: "Vitoriano da Silva",
//             email: `adriano${Math.random()}@gmail.com`,
//             password: `Adr1@n0${Math.random()}`
//         };
//         try {
//             const res = await fetch(`${process.env.API_URL}/users`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(userData),
//             });
//             expect(res.status).toBe(201);
//         } catch (error) {
//             console.error("Error during the test:", error);
//             expect.fail(error);
//         }
//     })
//     it("Testing get a user by id", async () =>{
//         const id = "clxmjir2r0000pfa05yhbdw5x"
//         try {
//             const res = await fetch(`${process.env.API_URL}/users/${id}`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             expect(res.status).toBe(302);
//         } catch (error) {
//             console.error("Error during the test:", error);
//             expect.fail(error);
//         }
//     })
//     it("Testing get all users", async () =>{
//         try {
//             const res = await fetch(`${process.env.API_URL}/users`, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             expect(res.status).toBe(200);
//         } catch (error) {
//             console.error("Error during the test:", error);
//             expect.fail(error);
//         }
//     })
//     it("Testing update a user by id", async () =>{
//         const id = "clxmia6ha0000pig6qioo9f5d"
//         try {
//             const res = await fetch(`${process.env.API_URL}/users/${id}`, {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({firstName: `Adriano${Math.random().toString()}`, lastName: `Vitoriano da Silva${Math.random().toString()}`, email: `adriano${Math.random()}@gmail.com`, password: `Adr1@n0${Math.random()}`})
//             });
//             expect(res.status).toBe(200);
//         } catch (error) {
//             console.error("Error during the test:", error);
//             expect.fail(error);
//         }
//     })
// })