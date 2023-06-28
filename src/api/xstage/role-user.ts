import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

const URL_PREFIX = '/roleUser/';

export const RoleUserAPI = {
  init() {
    return {
      id: 0,
      userId: null,
      roleId: null,
    };
  },

  getRoleUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'getRoleUser', params }, { errorMessageMode });
  },

  listRoleUser(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post({ url: URL_PREFIX + 'listRoleUser', params }, { errorMessageMode });
  },

  insertRoleUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'insertRoleUser', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  updateRoleUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'updateRoleUser', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  deleteRoleUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'deleteRoleUser', params }, { errorMessageMode });
  },
};
