import '@/styles/globals.css';
import { AppProps } from 'next/app'; // Asegúrate de importar AppProps correctamente desde 'next/app'

// Define una interfaz para el componente _app que incluya la propiedad getLayout
interface AppWithLayoutProps extends AppProps {
  Component: React.ComponentType & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
}

export default function App({ Component, pageProps }: AppWithLayoutProps) {
  // Obtén el layout definido en el componente o utiliza un layout predeterminado
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  // Devuelve el layout envolviendo el componente de la página
  return getLayout(<Component {...pageProps} />);
}


