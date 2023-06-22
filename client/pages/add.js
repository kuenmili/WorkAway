import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Container from "../components/container";

function page() {
  return (
    <div>
      <Navbar />
      <Container className="flex flex-wrap ">
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-2xl dark:bg-gray-200">
          <h2 className="text-4xl font-bold mb-4 text-center dark:text-black">
            añadir un coworking
          </h2>
          <form>
            <label className="mb-6"></label>
          </form>
          <div className="absolute inset-x-0 bottom-0 ">
            <Footer />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
