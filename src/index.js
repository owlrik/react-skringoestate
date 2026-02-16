import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from "styled-components";

import { createDefaultTheme } from 'src/shared/styles/theme';

import App from './app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={createDefaultTheme()}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
