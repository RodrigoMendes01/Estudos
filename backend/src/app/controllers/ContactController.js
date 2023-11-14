const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // list all records
    const { orderBy } = request.query;
    const contacts = await ContactsRepository.findAll(orderBy);

    response.json(contacts);
  }

  async show(request, response) {
    // get one record
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // create a new record
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactsRepository.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'This e-mail already exists' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });
    response.json(contact);
  }

  async update(request, response) {
    // update a record
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExist = await ContactsRepository.findById(id);

    if (!contactExist) {
      return response.status(404).json({ error: 'User not found' });
    }

    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail already exists' });
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // delete one record
    const { id } = request.params;

    await ContactsRepository.delete(id);

    response.status(204).json({ sucess: 'User Deleted' });
  }
}

module.exports = new ContactController();
