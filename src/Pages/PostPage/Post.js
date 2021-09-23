import React,{useContext, useState,useEffect} from 'react';
import { PostCard } from '../../Components/PostCard/PostCard';


import { PostPage } from './PostStyle';
import { Context } from '../../Context/Context';

import { CommentContainer,Comments,Email,Name } from './PostStyle';

import { getComments } from '../../Api/GetPosts';

import PropTypes from 'prop-types';



const Post = ({propsmessage}) => {
    
    const componentName=`${Post.name}`;
    const {GetUserName}=useContext(Context);
    const [Coments,SetComments]=useState([]);
    let {Posts}=useContext(Context);
    let {UserId}=useContext(Context);
    let {Id}=useContext(Context);

    const FilterPosts=(id)=>
    {
        let newPost=Posts.find((post)=>post.id===id);

        return newPost?.body;
    }

    const FilterComments=(id,part)=>
    {
        let newComments=Coments.find((comments)=>comments.id===id);

        if(part==="body")
            return newComments?.body
        else if (part==="email")
            return newComments?.email; 
        else if(part==="name")
            return newComments?.name;
        else
            return null;
    }

    useEffect(()=>
    {
        getComments().then((result)=>SetComments(result));

        console.log(propsmessage + " " + componentName);
    },[SetComments])

    return ( 
        <PostPage>
                <PostCard isPage={"/post"} classes={"CardContainerPost"}>
                    <PostCard.UserName>{GetUserName(UserId)}</PostCard.UserName>

                    <PostCard.PostsContainer>
                        <PostCard.Posts>{FilterPosts(Id)}</PostCard.Posts>
                    </PostCard.PostsContainer>
                    <CommentContainer>
                        <Name>{FilterComments(Id,"name")}</Name>
                        <Comments>{FilterComments(Id,"body")}</Comments>
                        <Email>{FilterComments(Id,"email")}</Email>
                    </CommentContainer>

                </PostCard>
        </PostPage>
     );
}


Post.propTypes={
    propsmessage:PropTypes.string.isRequired
}

PostCard.propTypes={
    isPage:PropTypes.string.isRequired,
    classes:PropTypes.string
}


 

export default Post;