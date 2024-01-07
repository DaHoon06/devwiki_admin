import { PropsWithChildren } from 'react';
import * as S from './style';
import { Typography } from '@components/common/Typography';

interface Props {
  label: string;
  height?: number;
  className?: string;
}

export const CardUi = ({
  label,
  height,
  children,
  className
}: PropsWithChildren<Props>) => {
  return (
    <S.CardLayout className={className}>
      <S.CardLabel>
        <Typography $color="textPrimary" $weight="bold">
          {label}
        </Typography>
      </S.CardLabel>
      <S.CardBody height={height}>{children}</S.CardBody>
    </S.CardLayout>
  );
};
