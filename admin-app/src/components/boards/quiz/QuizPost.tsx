import React, { ReactElement, useState } from 'react';
import { InsertQuizData } from '@interfaces/Quiz';
import { Typography } from '@components/common/Typography';
import { CardUi } from '@components/ui/card/Card';
import { useAddQuiz } from '@services/mutation/useQuizMutation';
import * as S from './QuizPost.style';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@components/common/Button';
import { AiFillSave } from 'react-icons/ai';
import {QuizPostFormContainer} from "./QuizPost.style";

export const QuizPost = (): ReactElement => {
  const [quiz, setQuiz] = useState<InsertQuizData[]>([]);
  const [inputValue, setInputValue] = useState<InsertQuizData>({
    question: '',
    answer: '',
    prefix: '',
    suffix: '',
  });
  const { question, prefix, suffix, answer } = inputValue;
  const mutate = useAddQuiz();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const resetState = () => {
    setInputValue({ question: '', answer: '', suffix: '', prefix: '' });
    setQuiz([]);
  };
  const onClickAddQuiz = () => {
    quiz.push(inputValue);
    setInputValue({ question: '', answer: '', suffix: '', prefix: '' });
  };

  const save = () => {
    mutate(quiz);
    resetState();
  };

  const validationCheck = () => {};

  return (
    <S.QuizPostFormContainer>
      <CardUi label={'퀴즈 등록 폼'} className={'quiz_form_card'}>
        <form>
          <div className={'form_header'}>
            <legend>
              <Typography $variant={'h1'} $weight={'bold'} $color={'textDefault'}>
                몰랑 퀴즈를 등록합니다.
              </Typography>
            </legend>
            <Button variant={'icon'} type={'button'} onClick={onClickAddQuiz}>
              <FaPlus size={16} color={'var(--bg_default)'} />
              <Typography as={'span'} $variant={'caption'} $color={'textDefault'} $weight={'medium'}>
                퀴즈 등록
              </Typography>
            </Button>
          </div>
          <div>
            <label>
              <Typography
                $variant={'body1'}
                $weight={'bold'}
                $color={'textDefault'}
              >
                어떤 퀴즈든 좋습니다. 몰랑에 제공될 퀴즈를 입력해 주세요.
              </Typography>
              <S.InputLayer
                type={'text'}
                name={'question'}
                value={question}
                placeholder={'질문'}
                onChange={onChangeInput}
              />
            </label>
          </div>
          <S.QuizFormSubBox>
            <div className={'quiz_answer_title_box'}>
              <Typography
                $variant={'body1'}
                $weight={'bold'}
                $color={'textDefault'}
              >
                퀴즈의 정답을 입력해 주세요.
              </Typography>
              <Typography
                $variant={'body2'}
                $weight={'medium'}
                $color={'textDefault'}
              >
                몰랑에서 사용되는 정답은 3 가지로 구분되어있습니다. 띄어쓰기를
                기준으로 정답을 구분해주세요.
              </Typography>
            </div>

            <label>
              <Typography>앞자리 정답</Typography>
              <S.InputLayer
                type={'text'}
                name={'prefix'}
                value={prefix}
                onChange={onChangeInput}
              />
            </label>

            <label>
              <Typography>중간자리 정답</Typography>
              <S.InputLayer
                type={'text'}
                name={'answer'}
                value={answer}
                onChange={onChangeInput}
              />
            </label>

            <label>
              <Typography>뒷자리 정답</Typography>
              <S.InputLayer
                type={'text'}
                name={'suffix'}
                value={suffix}
                onChange={onChangeInput}
              />
            </label>
          </S.QuizFormSubBox>
        </form>
      </CardUi>
      <CardUi label={'등록된 퀴즈'}>
        <div>
          <Typography $variant={'body1'} $weight={'medium'} $color={'textDefault'}>
            등록한 퀴즈 목록이 보여집니다.
          </Typography>
          <Typography
            $variant={'body2'}
            $weight={'medium'}
            $color={'textDefault'}
          >
            퀴즈를 등록한 후 저장을 해야 몰랑에 등록 됩니다. 꼭 저장을 해주세요.
          </Typography>
          {quiz.map((value, index) => {
            return (
              <S.InsertQuizContainer key={`${value.answer}-${index}`}>
                <S.InsertQuizBox>
                  <div>
                    <Typography>질문</Typography>
                    <Typography className={'question'} $color={'textDefault'} $variant={'body1'}>
                      {value.question}
                    </Typography>
                  </div>

                  <div className={'answer-box'}>
                    <div>
                      <Typography $color={'textDefault'} $variant={'body1'}>앞 글자</Typography>
                      <div className={'answer'}>{value.prefix}</div>
                    </div>
                    <div>
                      <Typography $color={'textDefault'} $variant={'body1'}>중간 글자</Typography>
                      <div className={'answer'}>{value.answer}</div>
                    </div>
                    <div>
                      <Typography $color={'textDefault'} $variant={'body1'}>마지막 글자</Typography>
                      <div className={'answer'}>{value.suffix}</div>
                    </div>
                  </div>
                </S.InsertQuizBox>
              </S.InsertQuizContainer>
            );
          })}

          <Button className={'save_button'} type={'button'} onClick={save} disabled={quiz.length === 0}>
            <AiFillSave size={24} color={'#fff'} />
            <Typography as={'span'} $color={'textWhite'} $weight={'bold'}>
              퀴즈 저장
            </Typography>
          </Button>
        </div>
      </CardUi>
    </S.QuizPostFormContainer>
  );
};
