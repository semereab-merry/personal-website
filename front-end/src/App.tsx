import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllScreens from "./allScreens";

export default function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <AllScreens />
      </div>
    </>
  );
}
