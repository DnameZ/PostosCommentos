import React,{useEffect,useContext,useState} from 'react';
import ReactPaginate from "react-paginate"; 
import { Context } from '../../Context/Context';
import {getAllPosts} from "../../Api/GetPosts";
import { getUseres } from '../../Api/GetPosts';
import { PostCard } from '../../Components/PostCard/PostCard';
import { useHistory } from 'react-router';

import { 
    PostsPage,
    TitleWrapper,
    Title,
    PostCardContainer,
    SearchInputWrapper,
    SearchInput } from './PostsStyle';

const Posts = () => {
    const {SetUsers}=useContext(Context);
    const [isLoading,SetIsLoading]=useState(true);
    const [pageNum,SetPageNum]=useState(0);
    const [text,SetText]=useState("");
    const TaskCardPerPage=8;
    const History=useHistory();
    const {GetUserName}=useContext(Context);
    const PageVisited=pageNum*TaskCardPerPage;
    const pageCount=Math.ceil(100/TaskCardPerPage);
    let [PaggedPosts]=useState([]);
    let {Posts,SetPosts}=useContext(Context);
    let {SetId}=useContext(Context);
    let {SetUserId}=useContext(Context);



    const ChangePage=({selected})=>
    {
        SetPageNum(selected);
    }

    const SetAllPosts=()=>
    {
         getAllPosts().then((result)=>{
            SetPosts(result);
            SetIsLoading(false);
        })
    }

    const SetAllUsers= ()=>
    {
            getUseres().then((result)=>{
            SetUsers(result);
        })
    }

    const hadleInputChange=(InputValue)=>
    {
        SetText(InputValue.target.value);
    }

    let filteredData=Posts.filter((post)=>
    {
        if(text.toLowerCase()==="")
            return Posts
        else if (post.body.includes(text))
            return post;
        else if(GetUserName(post.userId).toLowerCase().includes(text .toLowerCase()))
            return GetUserName(post.userId);
        return null;
    })

    const GetId=(ID,userId)=>
    {
        SetId(ID);

        SetUserId(userId);

        History.push(`/post/${ID}`);
    }


    useEffect(()=>
    {
        async function fetchData()
        {
            await SetAllPosts();
            await SetAllUsers();
        }
        fetchData();
    },[SetPosts],[SetAllUsers])

     PaggedPosts=filteredData.slice(PageVisited,PageVisited+TaskCardPerPage);

    return ( 
        <PostsPage>
            <TitleWrapper> <Title>Postos</Title> </TitleWrapper>
            <SearchInputWrapper> <SearchInput placeholder={"Enter search keyword"} onChange={hadleInputChange} type="text"/> </SearchInputWrapper>

            <PostCardContainer>
                 {!isLoading ? 
                    PaggedPosts.map((post,index) => (
                    <PostCard isPage={"/posts"} key={index} onClick={()=>GetId(post.id,post.userId)}>
                        <PostCard.User/>
                        <PostCard.UserName> {GetUserName(post.userId)}</PostCard.UserName>
                        <PostCard.PostsContainer >
                            <PostCard.Posts>{post.body}</PostCard.Posts>
                        </PostCard.PostsContainer>
                    </PostCard>
                )) : 
                    <p>isLoading</p>
                }
                 
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