import logo from './logo.svg';
import './App.css';
import './i18n';

import { useTranslation } from 'react-i18next';
import TranslateClassBasedComps from "./components/TranslateClassBasedComps"

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          { t('myKey') }
        </a>
      <TranslateClassBasedComps />
    </div>
  );
}

export default App;
