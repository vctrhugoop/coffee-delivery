import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react';
import { InputContainer, InputStyleContainer, InputStyled } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightSideText?: string;
  error?: string;
};

export const Input = forwardRef(function Input(
  { rightSideText, className, error, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <InputContainer className={className}>
      <InputStyleContainer hasError={!!error}>
        <InputStyled {...props} ref={ref} />
        {rightSideText && <span>{rightSideText}</span>}
      </InputStyleContainer>
      {error && <p>{error}</p>}
    </InputContainer>
  );
});
