import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { CartWidget } from "./Components/CartWidget/CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <ItemListContainer greeting={"Bienvenidos a la pagina de CASAKAS"} />
    </div>
  );
}

export default App;
