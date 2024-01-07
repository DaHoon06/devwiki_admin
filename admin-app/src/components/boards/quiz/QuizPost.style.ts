import styled from 'styled-components';

export const QuizPostFormContainer = styled.div`
  .form_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6em;
    
    button {
      border: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};
      padding: 0.4em 0.6em;

      svg {
        margin-right: 0.4em;
      }
      
      &:hover {
        border-color: ${({theme}) => theme.colors.GRAY_200};
        span {color: ${({theme}) => theme.colors.GRAY_200};}
        svg path {fill: ${({theme}) => theme.colors.GRAY_200};}
      }
    }
  }

  .quiz_form_card {
    margin-bottom: 2em;
  }
  
  .save_button {
    margin-top: 1em;
    background-color: ${({theme}) => theme.colors.BORDER_COLOR};
    svg {margin-right: 0.6em}
    
    &:disabled {
      background-color: ${({theme}) => theme.colors.GRAY_500};
    }
  }
`;

export const QuizFormSubBox = styled.div`
  margin-top: 1em;
  
  .quiz_answer_title_box {
    margin-bottom: 1em;
  }
`;

export const InsertQuizContainer = styled.div`
  border: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};
  background-color: ${({theme}) => theme.colors.bg.primary};
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
    margin-top: 0.2em;
    display: flex;
    flex-direction: column;
    
    div > p {
      margin-top: 0.6em;
    }

    .answer {
      display: flex;
      align-items: center;
      background-color: ${({theme}) => theme.colors.bg.primary};
      border: 1px solid ${({theme}) => theme.colors.BORDER_COLOR};
      border-radius: 4px;
      padding: 0.2em 0.4em;
      min-height: 30px;
    }
  }
`;

export const InputLayer = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid  ${({ theme }) => theme.colors.BORDER_COLOR};
  border-radius: 4px;
  padding: 0.2em 0.4em;
  height: 2.5em;
  margin: 0.8em 0;

  &:focus {
    border-color: ${({ theme }) => theme.colors.GRAY_500};
  }
`;
