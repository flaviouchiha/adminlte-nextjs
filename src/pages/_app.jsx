import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Footer } from '../components/Footer'
import { Content } from '../components/Content'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <main>
        <Header />
        <Menu />
        <Component {...pageProps} />
        <Content />
        <Footer />
      </main>
    </div>
  )
}

export default MyApp
