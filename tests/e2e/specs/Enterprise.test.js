const expect = require('expect');

describe('Auth', () => {
  it('/sign_in should return investor with portfolio', () => {
    cy.server();
    cy.request('/api/v1/enterprises/1').then(response => {
      expect(response.body).toEqual({
        enterprise: {
          id: expect.any(Number),
          email_enterprise: expect.any(String),
          enterprise_name: expect.any(String),
          description: expect.any(String),
          facebook: expect.any(String),
          linkedin: expect.any(String),
          phone: expect.any(String),
          photo: expect.any(String),
          twitter: expect.any(String),
          value: expect.any(Number),
          share_price: expect.any(Number),
          city: expect.any(String),
          country: expect.any(String),
          own_enterprise: expect.any(Boolean),
          shares: expect.any(Number),
          own_shares: expect.any(Number),
          enterprise_type: {
            id: expect.any(Number),
            enterprise_type_name: expect.any(String),
          },
        },
        success: true,
      });
    });
  });
});
