import React,{useState} from 'react'
import './styles/Social_media_info.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {add_social_info} from '../resume-redux/resume_action';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function Social_media_info(props) {
    const [facebook, setfacebook] = useState('')
    const [twitter, settwitter] = useState('')
    const [github, setgithub] = useState('')
    const [linkedin, setlinkedin] = useState('')
    const [youtube, setyoutube] = useState('')
    const [instagram, setinstagram] = useState('')
    const [educationInfo, seteducationInfo] = useState(false)
    return (
        <div className="social_media_info">
            <div className="sm-form-box">
                <div className="row">
                    <div className="col-md-4 pt-1 form-logo">
                        <FacebookIcon fontSize="large" style={{color:'#3b5998'}} />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{setfacebook(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your facebook account link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4 ">
                    <div className="col-md-4 pt-1 form-logo">
                        <TwitterIcon fontSize="large" style={{color:'#00acee'}}  />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{settwitter(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your twitter link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 pt-1 form-logo">
                        <GitHubIcon fontSize="large" style={{color:'#211F1F'}} />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{setgithub(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your github link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 pt-1 form-logo">
                        <LinkedInIcon fontSize="large" style={{color:'#0e76a8'}} />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{setlinkedin(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your linkedIn link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 pt-1 form-logo">
                        <YouTubeIcon fontSize="large" style={{color:'#FF0000'}} />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{setyoutube(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your youtube account link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-md-4 pt-1 form-logo">
                        <InstagramIcon fontSize="large" style={{color:'#3f729b'}} />
                    </div>
                    <div className="col-md-5 text-left">
                        <input className="form-control" type="text" onChange={(e)=>{setinstagram(e.target.value)}} />
                        <small id="emailHelp" class="form-text text-muted">Please enter your instagram account link and this is optional field.</small>
                    </div>
                </div>
                <div className="row mt-4">
                        {educationInfo ?
                                <Link className="btn btn-info btn-sm btn-lg btn-block" to='/education_info' >Next</Link> 
                            :
                                <button className="btn btn-primary btn-sm btn-lg btn-block" onClick={()=>{
                                    props.add_social_info(facebook,twitter,github,linkedin,youtube,instagram);
                                    seteducationInfo(true);
                                }} >Submit</button>
                        }
                </div>
            </div>
        </div>
    )
}
const mapDiapatchToProps= dispatch =>{
    return{
        add_social_info:function(facebook,twitter,github,linkedin,youtube,instagram){
            dispatch(add_social_info(facebook,twitter,github,linkedin,youtube,instagram))
        }
    }
}
export default connect(null,mapDiapatchToProps) (Social_media_info)
