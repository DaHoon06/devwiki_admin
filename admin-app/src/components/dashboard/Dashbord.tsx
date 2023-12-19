import { ReactElement } from 'react';
import styled from 'styled-components';
import { QuizContainer } from '@containers/QuizContainer';

const QuizBox = styled.section`
  margin-top: 1em;
  min-width: 820px;

  ${({ theme }) => theme.media.tablet} {
    min-width: 100%;
  }
`;
export const DashboardIndex = (): ReactElement => {
  return (
    <div>
      <QuizBox>
        <QuizContainer />
      </QuizBox>
    </div>
  );
};
