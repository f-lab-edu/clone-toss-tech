import { format } from 'date-fns';

export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const formatDate = inputDate =>
  format(new Date(`${inputDate.substring(0, 4)}.${inputDate.substring(4, 6)}.${inputDate.substring(6, 8)}`), 'yyyy.MM.dd');
