import { ThemeProvider, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Container, Box } from '@mui/system';
import theme from "./styles/theme";
import Appbar from "./Components/appbar";
import Banner from "./Components/banner"
import Products from './Components/products';
function App() {

  useEffect(() => {
    document.title = "Home";
  }, []);
  return (

    <ThemeProvider theme={theme}>
      <Container maxWidth="xl"
      sx={{
        background: '#ffff'
      }}>

    <Appbar />
    <Banner />
    <Box display="flex" justifyContent={"left"} sx={{ p:4 }}>
      <Typography variant="h4" sx={{ fontWeight: '600' }} >Products</Typography>
    </Box>
    <Products />

      </Container>
      </ThemeProvider>
  );
}

export default App;
