describe("flight reservation system", () => {
    it("Navigate to Flight Reservation Site", () => {
        cy.visit('http://newtours.demoaut.com/')        

    })
    it("log into flight reservation system"), () => {
        cy.get('input[name=userName]').type("mercury")
        cy.get('input[name=password]').type("mercury")
        cy.get('div > input').click
    })
})
