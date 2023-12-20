export const QueryKeys = {
  Mutation: {
    SignIn: 'MUTATION_SIGN_IN_KEY',
    Quiz: {
      InsertMany: 'INSERT_MANY_QUIZ_KEY'
    }
  },
  appointments: 'CALENDAR-KEY',
  useQuery: {
    Quiz: {
      Lists: 'QUIZ_LISTS_KEY'
    },
  },
} as const;
