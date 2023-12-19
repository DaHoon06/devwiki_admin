import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { ReactElement } from 'react';

export const Spinner = (): ReactElement => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  const display = isFetching || isMutating ? 'inherit' : 'none'; // isFetching 에 따라 보여주거나 숨기기

  return (
    <div>
      ...isLoading
      <div>spinner </div>
    </div>
  );
};
