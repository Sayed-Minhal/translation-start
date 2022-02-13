import React from 'react';
import { withTranslation } from 'react-i18next'

class LanguageToggle extends React.Component {
    render(){
        const {i18n} = this.props;
        return <div><button onClick={()=>i18n.changeLanguage('en_UK')}>UK English</button> <button  onClick={()=>i18n.changeLanguage('en_US')}>US English</button></div>
    }
}

export default withTranslation()(LanguageToggle);