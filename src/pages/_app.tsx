import type { AppContext, AppProps } from 'next/app';

import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme, customTheme } from '@/themes';

import '@/styles/globals.css';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';


interface Props extends AppProps {
  theme: string;
}


function App({ Component, pageProps, theme = 'dark' }: Props) {


  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    
    const cookieTheme = Cookies.get('theme') || 'light';
    console.log({ theme });
    const selectdTheme = cookieTheme === 'light'
      ? lightTheme 
      : cookieTheme === 'dark' 
      ? darkTheme
      : customTheme;
    
      setCurrentTheme(selectdTheme);
  }, [])
  


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

// App.getInitialProps = async (appContext: AppContext) => {

//   const { theme } = appContext.ctx.req ? (appContext.ctx.req as any).cookies : { theme: 'light' };
  
//   // console.log('getInitialProps:  ', cookies)

//   const validThemes = ['light', 'dark', 'custom'];


//     return {
//       theme: validThemes.includes(theme) ? theme : 'dark'
//     }
// }


export default App;