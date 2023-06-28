import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

const URL_PREFIX = '/role/';

export const RoleAPI = {
  init() {
    return {
      id: 0,
      code: null,
      name: null,
      appId: null,
    };
  },

  getRole(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'getRole', params }, { errorMessageMode });
  },

  listRole(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post({ url: URL_PREFIX + 'listRole', params }, { errorMessageMode });
  },

  insertRole(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'insertRole', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  updateRole(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'updateRole', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  deleteRole(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'deleteRole', params }, { errorMessageMode });
  },

  getRoleByUserIdAndAppId(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post(
      { url: URL_PREFIX + 'getRoleByUserIdAndAppId', params },
      { errorMessageMode },
    );
  },
};
