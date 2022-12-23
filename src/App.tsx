import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import MyWebsite from 'src/components/MyWebsite/MyWebsite';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<MyWebsite />} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
