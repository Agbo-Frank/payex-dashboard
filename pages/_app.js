import '../styles/globals.css'
import AccountModalProvider from '../context/accountModal';
import AdminContextProvider from '../context/adminContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;

  return (
    <AdminContextProvider>
      <Layout>
        <AccountModalProvider>
          <ToastContainer />

          <Component {...pageProps} />
        </AccountModalProvider>
      </Layout>
    </AdminContextProvider>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>

export default MyApp
