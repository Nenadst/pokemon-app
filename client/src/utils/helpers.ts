export function getAvatarLetters(fullName: string | undefined): string {
  if (!fullName) return '';

  const words = fullName.split(' ');

  if (words.length === 1) return words[0].charAt(0);

  const firstWord = words[0];
  const lastWord = words[words.length - 1];

  return firstWord.charAt(0) + lastWord.charAt(0);
}

export const redirectToNewPage = (url: string): void => {
  window.open(url, '_blank');
};

export const removeMenuItemWhiteSpace = (e: string) => {
  if (e === 'Home') e = '/';
  return e.replace(/ +?/g, '-').toLowerCase();
};
