const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Alisson Vieira',
    email: 'alisson@email.com',
    phone: '12987654321',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
