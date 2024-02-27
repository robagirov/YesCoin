import Axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'

export const AXIOS_INSTANCE = Axios.create({
  baseURL: 'https://yestoken.space',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const axiosInstance = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source()

  const promise = AXIOS_INSTANCE({
    ...config,
    ...options,
    cancelToken: source.token,
  }).then(({ data }: AxiosResponse<T>) => data)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  promise.cancel = () => {
    source.cancel('Query was cancelled')
  }

  return promise
}
