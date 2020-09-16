describe("Form testing our form inputs", function(){
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    it("adds text into the inputs and submits form", function() {
        cy.get('input[name="name"]').type("Brenson").should("have.value", "Brenson");
        cy.get('input[name="email"]').type("Example@example.com").should("have.value", "Example@example.com");
        cy.get('input[name="password"]').type("Pass123").should("have.value", "Pass123");
        cy.get('input[name="terms"').click().should('be.checked');
        cy.get("button").click();
    });
    

    
 
}); 