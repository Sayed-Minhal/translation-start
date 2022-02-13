import React from 'react';
import { withTranslation } from 'react-i18next'

class TextWithVariables extends React.Component {
    render(){
        const {t} = this.props;
        const hobby = "read"
        return <p>{t('myHobby',{hobby})}</p>
    }
}

export default withTranslation()(TextWithVariables);