import axios from 'axios';

export default {
  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  },

  retrieveAllBooks: function(q) {
    return axios.get('/api/google', { params: { q: 'title:' + q } });
  },

  retrievedSavedBooks: function() {
    return axios.get('/api/books');
  },

  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  }
};