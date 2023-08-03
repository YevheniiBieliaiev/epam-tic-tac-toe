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
  keyValue: string;
}

export interface ConcatToken {
  segments: string[];
  size: number;
  setValue: SetValue;
  clearErrors: ClearErrors;
  keyValue: string;
}
