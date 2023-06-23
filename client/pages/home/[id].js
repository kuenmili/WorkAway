import { useRouter } from 'next/router';
import Detail from '../../components/detail';
import cardList from "../../components/datalist";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MapComponent from '../../components/Map';

export default function DetailPage({ item }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { location } = item;

  return (
    <div>
      <Navbar />
      <Detail key={item.id} {...item} />
      <h1 className="text-3xl font-bold mb-3">¿Dónde vas a estar?{location}</h1>
      <MapComponent key={item.id} address={location} />
      <div className="mt-4">
      <Footer />
      </div>
     
    </div>
  );
}

export async function getStaticPaths() {
  const paths = cardList.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const item = cardList.find((item) => item.id === Number(id));

  return {
    props: {
      item,
    },
  };
}



