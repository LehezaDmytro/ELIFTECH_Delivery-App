import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import History from "./pages/History/History";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
