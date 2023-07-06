import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../components/layout';
import { getBusinessById } from '../../redux/actions/business';
import Card from '../../components/card';
import Link from 'next/link';
import { deleteCoworkSpace } from '../../redux/actions/coworkSpaces';

function Dashboard() {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.auth.user?.id);
    const business = useSelector((state) => state.business.business);
    
    useEffect(() => {
      id && dispatch(getBusinessById(id));
    }, [dispatch, id]);


    const handleDelete = (id) => {
      dispatch(deleteCoworkSpace(id));
    }



  return (
    <Layout>
      <h1 className='text-center text-3xl font-bold text-indigo-800 dark:text-gray-100 underline'>CoworkSpaces disponibles</h1>
			<div className='ml-8'>
				<div className="container py-12 flex ">
					<div className="grid lg:grid-cols-3 gap-12 ">
          {
            business?.cowork_spaces?.map((card) => (
              <div key={card._id}>
              <Card coworkSpace={card} />

              <button
                onClick={() => handleDelete(card._id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md mt-4"
              >
              Eliminar
              </button>
          </div>
          ))
          }
					</div>
				</div>
			</div>
    <div>
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between mt-10">
          <div className="mr-6">
            <h1 className="text-4xl font-semibold mb-2 text-indigo-800 dark:text-gray-100 underline">Estadisticas</h1>
            
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <Link href="/dashboard/add" className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3"
                > 
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            Añadir CoworkSpace
            </Link>
            <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              
            </button>
          </div>
        </div>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              
                <span className="block text-2xl font-bold dark:text-black">{business.cowork_spaces?.length}</span>
              <span className="block text-gray-500">Espacios de trabajo</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
            {
            business?.cowork_spaces?.map((card) => ( 
              <span className="block text-2xl font-bold dark:text-black">{card.reviews?.length}</span>
              ))
            }

              <span className="block text-gray-500">Reseñas Positivas</span>

            </div>

          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold dark:text-black">8</span>
              <span className="inline-block text-xl text-gray-500 font-semibold"></span>
              <span className="block text-gray-500">Cantidad de usuarios</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
              <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
            {
            business?.cowork_spaces?.map((card) => ( 
              
              <span className="list-decimal text-2xl font-bold dark:text-black">{card.reserves?.length}</span>
            ))
          }
              <span className="block text-gray-500">Cantidad de reservas</span>
            </div>
          </div>
        </section>
        <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
          <div className="">
         
            <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
              
            </div>
          </div>
          
         
        </section>
    </div>
      </Layout>
            
    
  )
}

export default Dashboard