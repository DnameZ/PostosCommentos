import ApiOrigin from "./Api";


 export  const  getAllPosts= ()=>
{
   return  fetch(`${ApiOrigin}/posts`).then((result)=>result.json());
}

export const getComments=()=>
{
    return fetch(`${ApiOrigin}/comments`).then((result)=>result.json());
}

export const getUseres=()=>
{
    return fetch(`${ApiOrigin}/users`).then((result)=>result.json());
}
