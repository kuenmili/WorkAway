import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function () {
  return (
    <div>
      <Navbar />

      <div className="absolute inset-x-0 bottom-0 ">
        <Footer />
      </div>
    </div>
  );
}
