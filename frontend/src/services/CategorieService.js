import HttpClient from './utils/HttpClient';
import CategorieMapper from './mappers/CategorieMapper';

class CategorieService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories() {
    const categories = await this.httpClient.get('/categories');
    return categories.map(CategorieMapper.toDomain);
  }
}

export default new CategorieService();
