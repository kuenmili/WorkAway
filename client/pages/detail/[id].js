
import { useRouter } from 'next/router';
import Detail from '../../components/detail';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import MapComponent from '../../components/Map';
import { useDispatch, useSelector } from 'react-redux';
import { getCoworkSpace } from '../../redux/actions/coworkSpaces';
import { useEffect } from 'react';

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useRouter().query;
  const coworkSpace = useSelector((state) => state.coworkSpaces.coworkSpace);

  useEffect(() => {
    id && dispatch(getCoworkSpace(id));
  }, [dispatch, id]);

  const { location } = item;

  return (
    <div>
      <Navbar />
      <Detail key={item.id} {...item} />
      <MapComponent key={item.id} address={location} />
  return coworkSpace ? (
    <div>
      <Navbar />
      <Detail {...coworkSpace} />
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
    </div>
    );
  }

