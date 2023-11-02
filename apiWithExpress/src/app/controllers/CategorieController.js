const CategorieRepository = require('../repositories/CategorieRepository');

class CategorieController {
  async index(request, response) {
    const categories = await CategorieRepository.findAll();
    response.send(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorie = await CategorieRepository.create(name);

    response.json(categorie);
  }

  update(request, response) {
    response.send('ENVIADO DO UPDATE');
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategorieRepository.delete(id);

    response.status(200).json({ message: 'Categorie deleted' });
  }
}

module.exports = new CategorieController();
