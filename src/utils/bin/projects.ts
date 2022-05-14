import axios, { AxiosResponse } from 'axios';
import config from '../../../config.json';

type Repo = {
  name: string,
  html_url: string
}

const getProjects = (): Promise<AxiosResponse<Repo[]>> => {
  return axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
};


export const projects = (): Promise<string> => {
  return getProjects().then(resp => resp.data)
    .then(data => data.map(repo =>
      `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    ).join('\n'));
};