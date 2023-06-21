import UpdateProfile from '../../../components/updateUserProfile';
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useRouter } from 'next/router';


const UpdateProfilePage = () => {
  const router = useRouter();
  
  if (router.isFallback) {
    return <div>Loading...</div>;
  };
  
  debugger;
    return(
        <div>
          <Navbar />
          <UpdateProfile />
          <Footer />
        </div>
      );

};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3001/users');
  const users = await res.json();
  
  const paths = users.map((user) => ({
      params: { index: `${user.id.toString()}/edit` },
  }));
  
  return { paths, fallback: true };
}

export default UpdateProfilePage;