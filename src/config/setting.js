const settings = {
  login: {
    apiUrl:
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-Z5pE7W2W9eTqpxmGo0159fZKr_Dh9DI',
  },
  database: {
    apiUrl: 'https://rn-complete-guide-7b63e-default-rtdb.firebaseio.com',
  },
};

const getCurrentSettings = () => {
  return settings;
};

export default getCurrentSettings();
