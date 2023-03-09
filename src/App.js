import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import Box from '@mui/material/Box';
import routes from './routes';
import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
