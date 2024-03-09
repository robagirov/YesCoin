/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * YesCoin-API
 * OpenAPI spec version: 0.1.0
 */
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
} from '@tanstack/react-query'
import type {
  GetPagePagesGameGet200,
  HTTPValidationError,
  LeagueCreate,
  LeagueRead,
  SquadRead,
  TapParams,
  UserRead,
  UserTap,
} from './model'
import { axiosInstance } from '../api/axiosInstance'

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * @summary Get Users
 */
export const getUsers = (options?: SecondParameter<typeof axiosInstance>, signal?: AbortSignal) => {
  return axiosInstance<UserRead[]>(
    { url: `https://yestoken.space/users`, method: 'GET', signal },
    options,
  )
}

export const getGetUsersQueryKey = () => {
  return [`https://yestoken.space/users`] as const
}

export const getGetUsersQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsers>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUsersQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) =>
    getUsers(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getUsers>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersQueryError = unknown

/**
 * @summary Get Users
 */
export const useGetUsers = <
  TData = Awaited<ReturnType<typeof getUsers>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetUsersSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsers>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUsersQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) =>
    getUsers(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getUsers>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetUsersSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersSuspenseQueryError = unknown

/**
 * @summary Get Users
 */
export const useGetUsersSuspense = <
  TData = Awaited<ReturnType<typeof getUsers>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get User
 */
export const getUser = (
  userId: number,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal,
) => {
  return axiosInstance<UserRead>(
    { url: `https://yestoken.space/users/${userId}`, method: 'GET', signal },
    options,
  )
}

export const getGetUserQueryKey = (userId: number) => {
  return [`https://yestoken.space/users/${userId}`] as const
}

export const getGetUserQueryOptions = <
  TData = Awaited<ReturnType<typeof getUser>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUserQueryKey(userId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUser>>> = ({ signal }) =>
    getUser(userId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!userId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getUser>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>
export type GetUserQueryError = HTTPValidationError

/**
 * @summary Get User
 */
export const useGetUser = <
  TData = Awaited<ReturnType<typeof getUser>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUserQueryOptions(userId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetUserSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getUser>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUserQueryKey(userId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUser>>> = ({ signal }) =>
    getUser(userId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!userId, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getUser>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetUserSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>
export type GetUserSuspenseQueryError = HTTPValidationError

/**
 * @summary Get User
 */
export const useGetUserSuspense = <
  TData = Awaited<ReturnType<typeof getUser>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUserSuspenseQueryOptions(userId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Friends
 */
export const getFriends = (
  userId: number,
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal,
) => {
  return axiosInstance<UserRead[]>(
    { url: `https://yestoken.space/users/${userId}/get_friends`, method: 'GET', signal },
    options,
  )
}

export const getGetFriendsQueryKey = (userId: number) => {
  return [`https://yestoken.space/users/${userId}/get_friends`] as const
}

export const getGetFriendsQueryOptions = <
  TData = Awaited<ReturnType<typeof getFriends>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFriends>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFriendsQueryKey(userId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFriends>>> = ({ signal }) =>
    getFriends(userId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!userId, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getFriends>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetFriendsQueryResult = NonNullable<Awaited<ReturnType<typeof getFriends>>>
export type GetFriendsQueryError = HTTPValidationError

/**
 * @summary Get Friends
 */
export const useGetFriends = <
  TData = Awaited<ReturnType<typeof getFriends>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getFriends>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetFriendsQueryOptions(userId, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetFriendsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getFriends>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFriends>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetFriendsQueryKey(userId)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getFriends>>> = ({ signal }) =>
    getFriends(userId, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!userId, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getFriends>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetFriendsSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getFriends>>>
export type GetFriendsSuspenseQueryError = HTTPValidationError

/**
 * @summary Get Friends
 */
export const useGetFriendsSuspense = <
  TData = Awaited<ReturnType<typeof getFriends>>,
  TError = HTTPValidationError,
>(
  userId: number,
  options?: {
    query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getFriends>>, TError, TData>>
    request?: SecondParameter<typeof axiosInstance>
  },
): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetFriendsSuspenseQueryOptions(userId, options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Tap
 */
export const tap = (params: TapParams, options?: SecondParameter<typeof axiosInstance>) => {
  return axiosInstance<UserTap>(
    { url: `https://yestoken.space/users/tap`, method: 'PUT', params },
    options,
  )
}

export const getTapMutationOptions = <TError = HTTPValidationError, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof tap>>,
    TError,
    { params: TapParams },
    TContext
  >
  request?: SecondParameter<typeof axiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof tap>>,
  TError,
  { params: TapParams },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<Awaited<ReturnType<typeof tap>>, { params: TapParams }> = (
    props,
  ) => {
    const { params } = props ?? {}

    return tap(params, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type TapMutationResult = NonNullable<Awaited<ReturnType<typeof tap>>>

export type TapMutationError = HTTPValidationError

/**
 * @summary Tap
 */
export const useTap = <TError = HTTPValidationError, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof tap>>,
    TError,
    { params: TapParams },
    TContext
  >
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const mutationOptions = getTapMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Get Squads
 */
export const getSquads = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal,
) => {
  return axiosInstance<SquadRead[]>(
    { url: `https://yestoken.space/squads`, method: 'GET', signal },
    options,
  )
}

export const getGetSquadsQueryKey = () => {
  return [`https://yestoken.space/squads`] as const
}

export const getGetSquadsQueryOptions = <
  TData = Awaited<ReturnType<typeof getSquads>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetSquadsQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getSquads>>> = ({ signal }) =>
    getSquads(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getSquads>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetSquadsQueryResult = NonNullable<Awaited<ReturnType<typeof getSquads>>>
export type GetSquadsQueryError = unknown

/**
 * @summary Get Squads
 */
export const useGetSquads = <
  TData = Awaited<ReturnType<typeof getSquads>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetSquadsQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetSquadsSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getSquads>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetSquadsQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getSquads>>> = ({ signal }) =>
    getSquads(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getSquads>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetSquadsSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getSquads>>>
export type GetSquadsSuspenseQueryError = unknown

/**
 * @summary Get Squads
 */
export const useGetSquadsSuspense = <
  TData = Awaited<ReturnType<typeof getSquads>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetSquadsSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get Leagues
 */
export const getLeagues = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal,
) => {
  return axiosInstance<LeagueRead[]>(
    { url: `https://yestoken.space/leagues`, method: 'GET', signal },
    options,
  )
}

export const getGetLeaguesQueryKey = () => {
  return [`https://yestoken.space/leagues`] as const
}

export const getGetLeaguesQueryOptions = <
  TData = Awaited<ReturnType<typeof getLeagues>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetLeaguesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLeagues>>> = ({ signal }) =>
    getLeagues(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getLeagues>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetLeaguesQueryResult = NonNullable<Awaited<ReturnType<typeof getLeagues>>>
export type GetLeaguesQueryError = unknown

/**
 * @summary Get Leagues
 */
export const useGetLeagues = <
  TData = Awaited<ReturnType<typeof getLeagues>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetLeaguesQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetLeaguesSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getLeagues>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetLeaguesQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getLeagues>>> = ({ signal }) =>
    getLeagues(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getLeagues>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetLeaguesSuspenseQueryResult = NonNullable<Awaited<ReturnType<typeof getLeagues>>>
export type GetLeaguesSuspenseQueryError = unknown

/**
 * @summary Get Leagues
 */
export const useGetLeaguesSuspense = <
  TData = Awaited<ReturnType<typeof getLeagues>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseSuspenseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetLeaguesSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Add League
 */
export const addLeague = (
  leagueCreate: LeagueCreate,
  options?: SecondParameter<typeof axiosInstance>,
) => {
  return axiosInstance<LeagueCreate>(
    {
      url: `https://yestoken.space/leagues`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: leagueCreate,
    },
    options,
  )
}

export const getAddLeagueMutationOptions = <
  TError = HTTPValidationError,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addLeague>>,
    TError,
    { data: LeagueCreate },
    TContext
  >
  request?: SecondParameter<typeof axiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof addLeague>>,
  TError,
  { data: LeagueCreate },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof addLeague>>,
    { data: LeagueCreate }
  > = (props) => {
    const { data } = props ?? {}

    return addLeague(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type AddLeagueMutationResult = NonNullable<Awaited<ReturnType<typeof addLeague>>>
export type AddLeagueMutationBody = LeagueCreate
export type AddLeagueMutationError = HTTPValidationError

/**
 * @summary Add League
 */
export const useAddLeague = <TError = HTTPValidationError, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof addLeague>>,
    TError,
    { data: LeagueCreate },
    TContext
  >
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const mutationOptions = getAddLeagueMutationOptions(options)

  return useMutation(mutationOptions)
}

/**
 * @summary Get Page
 */
export const getPagePagesGameGet = (
  options?: SecondParameter<typeof axiosInstance>,
  signal?: AbortSignal,
) => {
  return axiosInstance<GetPagePagesGameGet200>(
    { url: `https://yestoken.space/pages/game`, method: 'GET', signal },
    options,
  )
}

export const getGetPagePagesGameGetQueryKey = () => {
  return [`https://yestoken.space/pages/game`] as const
}

export const getGetPagePagesGameGetQueryOptions = <
  TData = Awaited<ReturnType<typeof getPagePagesGameGet>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPagePagesGameGet>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPagePagesGameGetQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPagePagesGameGet>>> = ({ signal }) =>
    getPagePagesGameGet(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof getPagePagesGameGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPagePagesGameGetQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPagePagesGameGet>>
>
export type GetPagePagesGameGetQueryError = unknown

/**
 * @summary Get Page
 */
export const useGetPagePagesGameGet = <
  TData = Awaited<ReturnType<typeof getPagePagesGameGet>>,
  TError = unknown,
>(options?: {
  query?: Partial<UseQueryOptions<Awaited<ReturnType<typeof getPagePagesGameGet>>, TError, TData>>
  request?: SecondParameter<typeof axiosInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPagePagesGameGetQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey }

  query.queryKey = queryOptions.queryKey

  return query
}

export const getGetPagePagesGameGetSuspenseQueryOptions = <
  TData = Awaited<ReturnType<typeof getPagePagesGameGet>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<Awaited<ReturnType<typeof getPagePagesGameGet>>, TError, TData>
  >
  request?: SecondParameter<typeof axiosInstance>
}) => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetPagePagesGameGetQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getPagePagesGameGet>>> = ({ signal }) =>
    getPagePagesGameGet(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions } as UseSuspenseQueryOptions<
    Awaited<ReturnType<typeof getPagePagesGameGet>>,
    TError,
    TData
  > & { queryKey: QueryKey }
}

export type GetPagePagesGameGetSuspenseQueryResult = NonNullable<
  Awaited<ReturnType<typeof getPagePagesGameGet>>
>
export type GetPagePagesGameGetSuspenseQueryError = unknown

/**
 * @summary Get Page
 */
export const useGetPagePagesGameGetSuspense = <
  TData = Awaited<ReturnType<typeof getPagePagesGameGet>>,
  TError = unknown,
>(options?: {
  query?: Partial<
    UseSuspenseQueryOptions<Awaited<ReturnType<typeof getPagePagesGameGet>>, TError, TData>
  >
  request?: SecondParameter<typeof axiosInstance>
}): UseSuspenseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetPagePagesGameGetSuspenseQueryOptions(options)

  const query = useSuspenseQuery(queryOptions) as UseSuspenseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

export * from './index'
