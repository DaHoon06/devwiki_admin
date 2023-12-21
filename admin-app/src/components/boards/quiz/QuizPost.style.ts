import styled from 'styled-components';

export const InsertQuizContainer = styled.div`
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 4px;
  width: 100%;
  padding: 0.8em 0.4em;
  margin: 0.8em 0;
`;

export const InsertQuizBox = styled.div`
  display: flex;
  flex-direction: column;

  .question {
    width: 100%;
  }

  .answer-box {
    margin-top: 1em;
    display: flex;
    flex-direction: column;

    .answer {
      background-color: #f6f6f6;
      border: 1px solid #eeeeee;
      border-radius: 4px;
      padding: 0.2em 0.4em;
      min-height: 30px;
    }
  }
`;

export const InputLayer = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding: 0.2em 0.4em;
  height: 2.5em;
  margin: 0.8em 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.PRIMARY};
  }
`;
