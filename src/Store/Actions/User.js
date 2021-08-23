export const addUser=(user)=>{
   return{
       type:"ADD_user",
       payload:user
   };
};

export const deleteUser=(id)=>{
    return{
        type:"ADD_user",
        payload:id
    };
 };