import { FAQ } from "../components/FAQ";
import { Abou_us } from "../components/aboutus";
import { ContactUs } from "../components/contactus";
import { Header } from "../components/header";
import { Nav_bar } from "../components/navbar";
import { Our_portfolio } from "../components/ourportfolio";
import { useScroll } from "../hooks/scroll";

const Home_page = () => {
  const { about, portfolio, contact } = useScroll();
  return (
    <>
      <Nav_bar about={about} portfolio={portfolio} contact={contact} />
      <Header />
      <div ref={about}>
        <Abou_us />
      </div>
      <div ref={portfolio}>
        <Our_portfolio />
      </div>
      <FAQ />
      <div ref={contact}>
        <ContactUs />
      </div>
    </>
  );
};

export default Home_page;
