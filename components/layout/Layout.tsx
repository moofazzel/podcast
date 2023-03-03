import Footer from "../footer/Footer";
import Header from "../Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header /> {children} <Footer />
    </>
  );
}

export default Layout;
