import styled from 'styled-components';

import { BreakPoints } from '../../Assets/Lib/generalStyles';


export const PostPage=styled.div`
    display:flex;
    justify-content:center;
    width:100vw;
    height:100vh;`;

export const CommentContainer=styled.div`
    display:flex;
    justify-content:center;
    position:absolute;
    align-self:flex-end;
    width:50%;
    height:40%;`;

export const Comments=styled.h3`
    align-self:center;
    font-size:15px;

    @media screen and (${BreakPoints.tablet}) {
        font-size:20px;
      }
  
      @media screen and (${BreakPoints.desktop}) {
        font-size:20px;
      }
  
    @media screen and (${BreakPoints.desktopLarge}) {
        font-size:20px;
      }`;

export const Email=styled.h4`
    position:absolute;
    align-self:flex-end;
    font-size:10px;

    @media screen and (${BreakPoints.tablet}) {
        font-size:20px;
      }
  
      @media screen and (${BreakPoints.desktop}) {
        font-size:20px;
      }
  
    @media screen and (${BreakPoints.desktopLarge}) {
        font-size:20px;
      }`;
export const Name=styled.h5`
    position:absolute;
    align-self:flex-start;
    font-size:10px;

    @media screen and (${BreakPoints.tablet}) {
        font-size:20px;
      }
  
      @media screen and (${BreakPoints.desktop}) {
        font-size:20px;
      }
  
    @media screen and (${BreakPoints.desktopLarge}) {
        font-size:20px;
      }`;