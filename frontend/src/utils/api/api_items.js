import data from './mockdata';

export default new (class ApiItems {
  searchItemById = (itemId) => data.products.filter(item => item.id === itemId).shift();
})();