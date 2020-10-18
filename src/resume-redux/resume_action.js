import {DELETE_WORKING_INFO,W_ACHIEVEMENT,ADD_DETAILS, SOCIAL_MEDIA_INFO, EDUCATION_INFO ,DELETE_EDUCATION_INFO, WORKING_INFO, TEMPLATE_NAME_RENDER, SKILLS_INFO, LANGUAGE_INFO } from './actionType'
//add personal info
export const add_details = (p_image,name,email,phone,address,DOB,profession) =>{
    return{
    type: ADD_DETAILS,
    payload:{'p_image':p_image,'name':name,'email':email,'phone':phone,'address':address,'DOB':DOB,'profession':profession}
}}

//add social media info
export const add_social_info = (facebook,twitter,github,linkedin,youtube,instagram) =>{
    return{
        type:SOCIAL_MEDIA_INFO,
        payload:{'facebook':facebook,'twitter':twitter,'github':github,'linkedin':linkedin,'youtube':youtube,'instagram':instagram}
    }
}

// add education information
export const add_education_info = (university,brench_class,e_start,e_end) =>{
    return{
        type:EDUCATION_INFO,
        payload:{'university':university,'brench_class':brench_class,'e_start':e_start,'e_end':e_end}
    }
}

// delete education information 
export const delete_education_info = (index) =>{
    return{
        type:DELETE_EDUCATION_INFO,
        payload:index
    }
}

//add working experience
export const add_working_info = (work_name, company_name, w_start, w_end, c_website, c_contect, c_email,w_achievement) =>{
    return{
        type:WORKING_INFO,
        payload:{'work_name':work_name, 'company_name':company_name, 'w_start':w_start, 'w_end':w_end, 'c_website':c_website, 'c_contect':c_contect, 'c_email':c_email,'w_achievement':w_achievement}
    }
}

//DELETE working information
export const delete_working_info = (index) =>{
    return{
        type:DELETE_WORKING_INFO,
        payload:{'index':index}
    }
}

//add skills inforamtion 
export const add_skills = (skills) =>{
    console.log("skills in action = ",skills)
    return{
        type:SKILLS_INFO,
        payload:{'skills':skills}
    }
}

//add language inforamtion 
export const add_language = (language) =>{
    console.log("language in action = ",language)
    return{
        type:LANGUAGE_INFO,
        payload:{'language':language}
    }
}

//template render action
export const add_template_name = (t_name)=>{
    return{
        type:TEMPLATE_NAME_RENDER,
        payload:{'t_name':t_name}
    }
}