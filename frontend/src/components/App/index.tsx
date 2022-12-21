// Styled-Components
import { ThemeProvider } from 'styled-components';
import GlobalStyled from '../../assets/styles/global';
import { myTheme } from '../../assets/styles/default';

// Components
import { Header } from '../Header';
import { Orders } from '../Orders';

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyled />

      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </ThemeProvider>
  );
}
