import React, {Suspense, Component} from 'react';
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
}

export default App;
