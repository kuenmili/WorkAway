import { useRouter } from 'next/router';
import Detail from '../../components/detail';
import cardList from "../../components/datalist";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function DetailPage({ item }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Detail {...item} />
      <Footer />
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
