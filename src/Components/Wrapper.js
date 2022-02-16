import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from '../Languages/es.json';
import English from '../Languages/en.json';

export const Context = React.createContext();
const local = navigator.language;
let language;

local.includes("en") ? language = English : language = Spanish;

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(language);

  const selectLanguage = (event) => {
    const newLocale = event.target.value;
    setLocale(newLocale);
    
    newLocale === "es" ? setMessages(Spanish) : setMessages(English);
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider locale={ locale } messages={ messages }>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
}

export default Wrapper;