const bcrypt = require('bcrypt');
const faker = require('faker');

const BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT, 10) || 8;

const returnID = value => (Array.isArray(value) ? value[0].id : value);

const insertor = bulkInsert => async (table, entity, options = { returning: true }) =>
  returnID(await bulkInsert(table, [entity], options));

module.exports = {
  up: async queryInterface => {
    const seed = insertor(queryInterface.bulkInsert.bind(queryInterface));

    const password = await bcrypt.hash('12341234', BCRYPT_SALT);

    const user = await seed('users', {
      name: faker.name.findName(),
      email: 'testeapple@ioasys.com.br',
      city: faker.address.city(),
      country: faker.address.country(),
      balance: faker.finance.amount(),
      photo: faker.image.avatar(),
      first_access: false,
      super_angel: false,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const typeA = await seed('enterprise_types', {
      name: faker.commerce.department(),
      created_at: new Date(),
      updated_at: new Date(),
    });

    const typeB = await seed('enterprise_types', {
      name: faker.commerce.department(),
      created_at: new Date(),
      updated_at: new Date(),
    });

    const enterpriseAUserName = faker.internet.userName();
    const enterpriseA = await seed('enterprises', {
      type_id: typeA,
      name: faker.company.companyName(),
      email: faker.internet.email(),
      facebook: `https://facebook.com/${enterpriseAUserName}`,
      twitter: `https://twitter.com/${enterpriseAUserName}`,
      linkedin: `https://facebook.com/in/${enterpriseAUserName}`,
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      country: faker.address.country(),
      description: faker.lorem.text(),
      photo: faker.image.avatar(),
      value: faker.finance.amount(),
      share_price: faker.finance.amount(),
      own_enterprise: faker.random.boolean(),
      shares: faker.finance.amount(),
      own_shares: faker.finance.amount(),
      created_at: new Date(),
      updated_at: new Date(),
    });

    const enterpriseB = await seed('enterprises', {
      type_id: typeB,
      name: faker.company.companyName(),
      email: faker.internet.email(),
      facebook: `https://facebook.com/${enterpriseAUserName}`,
      twitter: `https://twitter.com/${enterpriseAUserName}`,
      linkedin: `https://facebook.com/in/${enterpriseAUserName}`,
      phone: faker.phone.phoneNumber(),
      city: faker.address.city(),
      country: faker.address.country(),
      description: faker.lorem.text(),
      photo: faker.image.avatar(),
      value: faker.finance.amount(),
      share_price: faker.finance.amount(),
      own_enterprise: faker.random.boolean(),
      shares: faker.finance.amount(),
      own_shares: faker.finance.amount(),
      created_at: new Date(),
      updated_at: new Date(),
    });

    await queryInterface.bulkInsert('user_has_enterprises', [
      {
        user_id: user,
        enterprise_id: enterpriseA,
      },
      {
        user_id: user,
        enterprise_id: enterpriseB,
      },
    ]);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('user_has_enterprises');
    await queryInterface.bulkDelete('enterprises');
    await queryInterface.bulkDelete('enterprise_types');
    await queryInterface.bulkDelete('users');
  },
};
