import React, { ComponentProps, ReactElement } from 'react';
import styled from 'styled-components';
import * as Style from './style';

interface TypographyProps extends ComponentProps<'p'> {
  $variant?: Style.Variant;
  $weight?: Style.FontWeightType;
  $color?: Style.FontColorType;
  as?: keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>;
}

const element: { [key in Style.Variant]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  body1: 'p',
  body2: 'p',
  caption: 'p',
};

const StyledComponent = (element: any) => styled(element)<TypographyProps>`
  line-height: 1.25rem;
  transition: color 0.2s ease-in;
  color: ${(props) => Style.FontColor[props.$color || 'textDefault']};
  font-size: ${(props) => Style.FontSize(props.$variant || 'body1')}px;
  font-weight: ${(props) => Style.FontWeight(props.$weight || 'medium')};
`;

function baseElement(props: TypographyProps) {
  const { className, $variant = 'body1', children, as, ...rest } = props;
  return React.createElement(
    as || element[$variant],
    {
      className,
      ...rest,
    },
    children
  );
}

const styledElement = StyledComponent(baseElement);

export const Typography = (props: TypographyProps): ReactElement => {
  return React.createElement(styledElement, props);
};
