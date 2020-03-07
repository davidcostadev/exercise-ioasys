const expect = require('expect');

describe('Auth', () => {
  it('/sign_in should return investor with portfolio', () => {
    cy.server();
    cy.request('/api/v1/users/auth/sign_in').then(response => {
      expect(response.body).toEqual({
        investor: {
          id: 1,
          investor_name: expect.any(String),
          email: expect.any(String),
          city: expect.any(String),
          country: expect.any(String),
          balance: expect.any(Number),
          photo: expect.any(String),
          first_access: false,
          super_angel: false,
          portfolio: {
            enterprises: [
              {
                id: 1,
                enterprise_name: expect.any(String),
                enterprise_type: {
                  id: 1,
                  enterprise_type_name: expect.any(String),
                },
              },
              {
                id: 2,
                enterprise_name: expect.any(String),
                enterprise_type: {
                  id: 2,
                  enterprise_type_name: expect.any(String),
                },
              },
            ],
            enterprises_number: expect.any(Number),
          },
          portfolio_value: expect.any(Number),
        },
        enterprise: null,
        success: true,
      });
    });
  });
});
