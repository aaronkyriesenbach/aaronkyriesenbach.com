import axios, { AxiosResponse } from 'axios';
import config from '../../config.json';

type Repo = {
  name: string,
  html_url: string
}

export const getProjects = (): Promise<AxiosResponse<Array<Repo>>> => {
  return axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
};
