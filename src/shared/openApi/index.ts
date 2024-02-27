/**
 * Generated by orval v6.25.0 🍺
 * Do not edit manually.
 * YesCoin-API
 * OpenAPI spec version: 0.1.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import type {
  HTTPValidationError,
  LeagueCreate,
  LeagueRead,
  SquadRead,
  TapParams,
  UserCreate,
  UserRead,
  UserTap,
  UserUpdate
} from './model'
import { axiosInstance } from '../api/axiosInstance';


type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];


/**
 * @summary Get Users
 */
export const getUsers = (
    
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<UserRead[]>(
      {url: `https://yestoken.space/users`, method: 'GET', signal
    },
      options);
    }
  

export const getGetUsersQueryKey = () => {
    return [`https://yestoken.space/users`] as const;
    }

    
export const getGetUsersQueryOptions = <TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsers>>> = ({ signal }) => getUsers(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUsersQueryResult = NonNullable<Awaited<ReturnType<typeof getUsers>>>
export type GetUsersQueryError = unknown

/**
 * @summary Get Users
 */
export const useGetUsers = <TData = Awaited<ReturnType<typeof getUsers>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsers>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Update User Info
 */
export const updateUserInfo = (
    userUpdate: UserUpdate,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<UserUpdate>(
      {url: `https://yestoken.space/users`, method: 'PUT',
      headers: {'Content-Type': 'application/json', },
      data: userUpdate
    },
      options);
    }
  


export const getUpdateUserInfoMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateUserInfo>>, TError,{data: UserUpdate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof updateUserInfo>>, TError,{data: UserUpdate}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof updateUserInfo>>, {data: UserUpdate}> = (props) => {
          const {data} = props ?? {};

          return  updateUserInfo(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type UpdateUserInfoMutationResult = NonNullable<Awaited<ReturnType<typeof updateUserInfo>>>
    export type UpdateUserInfoMutationBody = UserUpdate
    export type UpdateUserInfoMutationError = HTTPValidationError

    /**
 * @summary Update User Info
 */
export const useUpdateUserInfo = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof updateUserInfo>>, TError,{data: UserUpdate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getUpdateUserInfoMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Add User
 */
export const addUser = (
    userCreate: UserCreate,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<UserCreate>(
      {url: `https://yestoken.space/users`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: userCreate
    },
      options);
    }
  


export const getAddUserMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addUser>>, TError,{data: UserCreate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof addUser>>, TError,{data: UserCreate}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof addUser>>, {data: UserCreate}> = (props) => {
          const {data} = props ?? {};

          return  addUser(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type AddUserMutationResult = NonNullable<Awaited<ReturnType<typeof addUser>>>
    export type AddUserMutationBody = UserCreate
    export type AddUserMutationError = HTTPValidationError

    /**
 * @summary Add User
 */
export const useAddUser = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addUser>>, TError,{data: UserCreate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getAddUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Get User
 */
export const getUser = (
    userId: number,
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<UserRead>(
      {url: `https://yestoken.space/users/${userId}`, method: 'GET', signal
    },
      options);
    }
  

export const getGetUserQueryKey = (userId: number,) => {
    return [`https://yestoken.space/users/${userId}`] as const;
    }

    
export const getGetUserQueryOptions = <TData = Awaited<ReturnType<typeof getUser>>, TError = HTTPValidationError>(userId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUserQueryKey(userId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUser>>> = ({ signal }) => getUser(userId, requestOptions, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(userId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>
export type GetUserQueryError = HTTPValidationError

/**
 * @summary Get User
 */
export const useGetUser = <TData = Awaited<ReturnType<typeof getUser>>, TError = HTTPValidationError>(
 userId: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUserQueryOptions(userId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Tap
 */
export const tap = (
    params: TapParams,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<UserTap>(
      {url: `https://yestoken.space/users/tap`, method: 'PUT',
        params
    },
      options);
    }
  


export const getTapMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tap>>, TError,{params: TapParams}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof tap>>, TError,{params: TapParams}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof tap>>, {params: TapParams}> = (props) => {
          const {params} = props ?? {};

          return  tap(params,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type TapMutationResult = NonNullable<Awaited<ReturnType<typeof tap>>>
    
    export type TapMutationError = HTTPValidationError

    /**
 * @summary Tap
 */
export const useTap = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof tap>>, TError,{params: TapParams}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getTapMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
/**
 * @summary Get Squads
 */
export const getSquads = (
    
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<SquadRead[]>(
      {url: `https://yestoken.space/squads`, method: 'GET', signal
    },
      options);
    }
  

export const getGetSquadsQueryKey = () => {
    return [`https://yestoken.space/squads`] as const;
    }

    
export const getGetSquadsQueryOptions = <TData = Awaited<ReturnType<typeof getSquads>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetSquadsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getSquads>>> = ({ signal }) => getSquads(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData> & { queryKey: QueryKey }
}

export type GetSquadsQueryResult = NonNullable<Awaited<ReturnType<typeof getSquads>>>
export type GetSquadsQueryError = unknown

/**
 * @summary Get Squads
 */
export const useGetSquads = <TData = Awaited<ReturnType<typeof getSquads>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getSquads>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetSquadsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Get Leagues
 */
export const getLeagues = (
    
 options?: SecondParameter<typeof axiosInstance>,signal?: AbortSignal
) => {
      
      
      return axiosInstance<LeagueRead[]>(
      {url: `https://yestoken.space/leagues`, method: 'GET', signal
    },
      options);
    }
  

export const getGetLeaguesQueryKey = () => {
    return [`https://yestoken.space/leagues`] as const;
    }

    
export const getGetLeaguesQueryOptions = <TData = Awaited<ReturnType<typeof getLeagues>>, TError = unknown>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}
) => {

const {query: queryOptions, request: requestOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetLeaguesQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getLeagues>>> = ({ signal }) => getLeagues(requestOptions, signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData> & { queryKey: QueryKey }
}

export type GetLeaguesQueryResult = NonNullable<Awaited<ReturnType<typeof getLeagues>>>
export type GetLeaguesQueryError = unknown

/**
 * @summary Get Leagues
 */
export const useGetLeagues = <TData = Awaited<ReturnType<typeof getLeagues>>, TError = unknown>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getLeagues>>, TError, TData>>, request?: SecondParameter<typeof axiosInstance>}

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetLeaguesQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




/**
 * @summary Add League
 */
export const addLeague = (
    leagueCreate: LeagueCreate,
 options?: SecondParameter<typeof axiosInstance>,) => {
      
      
      return axiosInstance<LeagueCreate>(
      {url: `https://yestoken.space/leagues`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: leagueCreate
    },
      options);
    }
  


export const getAddLeagueMutationOptions = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addLeague>>, TError,{data: LeagueCreate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
): UseMutationOptions<Awaited<ReturnType<typeof addLeague>>, TError,{data: LeagueCreate}, TContext> => {
 const {mutation: mutationOptions, request: requestOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof addLeague>>, {data: LeagueCreate}> = (props) => {
          const {data} = props ?? {};

          return  addLeague(data,requestOptions)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type AddLeagueMutationResult = NonNullable<Awaited<ReturnType<typeof addLeague>>>
    export type AddLeagueMutationBody = LeagueCreate
    export type AddLeagueMutationError = HTTPValidationError

    /**
 * @summary Add League
 */
export const useAddLeague = <TError = HTTPValidationError,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof addLeague>>, TError,{data: LeagueCreate}, TContext>, request?: SecondParameter<typeof axiosInstance>}
) => {

      const mutationOptions = getAddLeagueMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export * from './index';
