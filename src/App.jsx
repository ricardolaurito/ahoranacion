import Paths from './paths';

import { useEffect } from 'react';

import Provider from 'pages/Provider';

import ScriptTag from 'react-script-tag';

function App() {

    // useEffect para carregar o script do menu responsivo
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = "./js/script.js";
      script.async = true;
  
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      }
  
    }, []);


  return (
    <>
    <ScriptTag type="text/javascript" src="./js/script.js" />
    <Provider>
      <Paths />
    </Provider>
    </>
  );
}

export default App;
