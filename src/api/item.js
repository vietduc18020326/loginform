import {create} from 'apisauce';

import setting from '../config/setting';
import authStorage from '../auth/storage';

const apiData = create({
  baseURL: setting.database.apiUrl,
});
apiData.addAsyncRequestTransform(async request => {
  const authToken = await authStorage.getToken();
  // if (!authToken) {
  //   return;
  // }
  request.headers['x-auth-item'] = authToken;
});

export default apiData;
