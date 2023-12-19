import { SignInComponent } from '@components/users/SignInComponent';
import { ReactElement } from 'react';
import * as S from './SignInPage.style';

export const SigninPage = (): ReactElement => {
  return (
    <S.SigninPageContainer>
      <S.SignInBody>
        <SignInComponent />
      </S.SignInBody>
    </S.SigninPageContainer>
  );
};
