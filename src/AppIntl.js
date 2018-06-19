import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import translations from './i18n/locales';
import App from './App';

addLocaleData(zhLocaleData);

class AppIntl extends Component {
  render() {
    const locale = 'zh';
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

export default AppIntl;
