import styled from 'styled-components';

import { BreakPoints } from '../../Assets/Lib/generalStyles';


export const PostsPage=styled.div`
    display:flex;
    justify-content:center;
    min-width:100vw;
    min-height:100vh;`
    ;

export const TitleWrapper=styled.div`
    display:flex;
    opacity:0.9;
    min-width:100%;
    border-radius:0px 0px 120px 120px;
    background: #FFF8FC;
    justify-content:center;
    align-items:center;
    height:1%;   
    `;

export const Title=styled.h1`
    color:black;
    font-size:30px;
    @media screen and (${BreakPoints.tablet}) {
      font-size:40px;
    };

    @media screen and (${BreakPoints.desktop}) {
      font-size:45px;
    };

  @media screen and (${BreakPoints.desktopLarge}) {
      font-size:50px;
    };`;

export const PostCardContainer=styled.div`
    display:grid;
    margin-top:50px;
    grid-template-rows: repeat(4,1fr);
    grid-template-columns: repeat(1,1fr);
    row-gap:50px;
    width:80%;
    height:80%;
    justify-items: center;
    position: absolute;
    align-self:center;


    @media screen and (${BreakPoints.mobileLarge}) {
        grid-template-rows: repeat(4,1fr);
        grid-template-columns: repeat(1,1fr);
        gap:20px;
      }

      @media screen and (${BreakPoints.tablet}) {
        grid-template-rows: repeat(3,1fr);
        grid-template-columns: repeat(2,1fr);
        gap:45px;
      }

      @media screen and (${BreakPoints.desktop}) {
        grid-template-rows: repeat(3,1fr);
        grid-template-columns: repeat(2,1fr);
        gap:60px;
      }

    @media screen and (${BreakPoints.desktopLarge}) {
        grid-template-rows: repeat(2,1fr);
        grid-template-columns: repeat(4,1fr);
        gap:20px;
        min-width:100%;
      }

     
    `;

export const SearchInputWrapper=styled.div`
    display:flex;
    position:absolute;
    width:70%;
    height:5%;
    @media screen and (${BreakPoints.mobileLarge}) {
      height:10%;
    }
    @media screen and (${BreakPoints.desktop}) {
      height:10%;
    }

  @media screen and (${BreakPoints.desktopLarge}) {
      width:20%;
      height:10%;
    }`;

export const SearchInput=styled.input`
    align-self:center;
    outline:none;
    background: #F8F8F8;
    background: linear-gradient(to bottom right, #F8F8F8, #FFF101);
    border-radius:26px;
    text-align:center;
    width:100%;
    height:100%;
    @media screen and (${BreakPoints.mobileLarge}) {
      height:50%;
    }

    @media screen and (${BreakPoints.tablet}) {
      height:35%;
    }

    @media screen and (${BreakPoints.desktop}) {
      height:35%;
    }

  @media screen and (${BreakPoints.desktopLarge}) {
      height:50%;
    }`
    ;

export const PaginateContainer=styled.div`
    display:flex;
    justify-content:flex-start;
    position:absolute;
    top:20px;
    align-self:flex-start;
    align-items:flex-end;
    width:120%;
    height:10%;

    @media screen and (${BreakPoints.tablet}) {
      width:100%;
      top:17px;
    }

    @media screen and (${BreakPoints.desktop}) {
      width:110%;
      top:10px;
    }

  @media screen and (${BreakPoints.desktopLarge}) {
      align-items:center;
      top:120px;
      width:95%;
      height:5%;
    }`;

