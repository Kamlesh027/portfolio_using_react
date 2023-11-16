
import './App.css';
import styled from 'styled-components';
import { darkTheme } from "./utils/Themes";
import { ThemeProvider } from '@emotion/react';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
function App() {
  return (
    <ThemeProvider theme ={darkTheme}>
   <body>
    porfolio
   </body>
   </ThemeProvider>
      

  );
}

export default App;
