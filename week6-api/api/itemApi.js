import api from "./axios";

export const itemApi = {
    getAllItems : async(type)=>{
        try{
            const response = await api.get(`${type}`);
            return {
                data:response.data
            }
        }catch(error){
            return{
                error:error.response
            }
        }
    },

    postItem: async(type)=>{
        try{
            const response = await api.post(`${type}`);
            return{
                data:response.data
            }
        }catch(error){
            return{
                error:error.response
            }
        }
    },

    deleteItem: async(type,id)=>{
        try{
            const response = await api.delete(`${type}/${id}`);
            return{
                data:response.data
            }
        }catch(error){
            return{
                error:error.response
            }
        }
    }
}