import React, {Suspense, Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import { withTranslation } from 'react-i18next';

function HeaderComponent()
{
    // const {t, i18n} = useTranslation('common');
    // return <h1>{t('welcome.title')}</h1>

    const [t, i18n] = useTranslation('common');
    return <div>
        <h1>{t('welcome.title', {framework:'React'})}</h1>
        <button onClick={() => i18n.changeLanguage('de')}>de</button>
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </div>
}

class HighOrderComponent extends Component {
  render() {
      const { t } = this.props;

      return (<div>
          <h1>{t('welcome.title')}</h1>
          <h1>{t('welcome.title', {framework:'React'})}</h1>
        </div>
      )
  }
}
const HighOrderComponentTranslated = withTranslation('common')(HighOrderComponent)

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <HeaderComponent/>
      </div>
    </Suspense>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
