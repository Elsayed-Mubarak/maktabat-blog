import styled from "@emotion/styled"

function LanguageSwitcher() {

    return (
        <LanguageSwitcherStyled>
            <button type="button" onClick={() => { ar }}></button>
            <button type="button" onClick={() => { en }}></button>
        </LanguageSwitcherStyled>
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
