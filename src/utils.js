import { format, parseISO } from 'date-fns';

export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const formatDate = inputDate => format(parseISO(inputDate), 'yyyy.MM.dd');

export const makeErrorLogOnConsole = (error, params) => {
  if (import.meta.env.DEV) {
    const stackLines = new Error().stack.split('\n')[2];
    const fileName = stackLines.match(/(\w*:\/\/\w*:\d+)(.*)\?.*/)[2];
    const functionName = stackLines.match(/at (\S+)/)[1];
    console.error(`Error at ${fileName} function ${functionName}(${params ?? ''}) ${error}`);
  }
};
