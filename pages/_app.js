import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/magnific-popup.css";
import "@/styles/owl.carousel.css";
import "@/styles/nouislider.css";
import "@/styles/countdown.css";
import "@/styles/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function App({ Component, pageProps }) {
  return   <Provider store={store}><Component {...pageProps} /></Provider>;
}
