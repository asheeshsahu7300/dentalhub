import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import About from "./screens/About/About";
import Admin from "./screens/Admin/admin";
import Appointment from "./screens/Appointment/Appointment";
import Banner from "./screens/Banner/Banner";
import ClinicalFacts from "./components/ClinicalFacts/ClinicalFacts";
import Contact from "./screens/Contact/Contact";
import AuthProvider from "./components/Context/AuthContext";
import Feature from "./components/Feature/Feature";
import Footer from "./screens/Footer/Footer";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import Header from "./components/Header/Header";
import Login from "./screens/Login/Login";
import Menu from "./components/Menu/Menu";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivetRoute/PrivetRoute";
import QualityService from "./components/QualityService/QualityService";
import Register from "./screens/About/Register/Register";
import Services from "./screens/Services/Services";
import ServicesDetails from "./screens/Services/ServicesDetails";
import Messages from "./screens/Admin/getcontacts";
import Errors from "./components/NotFound/error";

function App() {
  return (
    <Router>
      <Analytics />
      <AuthProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-inter">
          <Header />
          <Menu />
          
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Banner />
                    <Feature />
                    <QualityService />
                    <Services home />
                    <ClinicalFacts />
                  </>
                } 
              />
              <Route path="/service/:serviceId" element={<ServicesDetails />} />
              <Route path="/service/:serviceId/:serviceName" element={<ServicesDetails />} />
              
              <Route path="/messages" element={
                <PrivateRoute>
                  <Messages />
                </PrivateRoute>
              } />
              
              <Route path="/admin" element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              } />
              
              <Route path="/adminlogin" element={<Login />} />
              <Route path="/adminregister" element={<Errors />} />
              <Route path="/register/123-ash/registerasadmin" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
