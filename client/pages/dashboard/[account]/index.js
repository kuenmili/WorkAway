import Layout from "../../../components/layout";
import Profile from "../../../components/business/BussinesProfile";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3001/business");
  const users = await res.json();

  const paths = users.map((user) => ({
    params: { account: user._id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3001/business/${params.account}`);
  const item = await res.json();

  return { props: { item } };
}
export default function BussinesProfile({ item }) {
  return (
    <div>
      <Layout>
        <div>
          <Profile {...item} />
        </div>
      </Layout>
    </div>
  );
}
