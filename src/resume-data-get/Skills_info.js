import React,{useState} from 'react'
import './styles/skills_info.css';
import {add_skills,add_language} from '../resume-redux/resume_action';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import {connect} from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import {Link} from 'react-router-dom'
function Skills_info(props) {
    const [skills, setskills] = useState('Enter your skills here');
    const [language, setlanguage] = useState('Enter youe language')
    return (
        <div className="skills-page">
            <div className="skills-box">
                <div className="row">
                    <div className="col-md-6">
                        <div className="skills-form-box">
                            <div className="skills-form-box-top">
                                <span>Skills</span>
                                <div className="skills-input">
                                    <input onChange={(e)=>{setskills(e.target.value)}} type="text" className="form-control" value={skills} />
                                    <small id="emailHelp" class="form-text text-muted">Please enter your skills Ex:- C, Python, HTML, Artificial Intelligence, Web Developer,Team Work.</small>
                                </div>
                            </div>
                            <div className="skills-star">
                                <div className="star-option">
                                    <StarBorderIcon fontSize="large"  />
                                </div>
                                <div className="star-option" >
                                    <StarBorderIcon fontSize="large" />
                                </div>
                                <div className="star-option" >
                                    <StarBorderIcon fontSize="large" />
                                </div>
                                <div className="star-option">
                                    <StarBorderIcon fontSize="large" />
                                </div>
                                <div className="star-option" >
                                    <StarBorderIcon fontSize="large" />
                                </div>
                            </div>
                            <div className="skills-box-button">
                                <button className="button-f" onClick={()=>props.add_skills(skills)}>Add</button>
                                <button className="button-s" onClick={()=>setskills('')}>Clear</button>
                            </div>
                        </div>
                        <div className="show-skills-info">
                            {props.get_skills.map((data)=>(
                                <div className="show-skills-info-box">
                                    <span>{data}</span>
                                    <div className="show-skills-icon">
                                        <div className="edit-icon" style={{paddingRight:"25px"}}>
                                            <EditIcon  />
                                        </div>
                                        <div className="close-icon">
                                            <CancelIcon />
                                        </div>
                                    </div> 
                                </div>    
                            ))}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="language-form-box">
                            <div className="language-form-box-top">
                                <span>Language</span>
                                <input onChange={(e)=>{setlanguage(e.target.value)}} type="text" className="form-control" value={language} />
                            </div>
                            <div className="language-box-button">
                                <button className="button-f" onClick={()=>{props.add_language(language)}}>Add</button>
                                <button className="button-s" onClick={()=>setlanguage('')}>Clear</button>
                            </div>
                        </div>
                        <div className="show-skills-info">
                            {props.get_language.map((data)=>(
                                <div className="show-skills-info-box">
                                    <span>{data}</span>
                                    <div className="show-skills-icon">
                                        <div className="edit-icon" style={{paddingRight:"25px"}}>
                                            <EditIcon  />
                                        </div>
                                        <div className="close-icon">
                                            <CancelIcon />
                                        </div>
                                    </div> 
                                </div>    
                            ))}
                        </div>
                    </div>
                </div>
                <hr />
                <div className="next-button">
                <Link className="n-button" to={props.t_name} >Next / Skip</Link>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        get_skills:state.skills,
        get_language:state.language,
        t_name:state.t_name
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        add_skills:function(skills){
            dispatch(add_skills(skills))
        },
        add_language:function(language){
            dispatch(add_language(language))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Skills_info)
