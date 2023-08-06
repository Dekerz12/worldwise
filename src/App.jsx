import { Routes, Route, Navigate } from 'react-router-dom';
import { CitiesProvider } from './contexts/CitiesContext';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import CityList from './components/CityList';
import Form from './components/Form';
import CountryList from './components/CountryList';
import City from './components/City';

function App() {
  return (
    <CitiesProvider>
      <Routes>
        <Route path='product' element={<Product />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='app' element={<AppLayout />}>
          <Route index element={<Navigate replace to='cities' />} />
          <Route path='cities' element={<CityList />} />
          <Route path='cities/:id' element={<City />} />
          <Route path='countries' element={<CountryList />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='login' element={<Login />}></Route>
        <Route index element={<Homepage />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </CitiesProvider>
  );
}

export default App;
