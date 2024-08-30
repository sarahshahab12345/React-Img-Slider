import { Container } from '@mui/material';
import './App.css'
import SliderComp from './Components/SliderComp';

function App() {

  return (
    <>
      <Container sx={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <SliderComp />
      </Container>
    </>
  )
}

export default App
