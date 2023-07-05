import Profile from '../../../components/userProfile';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUserByID } from '../../../redux/actions/auth';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth?.user)
  const router = useRouter();

  useEffect(() => {
    const { profile } = router.query;
    if (profile) dispatch(getUserByID(router.query.profile));
  }, [dispatch, router.query.profile]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <Profile {...user} />
      <div className="mt-4">
                <Footer />
            </div>
    </div>
  );
};



// export async function getStaticPaths() {
//     const res = await fetch('http://localhost:3001/users');
//     const users = await res.json();
    
//     const paths = users.map((user) => ({
//         params: { profile: user.id.toString() },
//     }));
    
//     return { paths, fallback: true };
// };
// export async function getStaticProps({params}) {
//     const res = await fetch(`http://localhost:3001/users/${params.profile}`);
//     const item = await res.json();
//     console.log(item);
//     return { props: { item } };
// };

    // export default withAuth(ProfilePage);
export default ProfilePage;




