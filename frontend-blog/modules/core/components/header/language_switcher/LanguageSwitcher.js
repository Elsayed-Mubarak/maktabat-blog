import styled from "@emotion/styled"
import { Button } from 'reactstrap'
import { i18n, withTranslation } from '../../../../../i18n'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'


function LanguageSwitcher() {

    return (
        <>
            <Button color="secondary" size="sm">English</Button>

        </>
    )
}

const LanguageSwitcherStyled = styled.div`
    button.is-active {
        background: #000;
        color: #fff;
     
    }
    button{
        width:50px;
        height:24px;
        border-radius:.5rem;
    }
`;

export default LanguageSwitcher
