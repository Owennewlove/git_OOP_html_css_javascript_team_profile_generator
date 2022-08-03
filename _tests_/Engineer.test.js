const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("test Engineer's properties", () => {
        it("test all properties", () => {
            const engineer = new Engineer('Phil', 1, 'ploy@yahoo.com', 'github')

            expect(engineer.name).toEqual('Phil')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('ploy@yahoo.com')
            expect(engineer.github).toEqual('github')

        })

    })

    describe("test Engineer's methods", () => {
        it("test all methods", () => {
            const engineer = new Engineer('brian', 2, 'brian@yahoo.com', 'github')
            expect(engineer.getName()).toEqual('brian')
            expect(engineer.getId()).toEqual(2)
            expect(engineer.getEmail()).toEqual('brian@yahoo.com')
            expect(engineer.getRole()).toEqual('Engineer')

        })
    })
})