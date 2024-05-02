import "./App.css";
import Award from "./component/Award/Award";
import BasicExample from "./component/Cards/Card";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import DarkVariantExample from "./component/carousel/Carousel";
import Result from "./component/Result/Result";
import Offer from "./component/Offer/Offer";
import Form from "./component/Form/Form";
import Client from "./component/Our_client/Client";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Award />
      <Result />
      <Offer />
      <Form />
      <Client />
      <DarkVariantExample />
      <BasicExample />
      <Footer />
    </div>
  );
}

export default App;
