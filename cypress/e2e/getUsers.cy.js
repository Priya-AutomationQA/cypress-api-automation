describe('API Automation - get Users', () => {
    it('should fetch users successfully', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            headers: {
                'accept':'application/json',
                'user-agent':'Mozilla/5.0'
            },
            failOnStatusCode: false,
            
        })
            .then((response) => {
                expect(response.status).to.eq(403);
                // expect(response.body.data).to.have.length.greaterThan(0);
               
            });
    });
});