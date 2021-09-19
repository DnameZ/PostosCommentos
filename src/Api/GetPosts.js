import ApiOrigin from "./Api";


export const getAllPosts=()=>
{
    return fetch(`${ApiOrigin}/posts`).then((result)=>result.json());
}

export const getPostById=(ID)=>
{
    return fetch(`${ApiOrigin}/posts/${ID}`).then((result)=>result.json);
}