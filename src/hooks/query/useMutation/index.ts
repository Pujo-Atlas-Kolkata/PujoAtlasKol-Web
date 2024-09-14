import { useStore } from '@nanostores/react';
import { queryClient } from '@/stores/query';
import { useMutation as useTanstackMutation, type DefaultError } from '@tanstack/react-query';

type UseMutationConfig<TData, TError, TVariables, TContext> = Parameters<
  typeof useTanstackMutation<TData, TError, TVariables, TContext>
>[0];

export const useMutation = <
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  config: UseMutationConfig<TData, TError, TVariables, TContext>,
) => {
  const client = useStore(queryClient);
  return useTanstackMutation<TData, TError, TVariables, TContext>(config, client);
};
