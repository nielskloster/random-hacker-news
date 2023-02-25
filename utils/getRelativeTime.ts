const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

export const getRelativeTime = (timestamp: number) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto', });
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / MILLISECONDS_IN_A_DAY
  );

  return rtf.format(daysDifference, 'day');
}
