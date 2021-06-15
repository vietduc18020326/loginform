const settings = {
  login: {
    apiUrl:
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-Z5pE7W2W9eTqpxmGo0159fZKr_Dh9DI',
  },
};

const getCurrentSettings = () => {
  return settings.login;
};

export default getCurrentSettings();
