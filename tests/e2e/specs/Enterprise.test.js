const expect = require('expect');

describe('Enterprise', () => {
  let accessToken;
  let client;

  beforeEach(async () => {
    const response = await cy.request('POST', '/api/v1/users/auth/sign_in', {
      email: 'testeapple@ioasys.com.br',
      password: '12341234',
    });

    accessToken = response.headers['access-token'];
    client = response.headers.client;
  });

  it('/enterprises/1 should return investor with portfolio', () => {
    cy.request({
      url: '/api/v1/enterprises/1',
      headers: {
        'access-token': accessToken,
        client,
      },
    }).then(response => {
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
    cy.request({
      url: '/api/v1/enterprises',
      headers: {
        'access-token': accessToken,
        client,
      },
    }).then(response => {
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
    cy.request({
      url: '/api/v1/enterprises?enterprise_types=1',
      headers: {
        'access-token': accessToken,
        client,
      },
    }).then(response => {
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
    cy.request({
      url: '/api/v1/enterprises?name=aQm',
      headers: {
        'access-token': accessToken,
        client,
      },
    }).then(response => {
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
    cy.request({
      url: '/api/v1/enterprises?enterprise_types=1&name=aQm',
      headers: {
        'access-token': accessToken,
        client,
      },
    }).then(response => {
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
