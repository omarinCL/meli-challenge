import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export default class HttpClient {
  protected readonly client: AxiosInstance;

  constructor(apiConfig: AxiosRequestConfig) {
    this.client = Axios.create({ ...apiConfig, timeout: 5000 });
    this.client.defaults.headers.common['Content-Type'] = 'application/json';
    this.initResponseInterceptor();
  }

  private initResponseInterceptor = () => {
    this.client.interceptors.request.use((config) => config, this.errorHandler);
    this.client.interceptors.response.use((response) => response, this.errorHandler);
  };

  private errorHandler = (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  };
}
