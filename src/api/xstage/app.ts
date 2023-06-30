import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

const URL_PREFIX = '/app/';

export const AppAPI = {
  init() {
    return {
      id: 0,
      code: null,
      name: null,
      token: null,
    };
  },

  getApp(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'getApp', params }, { errorMessageMode });
  },

  listApp(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post({ url: URL_PREFIX + 'listApp', params }, { errorMessageMode });
  },

  insertApp(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'insertApp', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  updateApp(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'updateApp', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  deleteApp(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'deleteApp', params }, { errorMessageMode });
  },
};
