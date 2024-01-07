import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { LineChart, LineChartProps } from '@components/charts/LineChart';
import { CardUi } from '@components/ui/card/Card';
import { PieChart } from '@components/charts/PieChart';
import { QuizListsBoard } from '@components/boards/quiz/QuizListsBoard';

const sampleLine: LineChartProps[] = [
  {
    id: '사용자',
    data: [
      {
        x: '2023-12-12',
        y: 215,
      },
      {
        x: '2023-12-13',
        y: 120,
      },
      {
        x: '2023-12-14',
        y: 130,
      },
      {
        x: '2023-12-15',
        y: 227,
      },
      {
        x: '2023-12-16',
        y: 238,
      },
      {
        x: '2023-12-17',
        y: 44,
      },
      {
        x: '2023-12-18',
        y: 67,
      },
    ],
  },
];

const samplePie = [
  {
    id: '1 번째',
    label: '1 번째',
    value: 87,
    color: 'hsl(67, 70%, 50%)',
  },
  {
    id: '2 번째',
    label: '2 번째',
    value: 359,
    color: 'hsl(329, 70%, 50%)',
  },
  {
    id: '3 번째',
    label: '3 번째',
    value: 57,
    color: 'hsl(258, 70%, 50%)',
  },
  {
    id: '4 번째',
    label: '4 번째',
    value: 456,
    color: 'hsl(195, 70%, 50%)',
  },
  {
    id: '5 번째',
    label: '5 번째',
    value: 600,
    color: 'hsl(247, 70%, 50%)',
  },
];

const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1.25em;
  row-gap: 0;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    row-gap: 1.25em;
    column-gap: 0;
  }
`;

const QuizBox = styled.div`
  margin-top: 1em;
  min-width: 820px;

  ${({ theme }) => theme.media.tablet} {
    min-width: 100%;
  }
`;

const today = new Date();
today.setHours(0, 0, 0, 0);

const lastDay = new Date();
const dayOfMonth = lastDay.getDate();
lastDay.setDate(dayOfMonth - 7);

function dateToString(date: Date): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month}-${day}`;
}

export const DashboardIndex = (): ReactElement => {
  const [date, setDate] = useState({
    startDate: `${dateToString(lastDay)}`,
    endDate: `${dateToString(today)}`,
  });

  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setDate({
      ...date,
      [name]: value,
    });
  };
  return (
    <div>
      {/*<ItemBox>*/}
      {/*  <CardUi height={400} label={'일일 사용자 통계'}>*/}
      {/*    <div>*/}
      {/*      <input*/}
      {/*        type={'date'}*/}
      {/*        value={date.startDate}*/}
      {/*        name={'startDate'}*/}
      {/*        onChange={handleChangeDate}*/}
      {/*      />*/}
      {/*      <input*/}
      {/*        type={'date'}*/}
      {/*        disabled*/}
      {/*        value={date.endDate}*/}
      {/*        name={'endDate'}*/}
      {/*        onChange={handleChangeDate}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <LineChart data={sampleLine} legend={'사용자'} />*/}
      {/*  </CardUi>*/}
      {/*  <CardUi height={400} label={'퀴즈 정답률 통계'}>*/}
      {/*    <div>*/}
      {/*      <input*/}
      {/*        type={'date'}*/}
      {/*        value={date.startDate}*/}
      {/*        name={'startDate'}*/}
      {/*        onChange={handleChangeDate}*/}
      {/*      />*/}
      {/*      <input*/}
      {/*        type={'date'}*/}
      {/*        disabled*/}
      {/*        value={date.endDate}*/}
      {/*        name={'endDate'}*/}
      {/*        onChange={handleChangeDate}*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <PieChart data={samplePie} legend={'사용자'} />*/}
      {/*  </CardUi>*/}
      {/*</ItemBox>*/}
      <QuizBox>
        <QuizListsBoard />
      </QuizBox>
    </div>
  );
};
