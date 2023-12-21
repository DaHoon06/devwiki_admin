import React, {ReactElement, useState} from "react";
import {InsertQuizData} from "@interfaces/Quiz";
import {Typography} from "@components/common/Typography";
import {CardUi} from "@components/ui/card/Card";
import styled from "styled-components";
import {useAddQuiz} from "@services/mutation/useQuizMutation";

const InsertQuizContainer = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 100%;

`;

const InsertQuizBox = styled.div`
  display: flex;
  flex-direction: column;
  
  .question {
    width: 100%;
    border: 1px solid black;
  }
  .answer-box {
    display: flex;
  }
`;

export const QuizPost = (): ReactElement => {
  const [quiz, setQuiz] = useState<InsertQuizData[]>([]);
  const [inputValue, setInputValue] = useState<InsertQuizData>({question: '', answer: '', prefix: '', suffix: ''})
  const {question,prefix, suffix,answer} = inputValue;
  const mutate = useAddQuiz();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }
  const resetState = () => {
    setInputValue({question:'',answer:'',suffix:'',prefix:''});
    setQuiz([]);
  }
  const onClickAddQuiz = () => {
    quiz.push(inputValue);
    setInputValue({question:'',answer:'',suffix:'',prefix:''});
  }

  const save = () => {
    mutate(quiz);
    resetState()
  }



  return (
    <CardUi label={'퀴즈 등록 폼'}>
      {quiz.map((value, index) => {
        return (
          <InsertQuizContainer key={`${value.answer}-${index}`}>
            <InsertQuizBox>
              <div className={'question'}>
                {value.question}
              </div>
              <div className={'answer-box'}>
                <div>
                  {value.prefix}
                </div>
                <div>
                  {value.answer}
                </div>
                <div>
                  {value.suffix}
                </div>
              </div>

            </InsertQuizBox>
          </InsertQuizContainer>
        )
      })}

      <form>
        <legend>퀴즈 등록</legend>
        <div>
          <input type={'text'} name={'question'} value={question} placeholder={'질문'} onChange={onChangeInput} />
        </div>
        <div>
          <Typography>
            정답
          </Typography>
          <input type={'text'} name={'prefix'} value={prefix} onChange={onChangeInput} />
          <input type={'text'} name={'answer'} value={answer} onChange={onChangeInput} />
          <input type={'text'} name={'suffix'} value={suffix} onChange={onChangeInput} />
        </div>

      </form>
      <button type={'button'} onClick={onClickAddQuiz}>
        +
      </button>
      <button type={'button'} onClick={save}>
        퀴즈 저장
      </button>
    </CardUi>
  )
}