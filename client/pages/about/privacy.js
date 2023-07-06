import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-3xl font-bold mb-4">Política de privacidad</h2>
          <></>
          <p className="text-center max-w-md mb-4">
            En nuestra plataforma, respetamos y protegemos la privacidad de
            nuestros usuarios. Esta política de privacidad explica cómo
            recopilamos, utilizamos y compartimos su información personal cuando
            utiliza nuestros servicios. Al utilizar nuestra plataforma, usted
            acepta los términos y condiciones de esta política.
          </p>

          <p className="text-center max-w-md">
            Recopilamos información personal cuando usted se registra en nuestra
            plataforma, como su nombre, dirección de correo electrónico y fecha
            de nacimiento. Utilizamos esta información para proporcionarle una
            experiencia personalizada y mejorar nuestros servicios. No
            compartimos su información personal con terceros sin su
            consentimiento, excepto en los casos requeridos por la ley.
          </p>

          <p className="text-center max-w-md">
            Utilizamos cookies y tecnologías similares para recopilar
            información sobre su actividad en nuestra plataforma. Estos datos
            nos ayudan a mejorar su experiencia y ofrecerle contenido relevante.
            Puede configurar su navegador para que rechace las cookies, pero
            esto puede limitar algunas funcionalidades de nuestra plataforma.
          </p>

          <p className="text-center max-w-md">
            Nos esforzamos por proteger su información personal utilizando
            medidas de seguridad adecuadas. Sin embargo, tenga en cuenta que
            ninguna transmisión de datos a través de Internet o método de
            almacenamiento electrónico es completamente seguro. No podemos
            garantizar la seguridad absoluta de su información, por lo que usted
            asume el riesgo al proporcionarnos su información personal.
          </p>

          <p className="text-center max-w-md">
            Si tiene alguna pregunta o inquietud sobre nuestra política de
            privacidad, no dude en ponerse en contacto con nosotros. Nos
            comprometemos a abordar cualquier problema de manera oportuna y
            transparente.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
