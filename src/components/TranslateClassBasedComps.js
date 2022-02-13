import React from 'react';
import { withTranslation } from 'react-i18next'

class TranslateClassBasedComps extends React.Component {
    render(){
        const {t} = this.props;
        return <p>{t('myParagraph')}</p>
    }
}

export default withTranslation()(TranslateClassBasedComps);