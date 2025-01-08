import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_KEY;
const axiosClient=axios.create({
    baseURL:"http://localhost:1337/api",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})


const CreateNewResume=(data)=>axiosClient.post('/resumes',data);

const GetUserResumes=(userEmail)=>axiosClient.get('/resumes?filters[userEmail][$eq]='+userEmail);

const UpdateResumeDetail=(id,data)=>axiosClient.put('/resumes/'+id,data)

const GetResumeById=(id)=>axiosClient.get('/resumes/'+id+"?populate=*")

const DeleteResumeById=(id)=>axiosClient.delete('/resumes/'+id)

export default{
    CreateNewResume,
    GetUserResumes,
    UpdateResumeDetail,
    GetResumeById,
    DeleteResumeById
}