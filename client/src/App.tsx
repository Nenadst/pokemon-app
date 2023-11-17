import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from 'src/theme';
import { Slide, ToastContainer } from 'react-toastify';
import { CookiesProvider } from 'react-cookie';
import { DEFAULT_STALE_TIME } from './utils/constants';
import Routes from './components/Routes/routes.component';
import 'react-toastify/dist/ReactToastify.css';

function App(): ReactElement {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: DEFAULT_STALE_TIME
      }
    }
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <CookiesProvider defaultSetOptions={{ path: '/' }}>
            <ToastContainer transition={Slide} />
            <CssBaseline />
            <Routes />
          </CookiesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
