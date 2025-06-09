import { Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { NavigationMenu } from './components/Nav/index';
import { TodoApp } from './components/ToDoApp/index';
import { Home } from './components/Home/index';
import { Contact } from './components/Contact/index';
import './App.css';


function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'grey.100' }}>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
