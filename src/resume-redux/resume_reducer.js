import {DELETE_WORKING_INFO,ADD_DETAILS, SOCIAL_MEDIA_INFO, EDUCATION_INFO,DELETE_EDUCATION_INFO,WORKING_INFO, TEMPLATE_NAME_RENDER, SKILLS_INFO, LANGUAGE_INFO} from './actionType'
const initialState={
    p_image:'',
    name:'',
    email:'',
    skills:[''],
    profession:'',
    address:'',
    phone:'',
    DOB:'',

    //social media info
    facebook:'',
    twitter:'',
    github:'',
    linkedin:'',
    youtube:'',
    instagram:'',

    //add education information
    university:[],
    brench_class:[],
    e_start:[],
    e_end:[],

    //add working information
    work_name:[],
    company_name:[],
    w_start:[],
    w_end:[],
    company_website:[],
    company_conenct:[],
    company_email:[],
    w_achievement:[],

    //add skills and language
    skills:[],
    language:[],

    //tepmlate name render
    t_name:''
}
export const r_reducer = (state=initialState, action) =>{
    switch(action.type){
        //add personal information
        case ADD_DETAILS:
            return{
                ...state,
                p_image:action.payload.p_image,
                name:action.payload.name,
                email:action.payload.email,
                phone:action.payload.phone,
                address:action.payload.address,
                DOB:action.payload.DOB,
                profession:action.payload.profession
            } 
        //add social media info
        case SOCIAL_MEDIA_INFO:
            return{
                ...state,
                facebook:action.payload.facebook,
                twitter:action.payload.twitter,
                github:action.payload.github,
                linkedin:action.payload.linkedin,
                youtube:action.payload.youtube,
                instagram:action.payload.instagram
            }
        //add education information   
        case EDUCATION_INFO:
            return{
                ...state,
                university:[...state.university,action.payload.university],
                brench_class:[...state.brench_class,action.payload.brench_class],
                e_start:[...state.e_start,action.payload.e_start],
                e_end:[...state.e_end,action.payload.e_end]
            } 
        //delete education information
        case DELETE_EDUCATION_INFO:
            var university = state.university;
            var university_index = university.splice(action.payload,1)
            delete university[university_index];
            //
            var brench_class = state.brench_class;
            var brench_class_index = brench_class.splice(action.payload,1);
            delete brench_class[brench_class_index];
            //
            var e_start = state.e_start;
            var e_start_index = e_start.splice(action.payload,1);
            delete e_start[e_start_index];
            //
            var e_end = state.e_end;
            var e_end_index = e_end.splice(action.payload,1);
            delete e_end[e_end_index];
            return{
                ...state,
                university:[...state.university],
                brench_class:[...state.brench_class],
                e_start:[...state.e_start],
                e_end:[...state.e_end]
            }    
        
        //add working information
        case WORKING_INFO:
            console.log("n-index",action.payload.n_index+1)
            return{
                ...state,
                work_name:[...state.work_name,action.payload.work_name], 
                company_name:[...state.company_name,action.payload.company_name],
                w_start:[...state.w_start,action.payload.w_start],
                w_end:[...state.w_end,action.payload.w_end], 
                c_website:[...state.company_website, action.payload.c_website], 
                c_contect:[...state.company_conenct, action.payload.c_contect], 
                c_email:[...state.company_email, action.payload.c_email],
                w_achievement:[...state.w_achievement,action.payload.w_achievement]
            }
        
        //delete working information
        case DELETE_WORKING_INFO:
            var work_name = state.work_name;
            var work_name_index = work_name.splice(action.payload.index,1);
            delete work_name[work_name_index];

            //
            var company_name = state.company_name;
            var company_name_index = company_name.splice(action.payload.index,1);
            delete company_name[company_name_index];

            //
            var w_start = state.w_start;
            var w_start_index = w_start.splice(action.payload.index,1);
            delete w_start[w_start_index];

            //
            var w_end = state.w_end;
            var w_end_index = w_end.splice(action.payload.index,1);
            delete w_end[w_end_index];

            //
            var w_achievement = state.w_achievement;
            var w_achievement_index = w_achievement.splice(action.payload.index,1);
            delete w_achievement[w_achievement_index];

            //
            var company_website = state.company_website;
            var company_website_index = company_website.splice(action.payload.index,1);
            delete company_website[company_website_index];

            //
            var company_conenct = state.company_conenct;
            var company_conenct_index = company_conenct.splice(action.payload.index,1);
            delete company_conenct[company_conenct_index];

            //
            var company_email = state.company_email;
            var company_email_index = company_email.splice(action.payload.index,1);
            delete company_email[company_email_index];

            return{
                ...state,
                work_name:[...state.work_name],
                company_name:[...state.company_name],
                w_start:[...state.w_start],
                w_end:[...state.w_end], 
                c_website:[...state.company_website], 
                c_contect:[...state.company_conenct], 
                c_email:[...state.company_email],
                w_achievement:[...state.w_achievement],
            }    
        
        //add skills
        case SKILLS_INFO:
            console.log("skills in reducer = ",action.payload.skills)
            return{
                ...state,
                skills:[...state.skills,action.payload.skills]
            }
        //add language
        case LANGUAGE_INFO:
            console.log("langugae in reducer = ",action.payload.language)
            return{
                ...state,
                language:[...state.language,action.payload.language]
            }    
        
        case TEMPLATE_NAME_RENDER:
            return{
                ...state,
                t_name:action.payload.t_name
            }    
        default:
            return state     
    }
}