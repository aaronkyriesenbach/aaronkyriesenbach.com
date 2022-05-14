import config from '../../../config.json';
import * as bin from './index';

// Help
export const help = (): Promise<string> => {
  const commands = Object.keys(bin).sort();
  var commandString = '';
  for (let i = 1; i <= commands.length; i++) {
    commandString += commands[i - 1] + (i % 7 === 0 ? '\n' : ' ');
  }
  return Promise.resolve(`Welcome! Here are all the available commands:
\n${commandString}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.`);
};

// Redirection
export const repo = (): Promise<string> => {
  window.open(`${config.repo}`);

  return Promise.resolve('Opening Github repository...');
};

// About
export const about = (): Promise<string> => {
  return Promise.resolve(`Hey, I'm ${config.name.split(' ')[0]}! I'm a student at Northeastern University studying Computer Engineering and Music Technology.
I'm a coxswain on the varsity rowing team, and in my free time I enjoy playing the violin, reading (try running 'books'!), listening to music,
brewing coffee, and playing chess.

(run 'help' to see all commands)`);
};

export const resume = (): Promise<string> => {
  window.open(`${config.resume_url}`);

  return Promise.resolve('Opening resume...');
};

export const books = (): Promise<string> => {
  return Promise.resolve(`Last read: ${config.books.last}
Currently reading: ${config.books.current}`);
};

// Contact
export const email = (): Promise<string> => {
  window.open(`mailto:${config.email}`);

  return Promise.resolve(`Opening mailto:${config.email}...`);
};

export const github = (): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return Promise.resolve('Opening GitHub...');
};

export const linkedin = (): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return Promise.resolve('Opening LinkedIn...');
};

// Typical linux commands
export const echo = (args: string[]): Promise<string> => {
  return Promise.resolve(args.join(' '));
};

export const whoami = (): Promise<string> => {
  return Promise.resolve(`${config.ps1_username}`);
};

export const date = (): Promise<string> => {
  return Promise.resolve(new Date().toString());
};

export const vi = (): Promise<string> => {
  return Promise.resolve(`Woah, you still use vi? At least use vim, geez.`);
};

export const vim = (): Promise<string> => {
  return Promise.resolve(`Vim is so outdated. Nvim is the future!`);
};

export const nvim = (): Promise<string> => {
  return Promise.resolve(`Nvim is too fancy. Why not use emacs?`);
};

export const emacs = (): Promise<string> => {
  return Promise.resolve(`This seems pretty complicated...maybe you should try vi?`);
};

export const sudo = (): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return Promise.resolve(`Permission denied: with little power comes... no responsibility? `);
};

export const summary = (): Promise<string> => {
  return Promise.resolve(`
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

`);
};