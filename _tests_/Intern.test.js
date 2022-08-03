const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("test Intern's properties", () => {
        it("test all properties", () => {
            const intern = new Intern('Phil', 1, 'ploy@yahoo.com', 'OSU')

            expect(intern.name).toEqual('Phil')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('ploy@yahoo.com')
            expect(intern.school).toEqual("OSU")

        })

    })

    describe("test Intern's methods", () => {
        it("test all methods", () => {
            const intern = new Intern('brian', 2, 'brian@yahoo.com', 'OSU')
            expect(intern.getName()).toEqual('brian')
            expect(intern.getId()).toEqual(2)
            expect(intern.getEmail()).toEqual('brian@yahoo.com')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})