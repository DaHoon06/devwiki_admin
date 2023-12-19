import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import toast from '@components/common/toast/ToastHandler';

const queryErrorHandler = (error: unknown): void => {
  const message = error instanceof Error ? error.message : 'ERROR MESSAGE';
  toast.message(message);
};

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryErrorHandler,
  }), // custom
  mutationCache: new MutationCache({
    onError: queryErrorHandler,
  }), // custom
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
      useErrorBoundary: true,
      cacheTime: 60 * 60 * 1000 * 24,
    },
    mutations: {
      onError: queryErrorHandler,
      useErrorBoundary: true,
    },
  },
});
