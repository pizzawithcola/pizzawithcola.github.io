import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import DarkMode from './Tools/DarkMode';
import HomePage from './HomePage/HomePage';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<DarkMode />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </HashRouter>
    </ThemeProvider>

  );
}

export default App;
