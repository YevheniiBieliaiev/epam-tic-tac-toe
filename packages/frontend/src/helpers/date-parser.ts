import { enLocal } from '@locals';

type Locals = 'en';

export function getRelativeTimeString(date: Date, local: Locals) {
  const timeMs = new Date(date).getTime();
  const diffTime = Math.round((timeMs - Date.now()) / 1000);

  const period = [
    60,
    3600,
    86400,
    86400 * 7,
    86400 * 30,
    86400 * 365,
    Infinity,
  ];

  const unit: Intl.RelativeTimeFormatUnit[] = [
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
  ];

  const unitIndex = period.findIndex((it) => it > Math.abs(diffTime));

  const divisor = unitIndex ? period[unitIndex - 1] : 1;

  const rtf = new Intl.RelativeTimeFormat(local, {
    numeric: 'auto',
  });

  return `${enLocal.profile.password.defaultText.passwordUpdDate} ${rtf.format(
    Math.floor(diffTime / divisor),
    unit[unitIndex],
  )}`;
}
