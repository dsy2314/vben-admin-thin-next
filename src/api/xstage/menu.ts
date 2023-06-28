import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

const URL_PREFIX = '/menu/';

export const MenuAPI = {
  init() {
    return {
      id: 0,
      appId: null,
      code: null,
      name: null,
      module: null,
      url: null,
      type: null,
      parentId: null,
      icon: null,
      parentFlag: null,
      displayFlag: null,
      sort: null,
    };
  },

  getMenu(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'getMenu', params }, { errorMessageMode });
  },

  listMenu(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post({ url: URL_PREFIX + 'listMenu', params }, { errorMessageMode });
  },

  insertMenu(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'insertMenu', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  updateMenu(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'updateMenu', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  deleteMenu(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'deleteMenu', params }, { errorMessageMode });
  },

  listMenuWithOperationByUserId(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'listMenuWithOperationByUserId', params },
      { errorMessageMode },
    );
  },
};
