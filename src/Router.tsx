import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { CheckoutOrder } from './pages/CheckoutOrder';
import { FinishedOrder } from './pages/FinishedOrder';
import { Home } from './pages/Home';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout-order' element={<CheckoutOrder />} />
        <Route path='/finished-order' element={<FinishedOrder />} />
      </Route>
    </Routes>
  );
}
