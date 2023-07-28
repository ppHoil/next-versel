import Head from 'next/head'
import { Inter } from 'next/font/google'
import { NavBar } from '../NavBar'
import styles from './Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

const MainLayout: React.FC<{ children:any}>= ({children}) => {
    return (
        <>
          <Head>
            <title>Pepito App</title>
            <meta name="description" content="Home App" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NavBar/>
          <main className={`${styles.main} ${inter.className}`}>
            {children}
          </main >
        </>
      )
}

export default MainLayout