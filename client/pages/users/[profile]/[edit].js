'use Client';
import UpdateProfile from '../../../components/updateUserProfile';
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useRouter } from 'next/router';


const UpdateProfilePage = () => {
  const router = useRouter();
  
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  };
  
    return(
        <div>
          <Navbar />
          <UpdateProfile />
          <div className="mt-4">
                <Footer />
            </div>
        </div>
      );

};


export default UpdateProfilePage;