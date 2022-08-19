import { useState } from 'react';
import { translate } from './Translate';

function App() {

  const [text, setText] = useState('');
  const [option, setOption] = useState('UPP');
  const [language, setLanguage] = useState('EN-US');

  const change = (value, option = 'UPP') => {
    let ul = false;

    switch (option) {
      case 'UPP':
        setText(value.toString().toUpperCase());
        break;
      case 'LOW':
        setText(value.toString().toLowerCase());
        break;
      case 'CAP':
        var arr = value.toLowerCase().split(' ');
        for (var i = 0; i < arr.length; i++)
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        setText(arr.join(' '));
        break;
      case 'ALT':
        ul = false;
        setText(value.toLowerCase().split('').map(letter => letter.match(/[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/) != null ? (ul = !ul, ul ? letter.toUpperCase() : letter.toLowerCase()) : letter).join(''));
        break;
      case 'INV':
        ul = true;
        setText(value.toLowerCase().split('').map(letter => letter.match(/[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/) != null ? (ul = !ul, ul ? letter.toUpperCase() : letter.toLowerCase()) : letter).join(''));
        break;
      case 'FLI':
        setText(value.split("").reverse().join(""));
        break;
    }
  }

  const menu = (value) => {
    setOption(value);
    change(text, value);
  }

  const counter = (type) => {
    if (!text)
      return '0';

    switch (type) {
      case 'letter':
        return text.replaceAll(' ', '').length;
      case 'space':
        return text.length - text.replaceAll(' ', '').length;
      case 'word':
        return text.split(' ').length;
      case 'line':
        return (text.match(/\n/g) || []).length + 1;
    }
  }

  return (
    <div className="site-wraper">
      <div className="site-center">
        <div className="header">
          <div>
            <h1 className="logo">String Converter</h1>
          </div>
          <div className="language-selector">
            <img src={require("./Images/brazil.png")} alt="Portugues do Brasil" onClick={() => setLanguage('PT-BR')} />
            <img src={require("./Images/eua.png")} alt="US English" onClick={() => setLanguage('EN-US')} />
          </div>
        </div>
        <div className="text-wraper">
          <div className='text-count'>
            <span>{translate('countLetter', language) + counter('letter')}</span>
            <span>{translate('countSpace', language) + counter('space')}</span>
            <span>{translate('countWord', language) + counter('word')}</span>
            <span>{translate('countLine', language) + counter('line')}</span>
          </div>
          <textarea value={text} onChange={(e) => change(e.target.value, option)} />
          <div className='text-options'>
            <span className={option === "UPP" ? 'text-option-sel' : 'text-option'} onClick={() => menu('UPP')}>{translate('upper', language)}</span>
            <span className={option === "LOW" ? 'text-option-sel' : 'text-option'} onClick={() => menu('LOW')}>{translate('lower', language)}</span>
            <span className={option === "CAP" ? 'text-option-sel' : 'text-option'} onClick={() => menu('CAP')}>{translate('capit', language)}</span>
            <span className={option === "ALT" ? 'text-option-sel' : 'text-option'} onClick={() => menu('ALT')}>{translate('altern', language)}</span>
            <span className={option === "INV" ? 'text-option-sel' : 'text-option'} onClick={() => menu('INV')}>{translate('inverse', language)}</span>
            <span className={option === "FLI" ? 'text-option-sel' : 'text-option'} onClick={() => menu('FLI')}>{translate('flip', language)}</span>
          </div>
          <div className=''>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
