let store = require('../store')

class CategoryRepository {

    async getAll() {
        return store.categories;
    }
}

module.exports = new CategoryRepository();