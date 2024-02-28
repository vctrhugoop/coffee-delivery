import { Input } from '../../../../components/Input';
import { AddressesFormContainer } from './styles';

export function AddressForm() {
  return (
    <AddressesFormContainer>
      <Input placeholder='CEP' type='number' className='zipcode' />
      <Input placeholder='Rua' className='street' />
      <Input placeholder='Número' type='number' />
      <Input
        placeholder='Complemento'
        rightSideText='Opcional'
        className='complement'
      />
      <Input placeholder='Bairro' />
      <Input placeholder='Cidade' />
      <Input placeholder='UF' />
    </AddressesFormContainer>
  );
}
