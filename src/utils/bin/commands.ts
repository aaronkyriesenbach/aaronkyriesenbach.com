import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = (): string => {
  const commands = Object.keys(bin).sort();
  var commandString = '';
  for (let i = 1; i <= commands.length; i++) {
    commandString += commands[i - 1] + (i % 7 === 0 ? '\n' : ' ');
  }
  return `Welcome! Here are all the available commands:
\n${commandString}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = (): string => {
  window.open(`${config.repo}`);

  return 'Opening Github repository...';
};

// About
export const about = (): string => {
  return `Hey, I'm ${config.name.split(' ')[0]}! I'm a student at Northeastern University studying Computer Engineering and Music Technology.
I'm a coxswain on the varsity rowing team, and in my free time I enjoy playing the violin, reading (try running 'books'!), listening to music,
brewing coffee, and playing chess.

(run 'help' to see all commands)`;
};

export const resume = (): string => {
  window.open(`${config.resume_url}`);

  return 'Opening resume...';
};

export const books = (): string => {
  return `Last read: ${config.books.last}
Currently reading: ${config.books.current}`;
};

// Contact
export const email = (): string => {
  window.open(`mailto:${config.email}`);

  return `Opening mailto:${config.email}...`;
};

export const github = (): string => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening GitHub...';
};

export const linkedin = (): string => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening LinkedIn...';
};

// Typical linux commands
export const echo = (args: string[]): string => {
  return args.join(' ');
};

export const whoami = (): string => {
  return `${config.ps1_username}`;
};

export const date = (): string => {
  return new Date().toString();
};

export const vi = (): string => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = (): string => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = (): string => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = (): string => {
  return `you know what? just use vscode.`;
};

export const sudo = (): string => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (): string => {
  return `
  █████╗  █████╗ ██████╗  ██████╗ ███╗   ██╗    ██╗  ██╗██╗   ██╗     ██████╗ ██╗███████╗███████╗███████╗███╗   ██╗██████╗  █████╗  ██████╗██╗  ██╗
  ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║    ██║ ██╔╝╚██╗ ██╔╝     ██╔══██╗██║██╔════╝██╔════╝██╔════╝████╗  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║
  ███████║███████║██████╔╝██║   ██║██╔██╗ ██║    █████╔╝  ╚████╔╝█████╗██████╔╝██║█████╗  ███████╗█████╗  ██╔██╗ ██║██████╔╝███████║██║     ███████║
  ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║    ██╔═██╗   ╚██╔╝ ╚════╝██╔══██╗██║██╔══╝  ╚════██║██╔══╝  ██║╚██╗██║██╔══██╗██╔══██║██║     ██╔══██║
  ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║    ██║  ██╗   ██║        ██║  ██║██║███████╗███████║███████╗██║ ╚████║██████╔╝██║  ██║╚██████╗██║  ██║
  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝   ╚═╝        ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝  

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const summary = (): string => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  summary
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT (run 'about' for more!)
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓   > K Y - R I E S E N B A C H   ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
};