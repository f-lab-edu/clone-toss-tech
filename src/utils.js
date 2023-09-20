import { format, parseISO } from 'date-fns';

export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const formatDate = inputDate => format(parseISO(inputDate), 'yyyy.MM.dd');
