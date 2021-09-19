import React from 'react';

import { CardContainer,
         User,
         UserName,
         PostsContainer,
         Posts } from './PostCardStyle';

import { Images } from '../../Assets/Lib/generalStyles';

const PostCard = () => {
    return (  
        <CardContainer>
            <User src={Images.User}/>
            <PostsContainer>
                <Posts>Ja sam Marko i danas je divan dan, je bas je divan dan bas bas,
                Ja sam Marko i danas je divan dan, je bas je divan dan bas bas,
                Ja sam Marko i danas je divan dan, je bas je divan dan bas bas,
                Ja sam Marko i danas je divan dan, je bas je divan dan bas bas,
                Ja sam Marko i danas je divan dan, je bas je divan dan bas bas :D </Posts>
            </PostsContainer>
        </CardContainer>
    );
}
 
export default PostCard;