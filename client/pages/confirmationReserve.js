import React from 'react';
import Footer from "../components/footer";
import NavbarBooking from "../components/navBarBooking";
import Navbar from "../components/navbar";

const ConfirmationMessage = () => {
    return (
      <>
        <Navbar/>  
        <div className="flex flex-col items-center justify-center min-h-screen -mt-32">
          <h1 className="text-4xl font-bold mt-4 mb-4">Reserva confirmada</h1>
          <p className="text-xl mt-4">Por favor, verifique su correo electrónico.</p>
        </div>
        <Footer />
      </>
    );
  };
  
  export default ConfirmationMessage;