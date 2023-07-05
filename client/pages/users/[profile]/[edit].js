'use Client';
import UpdateProfile from '../../../components/updateUserProfile';
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';


const UpdateProfilePage = () => {
  const router = useRouter();

  
  if (router.isFallback) {
    return <div>Loading...</div>;
  };
  
    return(
        <div>
          <Navbar />
          <div className="mx-auto max-w-2xl justify-between ">
            <UpdateProfile />
          </div>
          <div className="mt-4">
                <Footer />
            </div>
        </div>
      );

};


export default UpdateProfilePage;