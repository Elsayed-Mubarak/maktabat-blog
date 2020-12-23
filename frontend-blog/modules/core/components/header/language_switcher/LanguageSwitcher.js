import styled from "@emotion/styled"
import { Button } from 'reactstrap'
import { i18n, withTranslation } from '../../../../../i18n'
import { useContext, useState } from 'react'
import { I18nContext } from 'next-i18next'

function LanguageSwitcher() {
    const [title, setTitle] = useState('English');
    const changeLanguage = (lang) => {
        console.log("........language.....", lang);
        if (lang === 'English') {
            setTitle('Arabic')
        } else {
            setTitle('English')
        }
    }

    return (
        <>
            <Button style={{ color: '#2f2e8b' }} color="secondary" id={title} size="sm"
                onClick={(e) => changeLanguage(e.target.id.toString())}>{title}
            </Button>

        </>
    )
}



export default LanguageSwitcher
