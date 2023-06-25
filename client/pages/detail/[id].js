import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Detail from '../../components/detail';
import { getCoworkSpace } from '../../redux/actions/coworkSpaces';
import MapComponent from '../../components/Map';
import OfficeRules from '../../components/OfficeRules';

export default function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useRouter().query;
  const coworkSpace = useSelector((state) => state.coworkSpaces.coworkSpace);

  useEffect(() => {
    id && dispatch(getCoworkSpace(id));
  }, [dispatch, id]);

  return coworkSpace ? (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ marginTop: '2rem' }}>
        <Detail {...coworkSpace} />
      </div>
      <div style={{ marginLeft: '1rem', marginRight: '1rem', marginTop: '4rem' }}>
        <div style={{ marginBottom: '8rem' }}>
          <MapComponent address={coworkSpace.location} />
        </div>
        <div style={{ marginTop: '8rem' }}>
          <OfficeRules />
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}













