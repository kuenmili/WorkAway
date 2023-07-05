import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Legal = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold mb-4">Términos de servicio</h2>

          <p className="text-center max-w-md mb-4">
            Bienvenido/a a nuestra plataforma. Los siguientes términos de
            servicio rigen el uso de nuestros servicios. Al acceder y utilizar
            nuestra plataforma, usted acepta cumplir con estos términos. Si no
            está de acuerdo con alguna parte de estos términos, por favor, no
            utilice nuestra plataforma.
          </p>

          <p className="text-center max-w-md">
            Nuestra plataforma proporciona servicios que pueden incluir, entre
            otros, acceso a contenidos, funcionalidades de interacción y
            posibilidad de realizar transacciones. Usted es responsable de su
            uso de nuestros servicios y debe cumplir con todas las leyes
            aplicables.
          </p>

          <p className="text-center max-w-md">
            El contenido disponible en nuestra plataforma es de propiedad
            intelectual y está protegido por derechos de autor y otras leyes
            aplicables. No puede utilizar, copiar, reproducir, modificar,
            distribuir o transmitir dicho contenido sin autorización previa y
            por escrito.
          </p>

          <p className="text-center max-w-md">
            Nos reservamos el derecho de suspender o cancelar su acceso a
            nuestra plataforma en caso de incumplimiento de estos términos.
            También podemos modificar o eliminar contenido, funcionalidades o
            servicios en cualquier momento sin previo aviso.
          </p>

          <p className="text-center max-w-md">
            Su privacidad es importante para nosotros. Consulte nuestra política
            de privacidad para comprender cómo recopilamos, utilizamos y
            protegemos su información personal.
          </p>

          <p className="text-center max-w-md">
            Estos términos de servicio se rigen por las leyes del país en el que
            operamos. Cualquier disputa relacionada con estos términos se
            resolverá exclusivamente en los tribunales competentes de dicha
            jurisdicción.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Legal;
