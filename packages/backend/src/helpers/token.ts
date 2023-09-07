export function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function replaceChar(char: string): string {
  const random = getRandomIntInclusive(0, 9);
  const letterCode = getRandomIntInclusive(97, 122);

  return char === 'x' ? random.toString() : String.fromCodePoint(letterCode);
}

export function generateToken(): string {
  const digit = 'x';
  const letter = 'y';
  const length = 6;
  const min = 0;
  const max = 10;

  let tokenModel = '';

  for (let i = 0; i < length; i++) {
    const randomNumber = getRandomIntInclusive(min, max);
    randomNumber <= 2 || (randomNumber >= 5 && randomNumber <= 7)
      ? (tokenModel += digit)
      : (tokenModel += letter);
  }

  return tokenModel.replace(/[xy]/g, replaceChar);
}
