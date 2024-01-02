const dataBase = require('../../database');

class CategorieRepository {
  async findAll() {
    const rows = await dataBase.query('SELECT * FROM categories');
    return rows;
  }

  async findByName(name) {
    const [row] = await dataBase.query('SELECT * FROM categories WHERE name = $1', [name]);
    return row;
  }

  async findById(id) {
    const row = await dataBase.query('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async update(name, id) {
    const [row] = await dataBase.query(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *`, [name, id]);

    return row;
  }

  async create(name) {
    const [row] = await dataBase.query('INSERT INTO categories(name) VALUES($1) RETURNING *', [name]);
    return row;
  }

  async delete(id) {
    const deletedRow = await dataBase.query('DELETE FROM categories WHERE id = $1', [id]);
    return deletedRow;
  }
}

module.exports = new CategorieRepository();
