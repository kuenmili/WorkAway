<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
=======

import { useRouter } from 'next/router';
import Detail from '../../components/detail';
>>>>>>> ae3575a16eafce89aa6d259592f6af065da14607
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Detail from '../../components/detail';
import { getCoworkSpace } from '../../redux/actions/coworkSpaces';
import MapComponent from '../../components/Map';
<<<<<<< HEAD
import OfficeRules from '../../components/OfficeRules';
=======
import { useDispatch, useSelector } from 'react-redux';
import { getCoworkSpace } from '../../redux/actions/coworkSpaces';
import { useEffect } from 'react';
>>>>>>> ae3575a16eafce89aa6d259592f6af065da14607

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
<<<<<<< HEAD
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
=======
      <Detail key={item.id} {...item} />
      <MapComponent key={item.id} address={location} />
  return coworkSpace ? (
    <div>
      <Navbar />
      <Detail {...coworkSpace} />
>>>>>>> ae3575a16eafce89aa6d259592f6af065da14607
      <Footer />
    </div>
  ) : (
    <div>Loading...</div>
<<<<<<< HEAD
  );
}












=======
    </div>
    );
  }
>>>>>>> ae3575a16eafce89aa6d259592f6af065da14607

