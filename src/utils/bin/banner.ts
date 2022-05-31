import config from '../../../config.json';

export function banner(): Promise<string> {
  const header: string = window.innerWidth <= 768 ?
    'Welcome to my website! Please be aware that the full terminal experience works better on a computer, so you should check it out there!'
    :
    `
  █████╗  █████╗  ██████╗  ██████╗ ███╗   ██╗    ██╗  ██╗██╗   ██╗     ██████╗ ██╗███████╗███████╗███████╗███╗   ██╗██████╗  █████╗  ██████╗██╗  ██╗
  ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║    ██║ ██╔╝╚██╗ ██╔╝     ██╔══██╗██║██╔════╝██╔════╝██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
  ███████║███████║██████╔╝██║   ██║██╔██╗ ██║    █████╔╝  ╚████╔╝█████╗██████╔╝██║█████╗  ███████╗█████╗  ██╔██╗ ██║██████╔╝███████║██║     ███████║
  ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ██╔═██╗   ╚██╔╝ ╚════╝██╔══██╗██║██╔══╝  ╚════██║██╔══╝  ██║╚██╗██║██╔══██╗██╔══██║██║     ██╔══██║
  ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ██║  ██╗   ██║        ██║  ██║██║███████╗███████║███████╗██║ ╚████║██████╔╝██║  ██║╚██████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝   ╚═╝        ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝`;

  return Promise.resolve(`
    ${header}
    
    Type 'help' to see the list of available commands.
    Type 'summary' to display summary.
    Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
    `);
};