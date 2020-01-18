import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
    border-bottom: 1px solid #d9dadc;
    padding: 25px 0 20px;
    margin-bottom: 30px;
    text-align: center;
`;

export const Icon = styled.img`
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: 100%;
    display: inline-block;
    max-width: 100%;
    width: 200px;
`;

export const Content = styled.div`
    text-align: center;
    margin: auto;
    width: 450px;
`;

export const Text = styled.text`
    font-family: inherit;
    font-weight: 900;
    line-height: 1.1;
    color: inherit;
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    margin-top:10px;
`;

export const ButtonFacebook = styled.button`
    color: #fff;
    background-color: #3b5998;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    display: block;
    width: 450px;
    font-weight: 700;
    outline:none;
`;

export const Divider = styled.div`
    border-top: 1px solid #d9dadc;
    display: block;
    line-height: 1px;
    margin: 15px 0;
    position: relative;
    text-align: center;
    width:450px;
`;

export const Strong = styled.strong`
    font-size: 12px;
    letter-spacing: 1px;
    padding: 0 20px;
    text-transform: uppercase;
    font-weight: 700;
    background: #fff;
`;

export const StyledForm = styled.form``;

export const StyledInput = styled.input`
    outline:none;
    font-size: inherit;
    width: 450px;
    height: 26px;
    padding: 6px 12px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9dadc;
    border-radius: 0;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
       color: #d9dadc;
    }
    &::-moz-placeholder { /* Firefox 19+ */
       color: #d9dadc;
    }
    &:-ms-input-placeholder { /* IE 10+ */
       color: #d9dadc;
    }
    &:-moz-placeholder { /* Firefox 18- */
       color: #d9dadc;
    }
`;

export const ActionsListerners = styled.div`
    width: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: baseline;
`;

export const Remider = styled.text`
    font-weight: 400;
    margin-bottom: 0;
    cursor: pointer;
    color: #919496;
`;

export const Check = styled.div`
    background-size: 16px;
    display: inline-block;
    vertical-align: middle;
    width: 1.25em;
    height: 1.25em;
    background-repeat: no-repeat;
    background-position: 50%;
    background-color: #1db954;
    border-color: #1db954;
    border-radius: 4px;
    color:#fff!important;
`;

export const ButtonLogin = styled.button`
    color: #fff;
    background-color: #1db954;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    display: block;
    width: 210px;
    font-weight: 700;
    outline:none;

    &:hover {
        color: #fff;
        background-color: #1ed760;
    }
`;


export const ForgotPassword = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
    color: #1db954;
`;
