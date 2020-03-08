const expect = require('expect');

describe('Auth', () => {
  it('/enterprises/1 should return investor with portfolio', () => {
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

  it('/enterprises', () => {
    cy.server();
    cy.request('/api/v1/enterprises').then(response => {
      expect(response.body).toEqual({
        enterprises: [
          {
            id: expect.any(Number),
            email_enterprise: expect.any(String),
            facebook: expect.any(String),
            twitter: expect.any(String),
            linkedin: expect.any(String),
            phone: expect.any(String),
            own_enterprise: expect.any(Boolean),
            enterprise_name: expect.any(String),
            photo: expect.any(String),
            description: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            value: expect.any(Number),
            share_price: expect.any(Number),
            enterprise_type: {
              id: expect.any(Number),
              enterprise_type_name: expect.any(String),
            },
          },
          {
            id: expect.any(Number),
            email_enterprise: expect.any(String),
            facebook: expect.any(String),
            twitter: expect.any(String),
            linkedin: expect.any(String),
            phone: expect.any(String),
            own_enterprise: expect.any(Boolean),
            enterprise_name: expect.any(String),
            photo: expect.any(String),
            description: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            value: expect.any(Number),
            share_price: expect.any(Number),
            enterprise_type: {
              id: expect.any(Number),
              enterprise_type_name: expect.any(String),
            },
          },
        ],
      });
    });
  });

  it('/enterprises with enterprise_types filter', () => {
    cy.server();
    cy.request('/api/v1/enterprises?enterprise_types=1').then(response => {
      expect(response.body).toEqual({
        enterprises: [
          {
            id: expect.any(Number),
            email_enterprise: expect.any(String),
            facebook: expect.any(String),
            twitter: expect.any(String),
            linkedin: expect.any(String),
            phone: expect.any(String),
            own_enterprise: expect.any(Boolean),
            enterprise_name: expect.any(String),
            photo: expect.any(String),
            description: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            value: expect.any(Number),
            share_price: expect.any(Number),
            enterprise_type: {
              id: expect.any(Number),
              enterprise_type_name: expect.any(String),
            },
          },
        ],
      });
    });
  });

  it('/enterprises with name filter', () => {
    cy.server();
    cy.request('/api/v1/enterprises?name=aQm').then(response => {
      expect(response.body).toEqual({
        enterprises: [
          {
            id: expect.any(Number),
            email_enterprise: expect.any(String),
            facebook: expect.any(String),
            twitter: expect.any(String),
            linkedin: expect.any(String),
            phone: expect.any(String),
            own_enterprise: expect.any(Boolean),
            enterprise_name: expect.any(String),
            photo: expect.any(String),
            description: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            value: expect.any(Number),
            share_price: expect.any(Number),
            enterprise_type: {
              id: expect.any(Number),
              enterprise_type_name: expect.any(String),
            },
          },
        ],
      });
    });
  });

  it('/enterprises with filters', () => {
    cy.server();
    cy.request('/api/v1/enterprises?enterprise_types=1&name=aQm').then(response => {
      expect(response.body).toEqual({
        enterprises: [
          {
            id: expect.any(Number),
            email_enterprise: expect.any(String),
            facebook: expect.any(String),
            twitter: expect.any(String),
            linkedin: expect.any(String),
            phone: expect.any(String),
            own_enterprise: expect.any(Boolean),
            enterprise_name: expect.any(String),
            photo: expect.any(String),
            description: expect.any(String),
            city: expect.any(String),
            country: expect.any(String),
            value: expect.any(Number),
            share_price: expect.any(Number),
            enterprise_type: {
              id: expect.any(Number),
              enterprise_type_name: expect.any(String),
            },
          },
        ],
      });
    });
  });
});
