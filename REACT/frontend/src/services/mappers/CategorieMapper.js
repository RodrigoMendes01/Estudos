class CategorieMapper {
  toDomain(persistenceCategory) {
    return {
      id: persistenceCategory.id,
      name: persistenceCategory.name,
    };
  }
}

export default new CategorieMapper();
