import type { NextApiRequest, NextApiResponse } from 'next/types'
const Data = [
  {
    id: '1',
    title: 'Users',
    data: [
      { day: 'Saturday', value: 60, id: '1' },
      {
        day: 'Sunday',
        value: 90,
        id: '2',
      },
      {
        day: 'Monday',
        value: 1,
        id: '3',
      },
      {
        day: 'Tuesday',
        value: 69,
        id: '4',
      },
      {
        day: 'Wednesday',
        value: 27,
        id: '5',
      },
      {
        day: 'Thursday',
        value: 64,
        id: '6',
      },
      {
        day: 'Friday',
        value: 33,
        id: '7',
      },
    ],
  },
  {
    id: '2',
    title: 'Books',
    data: [
      { day: 'Saturday', value: 60, id: '1' },
      {
        day: 'Sunday',
        value: 30,
        id: '2',
      },
      {
        day: 'Monday',
        value: 20,
        id: '3',
      },
      {
        day: 'Tuesday',
        value: 80,
        id: '4',
      },
      {
        day: 'Wednesday',
        value: 15,
        id: '5',
      },
      {
        day: 'Thursday',
        value: 33,
        id: '6',
      },
      {
        day: 'Friday',
        value: 11,
        id: '7',
      },
    ],
  },
  {
    id: '1',
    title: 'Swaps',
    data: [
      { day: 'Saturday', value: 12, id: '1' },
      {
        day: 'Sunday',
        value: 40,
        id: '2',
      },
      {
        day: 'Monday',
        value: 95,
        id: '3',
      },
      {
        day: 'Tuesday',
        value: 30,
        id: '4',
      },
      {
        day: 'Wednesday',
        value: 20,
        id: '5',
      },
      {
        day: 'Thursday',
        value: 55,
        id: '6',
      },
      {
        day: 'Friday',
        value: 33,
        id: '7',
      },
    ],
  },
  {
    id: '1',
    title: 'Exchanges',
    data: [
      { day: 'Saturday', value: 30, id: '1' },
      {
        day: 'Sunday',
        value: 34,
        id: '2',
      },
      {
        day: 'Monday',
        value: 20,
        id: '3',
      },
      {
        day: 'Tuesday',
        value: 90,
        id: '4',
      },
      {
        day: 'Wednesday',
        value: 10,
        id: '5',
      },
      {
        day: 'Thursday',
        value: 5,
        id: '6',
      },
      {
        day: 'Friday',
        value: 60,
        id: '7',
      },
    ],
  },
]
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(Data)
  } catch (err) {
    console.log(err)
  }
}
export default handler
