import React,{useState} from 'react'
import './styles/personal_info.css'
import { add_details ,add_template_name} from '../resume-redux/resume_action';
import {connect} from 'react-redux';
import {BrowserRouter as Route, Router, Link} from 'react-router-dom';

function Personal_info(props) {
    const [p_image, setp_image] = useState(undefined);
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [DOB, setDOB] = useState('')
    const [profession, setprofession] = useState('')
    const [social_media, setsocial_media] = useState(false)

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const t_name = params.get('render');
    const [ra, setra] = useState('first')
    return (
        <div className="personal_info">
            <span >
                Personal Information Page
            </span>
            <div className="form_box ">
                     <div className="row first_row ">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Pofile Image
                        </div>
                        <div className="col-md-5 name_tag text-left">
                            <input className="form-control" type="file" placeholder="Name" onChange={(e)=>{setp_image(window.URL.createObjectURL(e.target.files[0]))}} />
                            <small id="emailHelp" class="form-text text-muted">Please select your professional image and this is required field.</small>
                        </div>
                    </div>
                    <div className="row mt-4 first_row ">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Name
                        </div>
                        <div className="col-md-5 name_tag text-left">
                            <input className="form-control input-sm" type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your full name here and this is required field.</small>
                        </div>
                    </div>
                    <div className="row mt-4 first_row ">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Profession
                        </div>
                        <div className="col-md-5 name_tag text-left">
                            <input className="form-control input-sm" type="text" placeholder="Name" onChange={(e)=>{setprofession(e.target.value)}} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your profession here Ex:- Web Developer, Data Scientist.</small>
                        </div>
                    </div>
                    <div className="row mt-4 second_row">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Email
                        </div>
                        <div className="col-md-5 email_tag text-left">
                            <input className="form-control input-sm" type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your active email here and this is required field.</small>
                        </div>
                    </div>
                    <div className="row mt-4 second_row">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Phone Number
                        </div>
                        <div className="col-md-5 email_tag text-left">
                            <input className="form-control input-sm" type="text" placeholder="Phone number" onChange={(e)=>{setphone(e.target.value)}} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your active phone number here and this is required field.</small>
                        </div>
                    </div>
                    <div className="row mt-4 second_row">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Dath-Of-Birth
                        </div>
                        <div className="col-md-5 email_tag text-left">
                            <input className="form-control input-sm" type="text" placeholder="dath-of-birth" onChange={(e)=>{setDOB(e.target.value)}} />
                            <small id="emailHelp" class="form-text text-muted">Please enter your Age email here and this is optional field.</small>
                        </div>
                    </div>
                    <div className="row mt-4 second_row">
                        <div className="col-md-4 text-right pt-2 font-weight-bold">
                            Address
                        </div>
                        <div className="col-md-5 email_tag text-left">
                            <textarea placeholder="Address" class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setaddress(e.target.value)}} />                            
                            <small id="emailHelp" class="form-text text-muted">Please enter your temporary address/permanent address here and this is required field.</small>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {social_media ?
                                <Link className="btn btn-info btn-sm btn-lg btn-block" to='/social_media_info' >Next</Link> 
                            :
                                <button className="btn btn-primary btn-sm btn-lg btn-block" onClick={()=>{
                                    props.add_details(p_image,name,email,phone,address,DOB,profession);
                                    setsocial_media(true);
                                    props.add_template_name(t_name);
                                    setprofession('');
                                    setname('');
                                    setemail('');
                                    setphone('');
                                    setaddress('');
                                    setDOB('');
                                }} >Submit</button>
                        }
                    </div>
                    
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>{
    return{
        add_details:function(p_image,name,email,phone,address,DOB,profession){
            dispatch(add_details(p_image,name,email,phone,address,DOB,profession))
        },
        add_template_name:function(t_name){
            dispatch(add_template_name(t_name))
        }
    }
}
export default connect(null ,mapDispatchToProps) (Personal_info);
