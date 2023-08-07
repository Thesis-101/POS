import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsRouter from '../products/ProductsRouter';
import NotFound from '../errors/NotFound';
import MainRouter from './MainRouter';

function MainIndex() {
  return (
    <div className='w-full'>
      <Header></Header>
      <div className="flex">
        <aside className="h-screen sticky top-0">
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-base-100 text-base-content">
              <Sidebar></Sidebar>
            </ul>
          </div>
        </aside>  
        <main className='w-11/12 2xl:w-full'>
          <div className="drawer drawer-mobile bg-slate-100 h-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <i className="icon icon-file-text-3 text-green-400" />
              <MainRouter />
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
          </div>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MainIndex;
