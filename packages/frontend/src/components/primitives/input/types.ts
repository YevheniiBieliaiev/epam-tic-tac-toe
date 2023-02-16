export interface InputTextProps extends React.HTMLProps<HTMLInputElement> {
  id: string;
  placeholder: string;
  label?: string;
  error?: string;
  isPassword?: boolean;
}
