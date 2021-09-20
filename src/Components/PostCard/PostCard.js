import React from 'react';
import classNames from 'classnames';
import { Images } from '../../Assets/Lib/generalStyles';


import { CardContainer,
    User,
    UserName,
    PostsContainer,
    Posts } from './PostCardStyle';


export function PostCard ({classes,children,...restProps}){
    return (  
        <CardContainer className={classNames("CardContainer",classes)} {...restProps}>
            {children}
        </CardContainer>
    );
}

PostCard.User=function PostCardUser({classes,...restProps})
{
    return(
        <User src={Images.User} className={classNames("PostCard__User")} {...restProps}/>
    )
}

PostCard.UserName=function PostCardUserName({children,classes,...restProps})
{
    return(
        <UserName className={classNames("PostCard__UserName")} {...restProps}>{children}</UserName>
    )
}

PostCard.PostsContainer=function PostCardPostsContainer({children,classes,...restProps})
{
    return(
        <PostsContainer className={classNames("PostCard__PostsContainer")} {...restProps}>{children}</PostsContainer>
    )
}

PostCard.Posts=function PostCardPosts({children,classes,...restProps})
{
    return(
        <Posts className={classNames("PostCard__Posts")} {...restProps}>{children}</Posts>
    )
}
 