import * as bin from './index';

export const help = (): Promise<string> => {
    const commands = Object.keys(bin).sort();

    var commandString = '';
    for (let i = 1; i <= commands.length; i++) {
        commandString += commands[i - 1] + (i % 7 === 0 ? '\n' : ' ');
    }

    return Promise.resolve(`Welcome! Here are all the available commands:
\n${commandString}

Type 'summary' to display summary.`);
};