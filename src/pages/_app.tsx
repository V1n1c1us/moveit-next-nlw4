import '../styles/global.css';

import { UserAuthProvider } from '../contexts/UserAuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <UserAuthProvider>
      <Component {...pageProps} />
    </UserAuthProvider>
  );
}

export default MyApp;
