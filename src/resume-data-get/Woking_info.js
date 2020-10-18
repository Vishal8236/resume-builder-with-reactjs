import React, { useState } from 'react'
import './styles/Woking_info.css';
import ApartmentIcon from '@material-ui/icons/Apartment';
import WorkIcon from '@material-ui/icons/Work';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LanguageIcon from '@material-ui/icons/Language';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { connect } from 'react-redux';
import { add_working_info,w_achievement_add,delete_working_info } from '../resume-redux/resume_action';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
function Woking_info(props) {
    const [achievement, setachievement] = useState(false);
    const [additional_info, setadditional_info] = useState(false);
    const [work_name, setwork_name] = useState('');
    const [company_name, setcompany_name] = useState('');
    const [w_start, setw_start] = useState('');
    const [w_end, setw_end] = useState('');
    const [c_website, setc_website] = useState('');
    const [c_contect, setc_contect] = useState('');
    const [c_email, setc_email] = useState('');
    
    /////////////////////////////////////////////////////
    const [get_achievement, setget_achievement] = useState('enter your achievements and tasks here and after fill achievement click add button.And you can add multiple achievements and tasks.')
    const [w_achievement, setw_achievement] = useState([]);
   
    return (
        <div className="working-info" >
            <div className="working-info-show">
                {props.work_name.map((w_name, index1) => (
                    <div>
                        <div className="working-data-top">
                            <span>{w_name}</span>
                            <div className="delete-icon" onClick={()=>props.delete_working_info(index1)} >
                                <DeleteIcon fontSize="large" /> 
                            </div>
                        </div>
                        <div className="working-data-center">
                            <div className="woking-c-name">{props.company_name[index1]}</div>
                            {/* <div className=""></div> */}
                            <div className="working-start-end">{props.w_start[index1]}/{props.w_end[index1]}</div>
                        </div>
                        <div>
                            {props.w_achievement[index1].map((w_tasks)=>(
                                <li>
                                    {w_tasks}
                                </li>
                            ))}
                        </div>
                        <hr />  
                    </div>
                ))}
            </div>
            <div className="working-info-form mt-4">
                <div className="row">
                    <div className="col-md-2 text-right">
                        <WorkIcon fontSize="large" />
                    </div>
                    <div className="col-md-9">
                        <input value={work_name} type="text" className="form-control" onChange={(e) => setwork_name(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your profession Ex:- Software Developer, Web designer, Network Administrator, Data Analytics.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2 text-right">
                        <ApartmentIcon fontSize="large" />
                    </div>
                    <div className="col-md-9">
                        <input value={company_name} type="text" className="form-control" onChange={(e) => setcompany_name(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your working company name Ex:- Google, IBM, Amazon, TCS.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-2 text-right">
                        <ScheduleIcon fontSize="large" />
                    </div>
                    <div className="col-md-4">
                        <input value={w_start} required className="form-control" type="text" onChange={(e) => setw_start(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your working start month and year Ex:- 08/2017.</small>
                    </div>
                    <div className="col-md-1 text-right">
                        <ScheduleIcon fontSize="large" />
                    </div>
                    <div className="col-md-4">
                        <input value={w_end} required className="form-control" type="text" onChange={(e) => setw_end(e.target.value)} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your working end month and year Ex:- 06/2020. If you currently present in company type present.</small>
                    </div>
                </div>
                <div className="mt-4 achivement-box">
                    <div className="row achivement-top">
                        <div className="achivement-title">
                            <span>Achievements/Tasks</span>
                        </div>
                        <div className="achivement-logo">
                            {achievement ?
                                <div onClick={() => setachievement(false)}>
                                    <ArrowDropUpIcon fontSize="large" />
                                </div>
                                :
                                <div onClick={() => setachievement(true)}>
                                    <ArrowDropDownIcon fontSize="large" />
                                </div>
                            }
                        </div>
                    </div>
                    {achievement &&
                        <div className="achivement-bottom mt-3">
                            <textarea rows="4" className="form-control" onChange={(e) => setget_achievement(e.target.value)} value={get_achievement} />
                            <div className="achivement-bottom-button">
                            {/* setw_achievement([...w_achievement, get_achievement]) */}
                                <button className="btn btn-info" onClick={() => {setw_achievement([...w_achievement, get_achievement]); setget_achievement('')}  }>add</button>
                                <button className="btn btn-danger" onClick={() => setget_achievement('')}>clear</button>
                            </div>
                        </div>
                    }
                </div>
                {/* {w_achievement} */}
                <div className="addition-info mt-4">
                    <div className="row additional-info-box">
                        <div className="additional-info-title">
                            <span>Additional Information</span>
                        </div>
                        <div className="additional-info-logo" >
                            {additional_info ?
                                <div onClick={() => setadditional_info(false)}>
                                    <ArrowDropUpIcon fontSize="large" />
                                </div>
                                :
                                <div onClick={() => setadditional_info(true)}>
                                    <ArrowDropDownIcon fontSize="large" />
                                </div>
                            }
                        </div>
                    </div>
                    {additional_info &&
                        <div className="additional-info-bottom mt-3">
                            <div className="row additional-info-bottom-box">
                                <div className="col-md-2 text-center pt-1">
                                    <LanguageIcon fontSize="large" />
                                </div>
                                <div className="col-md-9">
                                    <input value={c_website} className="form-control" type="text" placeholder="" onChange={(e) => setc_website(e.target.value)} />
                                    <small class="form-text text-muted">Please enter your working company website this is optional field.</small>
                                </div>
                            </div>
                            <div className="row additional-info-bottom-box mt-4">
                                <div className="col-md-2 text-center pt-1">
                                    <ContactPhoneIcon fontSize="large" />
                                </div>
                                <div className="col-md-9">
                                    <input value={c_contect} className="form-control" type="text" placeholder="" onChange={(e) => setc_contect(e.target.value)} />
                                    <small class="form-text text-muted">Please enter your working company contect number this is optional field.</small>
                                </div>
                            </div>
                            <div className="row additional-info-bottom-box mt-4">
                                <div className="col-md-2 text-center pt-1">
                                    <ContactMailIcon fontSize="large" />
                                </div>
                                <div className="col-md-9">
                                    <input value={c_email} className="form-control" type="text" placeholder="" onChange={(e) => setc_email(e.target.value)} />
                                    <small class="form-text text-muted">Please enter your working company email this is optional field.</small>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <button className="btn btn-primary btn-sm btn-lg btn-block" onClick={() => {                                
                                props.add_working_info(work_name, company_name, w_start, w_end, c_website, c_contect, c_email,w_achievement);
                                setwork_name('')
                                setcompany_name('')
                                setw_start('')
                                setw_end('')
                                setc_website('')
                                setc_contect('')
                                setc_email('')
                                setw_achievement([]);
                            }}>Submit</button>
                    </div>
                    <div className="col-md-6">
                        <Link className="btn btn-info btn-sm btn-lg btn-block" to='/skills_info' >Next / Skip</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        work_name: state.work_name,
        company_name: state.company_name,
        w_start: state.w_start,
        w_end: state.w_end,
        w_achievement: state.w_achievement,
    }
}
const mapDiapatchToProps = dispatch => {
    return {
        add_working_info: function (work_name, company_name, w_start, w_end, c_website, c_contect, c_email,w_achievement) {
            dispatch(add_working_info(work_name, company_name, w_start, w_end, c_website, c_contect, c_email,w_achievement))
        },
        delete_working_info:function(index){
            dispatch(delete_working_info(index))
        }
    }
}
export default connect(mapStateToProps, mapDiapatchToProps)(Woking_info)
