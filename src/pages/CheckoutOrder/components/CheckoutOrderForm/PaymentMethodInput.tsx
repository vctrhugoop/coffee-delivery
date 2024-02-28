import { InputHTMLAttributes, ReactNode } from 'react';
import { ContentContainer, PaymentMethodInputContainer } from './styles';

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  label: string;
}
export function PaymentMethodInput({
  id,
  icon,
  label,
  ...props
}: PaymentMethodInputProps) {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type='radio' {...props} name='paymentMethod' />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          <span>{label}</span>
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  );
}
