import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6  dark:bg-[#26272c] bg-white rounded-lg shadow-[rgba(0, 0, 0, 0.16)] shadow-2xl">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl dark:text-white font-bold mb-4">Términos y Condiciones</h2>
          <p className="text-center dark:text-white max-w-md mb-4">
            Bienvenido/a a nuestro sitio web. Estos términos y condiciones rigen
            el uso de nuestro sitio. Al acceder y utilizar nuestro sitio web,
            usted acepta cumplir con estos términos. Si no está de acuerdo con
            alguna parte de estos términos, por favor, no utilice nuestro sitio.
          </p>

          <p className="text-center dark:text-white max-w-md">
            El contenido de nuestro sitio web no constituye asesoramiento legal,
            financiero o profesional. Usted es responsable de verificar la
            precisión y relevancia de cualquier información proporcionada en
            nuestro sitio antes de tomar cualquier acción basada en dicha
            información.
          </p>

          <p className="text-center dark:text-white max-w-md">
            Nuestro sitio puede contener enlaces a sitios web de terceros. No
            nos hacemos responsables del contenido, precisión o políticas de
            privacidad de dichos sitios. El acceso y uso de sitios web de
            terceros están sujetos a los términos y condiciones de dichos
            sitios.
          </p>

          <p className="text-center dark:text-white max-w-md">
            Nos reservamos el derecho de modificar o actualizar el contenido, el
            diseño o las funcionalidades de nuestro sitio en cualquier momento
            sin previo aviso. No garantizamos la disponibilidad continua o sin
            interrupciones de nuestro sitio, y nos reservamos el derecho de
            suspender o cancelar el acceso al mismo en cualquier momento.
          </p>

          <p className="text-center dark:text-white max-w-md">
            Al utilizar nuestro sitio, usted acepta cumplir con todas las leyes
            y regulaciones aplicables. No está permitido utilizar nuestro sitio
            para fines ilegales, difamatorios o que infrinjan los derechos de
            terceros.
          </p>

          <p className="text-center dark:text-white max-w-md">
            Estos términos y condiciones se rigen por las leyes del país en el
            que operamos. Cualquier disputa relacionada con estos términos se
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

export default Terms;
