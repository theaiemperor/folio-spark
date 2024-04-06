import { Box } from '@mui/material'
import Navbar from './components/Header/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import MainWrapper from './components/Wrapper/MainWrapper'
import ContentWrapper from './components/Wrapper/ContentWrapper'
export default function App() {
  return (
    <Box >
      <MainWrapper>
        <Navbar />
        <ContentWrapper>
          <Home />
        </ContentWrapper>
        <Footer />
      </MainWrapper>

    </Box>
  )
}
