import {styled} from "styled-components"

export const HeaderButton = styled.div`
`

export const HeaderButtonContent = styled.div `
display: flex;
align-items: center;
justify-content: space-between;

nav{
    display: flex;
    align-items: center;
    gap:52px

    a{
font-weight: 600;
font-size: 14px;
line-height: 30px;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
text-transform: uppercase;

    }
}

div{
    display: flex;
    align-items: center;
    gap:30px

    button{
        background-color: none ;
        border: none;
    }
}

`
