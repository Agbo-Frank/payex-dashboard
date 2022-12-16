import '../styles/globals.css'
import AccountModalProvider from '../context/accountModal';
import AdminContextProvider from '../context/adminContext';

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;

  return (
    <AdminContextProvider>
      <Layout>
        <AccountModalProvider>
          <Component {...pageProps} />
        </AccountModalProvider>
      </Layout>
    </AdminContextProvider>
  )
}

const EmptyLayout = ({children}) => <>{children}</>

export default MyApp
