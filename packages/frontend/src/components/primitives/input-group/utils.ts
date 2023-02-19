import type { ConcatToken } from './types';

export const concatToken = ({
  code,
  setValue,
  clearErrors,
  keyValue,
  size,
}: ConcatToken): void => {
  const keys = Object.keys(code);

  let tokenEmail = '';

  keys.sort().forEach((it) => {
    tokenEmail += code[it];
  });

  setValue(keyValue, tokenEmail);

  if (tokenEmail.length === size) {
    clearErrors(keyValue);
  }
};

export const nextFocus = (elements: NodeListOf<HTMLInputElement>): void => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i]?.value && i < elements.length - 1) {
      elements[i + 1].focus();
    }

    const emptyIdx = Array.from(elements).findIndex(
      (elem: HTMLInputElement) => !elem.value.trim().length,
    );

    if (emptyIdx > -1) {
      elements[emptyIdx].focus();
    }
  }
};
