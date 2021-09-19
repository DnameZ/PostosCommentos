import React from 'react';

import { Images } from '../../Assets/Lib/generalStyles';

import { PostsPage,
         TitleWrapper,
         Title,
         PostCardContainer,
         Header } from './PostsStyle';

import PostCard from '../../Components/PostCard/PostCard';

const Posts = () => {
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