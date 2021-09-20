import React,{useEffect,useContext,useState} from 'react';
import ReactPaginate from "react-paginate"; 
import { Images } from '../../Assets/Lib/generalStyles';
import { Context } from '../../Context/Context';
import { getAllPosts } from '../../Api/GetPosts';
import { PostCard } from '../../Components/PostCard/PostCard';

import { 
    PostsPage,
    TitleWrapper,
    Title,
    PostCardContainer,
    SearchInputWrapper,
    SearchInput } from './PostsStyle';

const Posts = () => {
    const {Posts,SetPosts}=useContext(Context);
    const [pageNum,SetPageNum]=useState(0);
    const [text,SetText]=useState("");
    const TaskCardPerPage=8;
    const PageVisited=pageNum*TaskCardPerPage;
    const pageCount=Math.ceil(100/TaskCardPerPage);
    let [PaggedPosts]=useState([]);


    const ChangePage=({selected})=>
    {
        SetPageNum(selected);
    }


    const SetAllPosts=()=>
    {
        getAllPosts().then((result)=>{
            SetPosts(result);
        })
    }

    const hadleInputChange=(InputValue)=>
    {
        SetText(InputValue.target.value);
    }

    let filteredData=Posts.filter((post)=>
    {
        if(text==="")
            return Posts
        else if (post.title.includes(text))
            return post;
        else 
            return null;
    })

    useEffect(()=>
    {
        SetAllPosts();
    },[SetPosts])

     PaggedPosts=filteredData.slice(PageVisited,PageVisited+TaskCardPerPage);

    return ( 
        <PostsPage>
            <TitleWrapper> <Title>Postos</Title> </TitleWrapper>
            <SearchInputWrapper> <SearchInput placeholder={"Enter search keyword"} onChange={hadleInputChange} type="text"/> </SearchInputWrapper>

            <PostCardContainer>
                {PaggedPosts.map((post,index) => (
                    <PostCard key={index}>
                        <PostCard.User/>
                        <PostCard.PostsContainer>
                            <PostCard.Posts>{post.title}</PostCard.Posts>
                        </PostCard.PostsContainer>
                    </PostCard>
                ))}
            </PostCardContainer>


            <ReactPaginate
              previousLabel={"Back"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={ChangePage}
              containerClassName={"paggBttn"}
              previousLinkClassName={"prevBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paggDis"}
              activeClassName={"paggAcc"}
              />

        </PostsPage>
     );
}
 
export default Posts;