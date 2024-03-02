import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from 'zod';

import { CheckoutOrderForm } from './components/CheckoutOrderForm';
import { SelectedCoffees } from './components/SelectedCoffees';
import { CheckoutOrderContainer } from './styles';

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  zipcode: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CheckoutOrder() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  });

  const { handleSubmit } = confirmOrderForm;

  function handleComfirmOrder(data: ConfirmOrderFormData) {
    console.log(data);
  }

  useEffect(() => {
    document.title = 'Meu carinho | Coffee Delivery';
  }, []);

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutOrderContainer
        className='container'
        onSubmit={handleSubmit(handleComfirmOrder)}
      >
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  );
}
