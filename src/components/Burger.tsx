import styled from "styled-components";

export const Label = styled.label `
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 20px;
    user-select: none;
`

export const Input = styled.input `
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked {
        
    }
`

export const Div = styled.div `
    position: relative;
    top: 0;
    left: 0;
    height: 1.3em;
    width: 1.3em;
`
export const Span = styled.span `
    width: 32px;
    height: 2px;
    background-color: white;
    position: absolute;
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;

    &:nth-child(1) {
        top: 10%;
    }

    &:nth-child(2) {
    top: 50%;
    }

    &:nth-child(3) {
    top: 90%;
    }
`

export const Burger = () => {
    return (
        <Label>
            <Input></Input>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </Label>
    )
}