import styled from 'styled-components';

export const CalendarLayout = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  text-align: center;
`;

export const CalendarLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 2em;

  button {
    border: 1px solid transparent;
    color: #dadada;
    border-radius: 10px;

    &:hover {
      background: #1ebc6f;
      border-color: #ededed;

      svg {
        color: #fff !important;
      }
    }
  }
`;

export const DayWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CalendarTable = styled.table`
  width: 100%;
  height: 100%;
  min-height: 464px;
  min-width: 100%;

  thead > tr > th {
    padding: 0.8em 0.2em;
  }

  tbody > tr > td {
    padding: 0.8em 0.2em;
    border: 1px solid transparent;

    &.today {
      span {
        color: #1ebc6f;
        font-weight: bold;
      }
    }

    &.prev_month,
    &.next_month {
      color: #d2d2d2;
      background: #f8f8f8;
    }

    &.selected_day {
      background: #1ebc6f;
      border-radius: 10px;

      span {
        color: #fff;
      }
    }

    &:hover {
      cursor: pointer;
    }

    &:not(.selected_day):hover {
      background: rgba(109, 241, 172, 0.3);
      border-radius: 10px;

      span {
        color: #3f3f3f;
      }
    }
  }
`;
