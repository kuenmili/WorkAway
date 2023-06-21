import Container from './container';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Profile = ({ id, first_name, last_name, profile_image, email, cellphone_number, reviews, reserve_id }) => {

  const router = useRouter();
  const {profile} = router.query;

    return(
        <div>
          <Container className="container mx-auto py-10 px-2 ">
            <div className=" flex">
              <div className="shadow-lg rounded-lg flex w-1/2 justify-center text-center">
                <div className="p-5">
                <Image
                  className="rounded-t-2xl w-16 md:w-32 lg:w-48"
                  src={profile_image}
                  alt=""
                  width={200}
                  height={200}
                  loading="eager"
                  />
                  <h1 className="text-3xl font-bold text-slate-700 mb-3 dark:text-white">{first_name}</h1>
                  <h2 className="text-lg font-normal text-gray-600 dark:text-white">{last_name}</h2>
                </div>
              </div>
              <div className="flex w-1/2 justify-center text-center">
                
                  <div className="text-lg mb-4 ">
                    <p className="text-lg font-bold text-gray-800 dark:text-white">Mail: {email}</p>
                    <p className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">Cellphone: {cellphone_number}</p>
                    
                  </div>                    
                  </div>                  
                  </div>

                  <div className='md:flex justify-center'>
                <Link href= {`/users/${profile}/edit`} className="px-6 py-2 text-white bg-indigo-800 rounded-md md:ml-5">
                  Edit
                </Link>               
            </div> 
                  <div className=' md:flex justify-evenly'>
                    <div className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">{
                      reviews.length > 0 ? reviews.map(review => {
                        return (
                          <div key={review.id}>
                            <h2>Reviews:</h2>
                            <p>Score: {review.score}</p>
                            <p>Comments: {review.comment}</p>
                            </div>
                        )
                    }) 
                    : 
                    <div>
                        <p>No hay reviews</p>
                    </div>
                    }</div>
                    <div className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">
                        {
                        reserve_id.length > 0 ? reserve_id.map(reserve => {
                          return (
                            <div key={reserve.id}>
                              <h2>Reserves</h2>
                            <p>Date: {reserve.date}</p>
                            <p>Duration: {reserve.duration}</p>
                            <p>Room:{reserve.room}</p>
                            </div>
                        )
                      }) 
                    : <div>
                        <p>No hay reservas</p>
                    </div>
                    }
                    </div>
                    </div>
            
            <div className='md:flex justify-center'>
            </div>
          </Container>
           
        </div>
      );

};

export default Profile;