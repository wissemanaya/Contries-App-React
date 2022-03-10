import Countries from "../components/countries/Countries";
import Logo from "../components/logo/Logo";
import Navigation from "../components/navigation/Navigation";

const Home = () => {
  return (
    <div className="home">
        <Logo/>
       <Navigation/>
       <Countries/>
      
    </div>
  );
};
export default Home;
