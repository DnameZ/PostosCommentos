import React,{useEffect,useContext} from 'react';

import { Images } from '../../Assets/Lib/generalStyles';

import { PostsPage,
         TitleWrapper,
         Title,
         PostCardContainer, } from './PostsStyle';


import { Context } from '../../Context/Context';


import { getAllPosts } from '../../Api/GetPosts';
import PostCard from '../../Components/PostCard/PostCard';

const Posts = () => {
    const {Posts,SetPosts}=useContext(Context);
    const SetAllPosts=()=>
    {
        getAllPosts().then((result)=>{
            SetPosts(result);
        })
    }

    useEffect(()=>
    {
        SetAllPosts();
    },[SetPosts])

    return ( 
        <PostsPage style={{backgroundImage:`url(${Images.BackGroundImage})`}}>
            <TitleWrapper>
                <Title>Postos</Title>
            </TitleWrapper>

            <PostCardContainer>
                <PostCard/>

                <PostCard/>

                <PostCard/>

                <PostCard/>

                <PostCard/>

                <PostCard/>
            </PostCardContainer>

        </PostsPage>
     );
}
 
export default Posts;