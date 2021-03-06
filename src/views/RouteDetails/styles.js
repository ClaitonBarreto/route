import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const MyGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MyButton = styled.div`
    margin-top: 60px;
    background-color: #ED6A5A;
    border-radius: 10px;
    & * {color: white;}
`;

export const BottomGridContainer = styled(Grid)`
    @media (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const Container = styled(Grid)`
    @media (max-width: 960px) {
        margin-top: 1.5rem;
    }
`

export const MyTextInput = styled.div`
    margin: 5px 0px 20px 0px;
    width: 100%;

    & .MuiInput-underline:before {
        border-bottom: ${({theme}) => `1px solid ${theme.inputUnderlineColor}`}
    }

    & .MuiFormLabel-root {
        color: ${({theme}) => theme.inputLabel};
    }

    & .MuiFormHelperText-root {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiTypography-colorTextSecondary {
        color: ${({theme}) => theme.inputLabel}
    }

    & .MuiInputBase-input {
        color: ${({theme}) => theme.inputLabel}
    }
    
    & .Mui-focused {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & .Mui-focused * {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & label.Mui-focused {
        color: ${({theme}) => theme.selectedInputColor}
    }
    & .MuiInput-underline:after {
        border-bottom-color: ${({theme}) => theme.selectedInputColor}
    }
`;