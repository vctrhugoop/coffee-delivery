import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components/Input';
import { AddressesFormContainer } from './styles';

interface ErrorsType {
  errors: { [key: string]: { message: string } };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressesFormContainer>
      <Input
        placeholder='CEP'
        type='number'
        className='zipcode'
        {...register('zipcode')}
        error={errors.zipcode?.message}
      />
      <Input
        placeholder='Rua'
        className='street'
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder='Número'
        type='number'
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder='Complemento'
        className='complement'
        rightSideText='Opcional'
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder='Bairro'
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder='Cidade'
        {...register('city')}
        error={errors.city?.message}
      />
      <Input placeholder='UF' {...register('uf')} error={errors.uf?.message} />
    </AddressesFormContainer>
  );
}
