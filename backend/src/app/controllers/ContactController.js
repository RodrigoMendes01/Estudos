const ContactsRepository = require('../repositories/ContactRepository');
const isValidUUID = require('../../utils/isValidUUID');

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

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Ivalid contact ID' });
    }

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // create a new record
    const {
      name, email, phone, category_id,
    } = request.body;

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Ivalid category' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (email) {
      const contactExist = await ContactsRepository.findByEmail(email);

      if (contactExist) {
        return response.status(400).json({ error: 'This e-mail already exists' });
      }
    }

    const contact = await ContactsRepository.create({
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });
    response.status(201).json(contact);
  }

  async update(request, response) {
    // update a record
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Ivalid contact ID' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return response.status(400).json({ error: 'Ivalid category' });
    }

    const contactExist = await ContactsRepository.findById(id);

    if (!contactExist) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    if (email) {
      const contactByEmail = await ContactsRepository.findByEmail(email);

      if (contactByEmail && contactByEmail.id !== id) {
        return response.status(400).json({ error: 'This e-mail already exists' });
      }
    }

    const contact = await ContactsRepository.update(id, {
      name,
      email: email || null,
      phone,
      category_id: category_id || null,
    });

    response.json(contact);
  }

  async delete(request, response) {
    // delete one record
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: 'Ivalid contact ID' });
    }

    await ContactsRepository.delete(id);

    response.status(204).json({ sucess: 'Contact Deleted' });
  }
}

module.exports = new ContactController();
