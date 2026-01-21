describe('API Automation - Add Book', () => {
    it('should Add Book To Library successfully', () => {
        cy.request({
            method: 'POST',
            url: 'http://216.10.245.166/Library/Addbook.php',
            body: {
                "name": "Learn Cypress api automation with JS",
                "isbn": "abcd",
                "aisle": "1227",
                "author": "John foe"
            },
            failOnStatusCode: false
        })
            .then((response) => {
                expect(response.status).to.eq(200);
               
            });
    });
});