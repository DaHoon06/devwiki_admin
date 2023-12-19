import React, { useState } from 'react';
import { Input } from '@components/ui/headless/Input';

export const useLoginInput = () => {
  const [input, setInput] = useState('');
  const isValid = input.length > 8;

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  return { input, isValid, handleChangeInput };
};

export const LoginInput = () => {
  const { input, isValid, handleChangeInput } = useLoginInput();

  return (
    <>
      <Input input={input} onChange={handleChangeInput} type={'text'} />
      {isValid && <div>롸</div>}
    </>
  );
};
