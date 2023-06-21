import Container from './container';
import Image from 'next/image';
import Link from 'next/link';

const Profile = ({ first_name, last_name, profile_image, email, cellphone_number, reviews, reserve_id }) => {
    return(
        <div>
          <Container className="container mx-auto py-10 px-2">
            <div className="flex gap-6">
              <div className="shadow-lg rounded-lg w-2/3">
                <Image
                  className="rounded-t-2xl"
                  src={profile_image}
                  alt=""
                  width={800}
                  height={800}
                  loading="eager"
                />
                <div className="p-5">
                  <h1 className="text-3xl font-bold text-slate-700 mb-3 dark:text-white">{first_name}</h1>
                  <p className="text-lg font-normal text-gray-600 dark:text-white">{last_name}</p>
                  <p className="text-lg font-bold text-gray-800 dark:text-white">{email}</p>
                </div>
              </div>
              <div className="flex-1">
                <div className="p-4">
                  <div className="text-lg mb-4">
                    <p className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">{cellphone_number}</p>
                    <p className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">{reviews.comment}</p>
                    <div className="text-1xl font-bold text-slate-700 mb-3 dark:text-white">
                        {
                        reserve_id.length > 0 ? reserve_id.map(reserve => {
                        return (
                            <div key={reserve.id}>
                            <p>{reserve.date}</p>
                            <p>{reserve.duration}</p>
                            <p>{reserve.time_slot}</p>
                            <p>{reserve.room}</p>
                            </div>
                        )
                    }) 
                    : <div>
                        <p>No hay reservas</p>
                    </div>
                    }
                    </div>
                  </div>
                </div>                
              </div>
            </div>
          </Container>
        </div>
      );

};

export default Profile;