import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
// css global
import './styles/global.scss';
// toastify
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000
    }
  }
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfig>
        <ToastContainer limit={1} />
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </QueryClientProvider>
  );
}
