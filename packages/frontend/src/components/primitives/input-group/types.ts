export interface InputsState {
  [key: string]: string;
}

type Options = Partial<{
  shouldValidate: boolean;
  shouldDirty: boolean;
  shouldTouch: boolean;
}>;

type SetValue = (name: string, value: string, options?: Options) => void;

type ClearErrors = (name?: string | string[] | readonly string[]) => void;

export interface InputGroupProps extends React.HTMLProps<HTMLInputElement> {
  size: number;
  placeholderSymbol?: 'X' | '-';
  label?: string;
  setValue: SetValue;
  clearErrors: ClearErrors;
  keyValue: string;
  error: string;
}

export interface ConcatToken {
  code: InputsState;
  size: number;
  setValue: SetValue;
  clearErrors: ClearErrors;
  keyValue: string;
}
