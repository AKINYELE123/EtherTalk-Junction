import '../styles/globals.css'

import { ChatAppProvider } from '../context/ChapAppContext';
import { NavBar } from "../components/index"

const MyApp = ({ Component, pageProps }) => (
  <div>
    <ChatAppProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChatAppProvider>
  </div>
);

export default MyApp
