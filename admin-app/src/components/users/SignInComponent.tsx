import { Button } from '@components/common/Button';
import { Input } from '@components/common/Input';
import { Typography } from '@components/common/Typography';
import { validationCheck } from '@utils/utility';
import { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CheckboxHeadless from '@components/ui/headless/Checkbox_T';
import { useAuth } from '@providers/authProvider';
import toast from '@components/common/toast/ToastHandler';
import { AxiosError } from 'axios';
import { VALIDATION_MESSAGE } from '../../common/validationMessage';
import {RequestSignIn} from "@interfaces/response.user";

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 70vw;
  max-width: 500px;
  height: auto;
  min-height: 400px;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 2em;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.div`
  input:nth-child(1) {
    margin-bottom: 1em;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;

  & button {
    width: 100%;
  }
`;

export const SignInComponent = (): ReactElement => {
  const [login, setLogin] = useState<RequestSignIn>({ account: '', password: '' });
  const { account, password } = login;
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const check = validation();
      if (check) {
        //todo base64 encoding
        // const payload = {
        //   id: rsaEncrypt(id),
        //   password: rsaEncrypt(password),
        // };
        await signIn(login);
        await navigate('/');
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError) toast.message(e.message, 'error');
    }
  };

  const validation = (): boolean | undefined => {
    let result = false;

    if (account.length === 0) {
      toast.message(VALIDATION_MESSAGE.EMPTY_ID_INPUT, 'error');
      return;
    }

    if (password.length === 0) {
      toast.message(VALIDATION_MESSAGE.EMPTY_PASSWORD_INPUT, 'error');
      return;
    } else if (!validationCheck(password, 'password')) {
      toast.message(VALIDATION_MESSAGE.DOES_NOT_MATCH_PASSWORD_FORMAT, 'error');
      return;
    }
    result = true;
    return result;
  };

  return (
    <SignInForm onSubmit={onSubmitHandler}>
      <p>데브위키 어드민</p>
      <InputContainer>
        <Input
          value={account}
          name="account"
          placeholder="ID"
          type="text"
          onChange={onChangeInput}
        />
        <Input
          value={password}
          name="password"
          placeholder="PASSWORD"
          type="password"
          autoComplete="true"
          onChange={onChangeInput}
        />
      </InputContainer>

      <CheckboxHeadless>
        {({ isChecked, onChange }) => {
          return (
            <label>
              <input
                type={'checkbox'}
                checked={isChecked}
                onChange={onChange}
              />
              <span>자동 로그인</span>
            </label>
          );
        }}
      </CheckboxHeadless>

      <ButtonWrapper>
        <Button type="submit">
          <Typography $weight="medium" $color="textWhite" as="span">
            로그인
          </Typography>
        </Button>
      </ButtonWrapper>
    </SignInForm>
  );
};
