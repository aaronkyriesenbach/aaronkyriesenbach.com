import { getProjects } from '../api';

export const projects = (): Promise<string> => {
  return getProjects().then(resp => resp.data)
    .then(data => data.map(repo =>
      `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`,
    ).join('\n'));
};