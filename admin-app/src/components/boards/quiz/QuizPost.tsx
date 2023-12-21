import React, { ReactElement, useState } from 'react';
import { InsertQuizData } from '@interfaces/Quiz';
import { Typography } from '@components/common/Typography';
import { CardUi } from '@components/ui/card/Card';
import { useAddQuiz } from '@services/mutation/useQuizMutation';
import * as S from './QuizPost.style';
import { FaPlus } from 'react-icons/fa';
import { Button } from '@components/common/Button';
import { AiFillSave } from 'react-icons/ai';
import { InputLayer } from './QuizPost.style';

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
    <CardUi label={'퀴즈 등록 폼'}>
      <form>
        <legend>
          <Typography $variant={'h1'} $weight={'bold'} $color={'textPrimary'}>
            몰랑 퀴즈를 등록합니다.
          </Typography>
        </legend>
        <div>
          <label>
            <Typography
              $variant={'body1'}
              $weight={'bold'}
              $color={'textPrimary'}
            >
              어떤 퀴즈이든 좋습니다. 몰랑에서 제공될 퀴즈를 입력해 주세요.
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
        <div>
          <Typography
            $variant={'body1'}
            $weight={'bold'}
            $color={'textPrimary'}
          >
            퀴즈의 정답을 입력해 주세요.
          </Typography>
          <Typography
            $variant={'body2'}
            $weight={'medium'}
            $color={'textPrimary'}
          >
            몰랑에서 사용되는 정답은 3 가지로 구분되어있습니다. 띄어쓰기를
            기준으로 정답을 구분해주세요.
          </Typography>
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
        </div>
      </form>
      <div>
        <Button variant={'icon'} type={'button'} onClick={onClickAddQuiz}>
          <FaPlus size={16} color={'#222'} />
          <Typography as={'span'} $color={'textBlack200'} $weight={'bold'}>
            퀴즈 추가
          </Typography>
        </Button>
      </div>
      <div>
        <Typography $variant={'h2'} $weight={'bold'} $color={'textPrimary'}>
          퀴즈 등록 리스트
        </Typography>
        <Typography
          $variant={'body2'}
          $weight={'medium'}
          $color={'textPrimary'}
        >
          퀴즈를 등록한 후 저장을 해야 몰랑에 등록 됩니다. 꼭 저장을 해주세요.
        </Typography>
        {quiz.map((value, index) => {
          return (
            <S.InsertQuizContainer key={`${value.answer}-${index}`}>
              <S.InsertQuizBox>
                <div>
                  <Typography>질문</Typography>
                  <Typography className={'question'}>
                    {value.question}
                  </Typography>
                </div>

                <div className={'answer-box'}>
                  <Typography
                    $variant={'body1'}
                    $weight={'bold'}
                    $color={'textPrimary'}
                  >
                    정답
                  </Typography>
                  <div>
                    <Typography>앞 글자</Typography>
                    <div className={'answer'}>{value.prefix}</div>
                  </div>
                  <div>
                    <Typography>중간 글자</Typography>
                    <div className={'answer'}>{value.answer}</div>
                  </div>
                  <div>
                    <Typography>마지막 글자</Typography>
                    <div className={'answer'}>{value.suffix}</div>
                  </div>
                </div>
              </S.InsertQuizBox>
            </S.InsertQuizContainer>
          );
        })}

        <Button type={'button'} onClick={save}>
          <AiFillSave size={24} color={'#fff'} />
          <Typography as={'span'} $color={'textWhite'} $weight={'bold'}>
            퀴즈 저장
          </Typography>
        </Button>
      </div>
    </CardUi>
  );
};
