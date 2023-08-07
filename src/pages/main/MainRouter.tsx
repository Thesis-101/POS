import { Routes, Route } from 'react-router-dom';
import AdjustmentRouter from '../adjustment/AdjustmentRouter';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../errors/NotFound';
import ExpensesRouter from '../expenses/ExpensesRouter';
import PeopleRouter from '../people/PeopleRouter';
import ProductsRouter from '../products/ProductsRouter';
import PurchaseReturnRouter from '../purchase-return/PurchaseReturnRouter';
import PurchasesRouter from '../purchases/PurchasesRouter';
import QuotationsRouter from '../quotations/QuotationsRouter';
import ReduxCounterRouter from '../redux-counter/ReduxCounterRouter';
import ReportsRouter from '../reports/ReportsRouter';
import SalesReturnRouter from '../sales-return/SalesReturnRouter';
import SalesRouter from '../sales/SalesRouter';
import SettingsRouter from '../settings/SettingsRouter';
import TransferRouter from '../transfer/TransferRouter';
import MainIndex from './MainIndex';

function MainRouter () {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<ProductsRouter />} />
      <Route path="/settings" element={<SettingsRouter />} />
      <Route path="/transfer" element={<TransferRouter />} />
      <Route path="/sales-return" element={<SalesReturnRouter />} />
      <Route path="/sales" element={<SalesRouter />} />
      <Route path="/reports" element={<ReportsRouter />} />
      <Route path="/redux-counter" element={<ReduxCounterRouter />} />
      <Route path="/adjustment" element={<AdjustmentRouter />} />
      <Route path="/expenses" element={<ExpensesRouter />} />
      <Route path="/quotations" element={<QuotationsRouter />} />
      <Route path="/purchases" element={<PurchasesRouter />} />
      <Route path="/purchase-return" element={<PurchaseReturnRouter />} />
      <Route path="/people" element={<PeopleRouter />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRouter;
