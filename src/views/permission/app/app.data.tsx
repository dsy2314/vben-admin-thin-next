import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Table';
import { message } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: '应用编码',
    dataIndex: 'code',
    width: 160,
    align: 'left',
  },
  {
    title: '应用名称',
    dataIndex: 'name',
    width: 160,
    align: 'left',
  },
  {
    title: 'Token',
    dataIndex: 'token',
    width: 50,
    customRender: ({ record }) => {
      const onClick = () => {
        message.success(record.name + ': ' + record.token);
      };
      return (
        <div>
          <span>***</span>
          <a
            style={{ paddingLeft: '2px', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={onClick}
          >
            查看
          </a>
        </div>
      );
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '应用编码',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'name',
    label: '应用名称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'code',
    label: '应用编码',
    component: 'Input',
    required: true,
  },
  {
    field: 'name',
    label: '应用编码',
    component: 'Input',
    required: true,
  },
];
