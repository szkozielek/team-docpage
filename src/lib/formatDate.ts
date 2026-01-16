import { format as formatFn } from "date-fns-tz";
import { pl } from 'date-fns/locale/index.js';

export const formatDate = (
  date: Date | string,
  format: string = "d MMMM yyyy",
): string => {
  return formatFn(new Date(date), format, { locale: pl, });
};
