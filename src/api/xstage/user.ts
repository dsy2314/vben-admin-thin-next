import { defHttp } from '@/utils/http/axios';
import { ErrorMessageMode } from '#/axios';

const URL_PREFIX = '/user/';

export const UserAPI = {
  init() {
    return {
      id: 0,
      appUserId: null,
      appId: null,
      organizeId: null,
      organizeName: null,
      account: null,
      password: null,
      name: null,
      mail: null,
      phone: null,
      qQ: null,
      groupId: null,
      birth: null,
      educationId: null,
      departmentId: null,
      postId: null,
      quality: null,
      workTypeId: null,
      workLicenseFlag: null,
      aliasName: null,
      accountValidTime: null,
      accountValidFlag: null,
      passwordValidTime: null,
      passwordValidFlag: null,
    };
  },

  getUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'getUser', params }, { errorMessageMode });
  },

  listUser(params = {}, errorMessageMode: ErrorMessageMode = 'none') {
    return defHttp.post({ url: URL_PREFIX + 'listUser', params }, { errorMessageMode });
  },

  insertUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'insertUser', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  updateUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post(
      { url: URL_PREFIX + 'updateUser', params: { data: JSON.stringify(params) } },
      { errorMessageMode },
    );
  },

  deleteUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'deleteUser', params }, { errorMessageMode });
  },

  loginUser(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'loginUser', params }, { errorMessageMode });
  },

  logout(params = {}, errorMessageMode: ErrorMessageMode = 'modal') {
    return defHttp.post({ url: URL_PREFIX + 'logout', params }, { errorMessageMode });
  },
};
