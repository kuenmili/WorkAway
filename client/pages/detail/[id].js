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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="mt-8">
        <Detail {...coworkSpace} />
      </div>
      <div className="mx-4 mt-16">
        <div className="mb-32">
          <MapComponent address={coworkSpace.location} />
        </div>
        <div className="flex">
          <div className="flex-1">

            <OfficeRules />

          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

