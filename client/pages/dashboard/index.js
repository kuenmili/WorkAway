import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import { getBusinessByID } from '../../redux/actions/business';


function Dashboard() {
 
    const dispatch = useDispatch();
    const { id } = useRouter().query;
    const business = useSelector((state) => state.business.business);
    
    useEffect(() => {
      id && dispatch(getBusinessByID(id));
    }, [dispatch, id]);

 

  return (
    <Layout>
        <div className="container py-12 flex ">
          <div className="grid lg:grid-cols-3 gap-12 ">
            {business?.coworkSpaces?.map((card) => ( 
              <div className ="shadow-lg rounded-lg hover:scale-110 transition duration-300" key={card._id}>
                        <div className='p-5'>
                              <img className = "rounded-t-2xl h-80 object-cover" src={card.image} alt="" />
                             <h3 className='text-3xl font-bold text-slate-700 mb-3 dark:text-white'>{card.name}</h3>
                             <p className='text-lg font-bold text-gray-700 dark:text-white mb-1'>{card.address}</p>
                           </div>
                          
                          
                   
                </div>   
                 ))}
               </div>
            </div>
      </Layout>
            
    
  )
}

export default Dashboard
