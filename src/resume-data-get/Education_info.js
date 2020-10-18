import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux';
import './styles/Education_info.css';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {add_education_info,delete_education_info} from '../resume-redux/resume_action';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
function Education_info(props) {
    const [work, setwork] = useState(false)
    const [university, setuniversity] = useState('');
    const [brench_class, setbrench_class] = useState('');
    const [e_start, sete_start] = useState('');
    const [e_end, sete_end] = useState('');
    const [edit_info, setedit_info] = useState(false)
    function edit_education_info(index,university,brench_class,e_start,e_end){
            setuniversity(university);
            setbrench_class(brench_class);
            sete_start(e_start);
            sete_end(e_end);
            setedit_info(true);
            props.delete_education_info(index)
        }  
    return (
        <div className="education_info">
        
            <div className="show-added-info">
                {work ?
                        props.university.map((university,index)=>(
                            <div className="education-data">
                                <div className="education-data-top">
                                    <span>{university}</span>
                                    <div className="edit-icon" 
                                        onClick={
                                            ()=>edit_education_info(index,university,props.brench_class[index],props.e_start[index],props.e_end[index])
                                        }>
                                        <EditIcon fontSize="large" />
                                    </div>
                                    <div className="delete-icon" onClick={()=>props.delete_education_info(index)} >
                                        <DeleteIcon fontSize="large" /> 
                                    </div>
                                </div>
                                <span>{props.brench_class[index]}</span><br/>
                                <span>{props.e_start[index]}-{props.e_end[index]}</span>
                                <hr />
                            </div>
                        ))
                    :
                        <span>To add education information first you will have to add all information in below form box and after that click Add button.you can add multiple education course/class.....</span> 
                } 
            </div>
            <div className="education-form-box">
                { edit_info && 
                    <div className="row mb-4">
                        <div className="col-md-12 text-center">
                            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                                <strong>Hello user!</strong> after edit information you will have to press add button.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                }           
                <div className="row ">
                    <div className="col-md-2 text-right">
                        <AccountBalanceIcon fontSize="large" />
                    </div>
                    <div className="col-md-9">
                        <input required className="form-control" type="text" onChange={(e)=>{setuniversity(e.target.value)}} value={university} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your university full name Ex:- rgpv, davv, mp board, cbsc bord.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2 text-right">
                        <SchoolIcon fontSize="large" />
                    </div>
                    <div className="col-md-9">
                        <input required className="form-control" type="text"  onChange={(e)=>{setbrench_class(e.target.value)}} value={brench_class} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your course/class name Ex:- computer science , 10th, 12th.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2 text-right">
                        <ScheduleIcon fontSize="large" />
                    </div>
                    <div className="col-md-4">
                        <input required className="form-control" type="text" onChange={(e)=>{sete_start(e.target.value)}} value={e_start} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your education start month and year Ex:- 08/2017.</small>
                    </div>
                    <div className="col-md-1 text-right">
                        <ScheduleIcon fontSize="large" />
                    </div>
                    <div className="col-md-4">
                        <input required className="form-control" type="text" onChange={(e)=>{sete_end(e.target.value)}} value={e_end} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your education end month and year Ex:- 06/2020.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-sm btn-lg btn-block" onClick={()=>{
                                        props.add_education_info(university,brench_class,e_start,e_end);
                                        setwork(true)
                                        setuniversity('')
                                        setbrench_class('')
                                        sete_end('')
                                        sete_start('')
                                    }} >Add</button>
                    </div>    
                    <div className="col-md-6">
                        <Link className="btn btn-info btn-sm btn-lg btn-block" to='/woking_info' >Next / Skip</Link>
                    </div>    
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        university:state.university,
        brench_class:state.brench_class,
        e_start:state.e_start,
        e_end:state.e_end
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        add_education_info:function(university,brench_class,e_start,e_end){
            dispatch(add_education_info(university,brench_class,e_start,e_end))
        },
        delete_education_info:function(university,brench_class,e_start,e_end){
            dispatch(delete_education_info(university,brench_class,e_start,e_end))
        }   
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Education_info)
