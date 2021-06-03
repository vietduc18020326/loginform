import {create} from 'apisauce';

import settings from '../config/setting';
import authStorage from '../auth/storage';

const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers['x-auth-token'] = authToken;
});

export default apiClient;
