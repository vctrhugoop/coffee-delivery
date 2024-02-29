import { Input } from '../../../../components/Input';
import { AddressesFormContainer } from './styles';

export function AddressForm() {
  // function handleCheckZipcode(event) {
  //   const zipcode = event.target.value.replace(/\D/g, '');

  //   fetch(`https://viacep.com.br/ws/${zipcode}/json/`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setValue('street', data.logradouro);
  //       setValue('neighborhood', data.bairro);
  //       setValue('city', data.localidade);
  //       setValue('uf', data.uf);
  //     });
  // }

  return (
    <AddressesFormContainer>
      <Input
        placeholder='CEP'
        type='number'
        className='zipcode'
        // onBlur={handleCheckZipcode}
      />
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
