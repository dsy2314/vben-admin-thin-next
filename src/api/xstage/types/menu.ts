export interface MenuModel {
  id: number;
  appId: number;
  code: string;
  name: string;
  module: string;
  url: string;
  type: number;
  parentId: number;
  icon: string;
  parentFlag: boolean;
  displayFlag: boolean;
  sort: number;
}
