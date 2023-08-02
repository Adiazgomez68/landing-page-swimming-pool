import Head from "next/head";
import Footer from "../components/shared/Footer";
import Intro from "../components/home/Intro";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Landing Page </title>
        <meta
          name="description"
          content="This is a Landing page for expose an enterprise of pools."
        />
      </Head>

      <div className="relative flex flex-col w-full h-screen">
        <Intro />
        <div className="flex flex-col w-full my-5"> {children} </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;