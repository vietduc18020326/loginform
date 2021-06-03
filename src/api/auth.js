import client from './client';

const login = (email, password) => client.post('', {email, password});

export default {login};
