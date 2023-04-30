import { IUserColumn, IBookColumn } from '@utils/interfaces'

export const columns: IUserColumn[] | IBookColumn[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'username', label: 'user name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phone',
    label: 'Phone',
    minWidth: 100,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'createdAt',
    label: 'created At',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]
