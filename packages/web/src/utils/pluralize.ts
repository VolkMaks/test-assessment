export const pluralize = (
  count: number,
  word: string,
  prepend: boolean = false
) => {
  const prefix = prepend ? `${count} ` : "";

  if (count === 1) {
    return `${prefix}${word}`;
  } else {
    return `${prefix}${word}s`;
  }
};
