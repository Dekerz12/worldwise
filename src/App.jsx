import { Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import AuthProvider from "./contexts/FakeAuthContext";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import Form from "./components/Form";
import CountryList from "./components/CountryList";
import City from "./components/City";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <Routes>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route
            path="app"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route index element={<Homepage />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
