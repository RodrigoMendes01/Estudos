const CategorieRepository = require('../repositories/CategorieRepository');

class CategorieController {
  async index(request, response) {
    const categories = await CategorieRepository.findAll();

    response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const categorieExists = await CategorieRepository.findByName(name);

    if (categorieExists) {
      return response.status(400).json({ error: 'Categorie Already Exists' });
    }

    const categorie = await CategorieRepository.create(name);

    response.json(categorie);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categorieExist = await CategorieRepository.findById(id);

    if (!categorieExist) {
      response.status(404).json({ error: 'This categorie dosent exists' });
    }

    const categorie = await CategorieRepository.update(name, id);

    response.json(categorie);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategorieRepository.delete(id);

    response.status(200).json({ message: 'Categorie deleted' });
  }
}

module.exports = new CategorieController();
