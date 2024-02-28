import { InputHTMLAttributes } from 'react';
import { InputContainer, InputStyleContainer, InputStyled } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  rightSideText?: string;
}

export function Input({ rightSideText, className, ...props }: InputProps) {
  return (
    <InputContainer className={className}>
      <InputStyleContainer>
        <InputStyled {...props} />
        {rightSideText && <span>{rightSideText}</span>}
      </InputStyleContainer>
    </InputContainer>
  );
}
