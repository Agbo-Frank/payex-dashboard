import '../styles/globals.css'
import AccountModalProvider from '../context/accountModal';

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;

  return (
    <Layout>
      <AccountModalProvider>
        <Component {...pageProps} />
      </AccountModalProvider>
    </Layout>
  )
}

const EmptyLayout = ({children}) => <>{children}</>

export default MyApp
