import { IBookColumn } from '@utils/interfaces'

export const BookColumns: readonly IBookColumn[] = [
  { id: 'name', label: 'book name', minWidth: 170 },
  { id: 'author', label: 'author', minWidth: 100 },
  { id: 'createdAt', label: 'create dAt', minWidth: 170 },
  { id: 'owner', label: 'owner', minWidth: 150 },
  {
    id: 'credits',
    label: 'credits',
    minWidth: 100,
    align: 'center',
    format: (value: number) => value.toLocaleString('en-US'),
  },
]
