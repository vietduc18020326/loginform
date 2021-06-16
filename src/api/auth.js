import client from './client';
import item from './item';

const login = (email, password) => client.post('', {email, password});

const create = (title, token) => item.post('/products.json', {title});

const getItem = () => item.get('/products.json');

const update = (id, title) => item.patch(`/products/${id}.json`, {title});

const deleteItem = id => item.delete(`/products/${id}.json`);

export default {login, create, update, getItem, deleteItem};
