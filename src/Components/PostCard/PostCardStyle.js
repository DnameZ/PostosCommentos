import styled from 'styled-components';

import { BreakPoints } from '../../Assets/Lib/generalStyles';

import { Images } from '../../Assets/Lib/generalStyles';


export const CardContainer=styled.div`
    display:flex;
    cursor:pointer;
    width:100%;
    height:100%;
    justify-content:center;
    background: #FFFC58;
    background: linear-gradient(225deg, transparent 20px, #FFFD88 1px);
    align-self:center;

    @media screen and (${BreakPoints.mobileLarge}) {
        width:70%;
        height:100%;
     }

    @media screen and (${BreakPoints.tablet}) {
        width:90%;
        height:100%;
     }

    @media screen and (${BreakPoints.desktop}) {
        width:90%;
        height:90%;
     }

    @media screen and (${BreakPoints.desktopLarge}) {
       width:70%;
       height:80%;
    }
    `;

export const User=styled.img`
    position:absolute;
    align-self:flex-end;
    height:35px;

    @media screen and (${BreakPoints.mobileLarge}) {
        height:35px;
     }

    @media screen and (${BreakPoints.tablet}) {
        height:40px;
     }

    @media screen and (${BreakPoints.desktop}) {
        height:50px;
     }

    @media screen and (${BreakPoints.desktopLarge}) {
       
    }
   `;

export const UserName=styled.h3`
    width:0%;
    position:absolute;
    font-size:10px;
    align-self:flex-end;
    @media screen and (${BreakPoints.desktopLarge}) {
        font-size:20px;
     }`;

export const PostsContainer=styled.div`
    display:flex;
    justify-content:center;
    width:80%;
    height:80%;
    word-wrap: break-word;
    word-break: break-word;
    overflow-y: auto;
    overflow-x: hidden;

     &::-webkit-scrollbar-thumb
     {
        width:5px;
        border-radius:6px;
        background-color:white;
     }

    &::-webkit-scrollbar
    {
        width:13px;
        border-radius: 100px;
        background: #8070D4;
        border: 6px solid rgba(0,0,0,0.2);
    }
    white-space: pre-wrap;`;

export const Posts=styled.h4`
    line-height:20px;
    font-size:14px;

    @media screen and (${BreakPoints.tablet}) {
        font-size:16px;
     }
     
    
    @media screen and (${BreakPoints.desktop}) {
        font-size:21px;
     }
     
     @media screen and (${BreakPoints.desktopLarge}) {
        font-size:15px;
     }`;