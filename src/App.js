import { QueryClient, QueryClientProvider } from 'react-query';

import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
// css global
import './styles/global.scss';

// ----------------------------------------------------------------------

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeConfig>
        <ScrollToTop />
        <Router />
      </ThemeConfig>
    </QueryClientProvider>
  );
}
