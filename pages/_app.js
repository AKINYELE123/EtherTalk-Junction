import '../styles/globals.css'

import { EthertalkProvider } from '../context/EthertalkContext';
import { NavBar } from "../components/index"

const MyApp = ({ Component, pageProps }) => (
  <div>
      <EthertalkProvider>
        <NavBar />
        <Component {...pageProps}/>
      </EthertalkProvider>
  </div>
);

export default MyApp;
