/** Convert space delimited string to lowercase kebab-case */
export function fmtTitle(str: string): string {
  return str.split(' ').join('-').toLowerCase();
}

/** Format an ISO date string into a readable date */
export function fmtDate(isoStr?: string): string | undefined {
  if (!isoStr) {
    return;
  }
  return new Date(isoStr).toLocaleDateString('en-US');
}

export function fmtArchiveLinkText(
  title: string,
  date: string,
): string | undefined {
  const formattedDate = fmtDate(date);
  if (formattedDate) {
    return `${title} ${formattedDate}`;
  }
  return;
}
