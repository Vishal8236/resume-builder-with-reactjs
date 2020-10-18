import React,{useState} from 'react'
import './Templates.css'
import {connect} from 'react-redux'
import { BrowserRouter as Router ,Switch, Route,Link} from 'react-router-dom';
import { render } from 'react-dom';
function Templates(props) {
    return (
        <div className="template">
            <div className="all_templates">
                <div className="row">
                    <div className="col-md-4">
                        <Link  to="/form?render=first">
                            <div className="template_i">
                                <img  src='https://d.novoresume.com/images/blogs/569fd050-4d1b-11e8-b79b-272c82893bda/best-resume-format.jpeg' />
                            </div>
                        </Link>
                        <div className="pt-2 tamplate-bottom">
                            <Link  to="/form?render=first">
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>Make Resume</span>
                            </Link>
                            <Link to='/tamplateImage?imageURL=https://d.novoresume.com/images/blogs/569fd050-4d1b-11e8-b79b-272c82893bda/best-resume-format.jpeg'>
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>View Template</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Link  to="/form?render=second">
                            <div className="template_i">
                                <img  src="https://d.novoresume.com/images/blogs/569fd050-4d1b-11e8-b79b-272c82893bda/sample-resume-format.jpeg" />
                            </div>
                        </Link>
                        <div className="pt-2 tamplate-bottom">
                            <Link  to="/form?render=second">
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>Make Resume</span>
                            </Link>
                            <Link to='/tamplateImage?imageURL=https://d.novoresume.com/images/blogs/569fd050-4d1b-11e8-b79b-272c82893bda/sample-resume-format.jpeg'>
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>View Template</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Link  to="/form?render=third">
                            <div className="template_i">
                                <img  src="https://www.firstnaukri.com/career-guidance/wp-content/uploads/2020/02/Resume-Design-724x1024.jpg" />
                            </div>
                        </Link>
                        <div className="pt-2 tamplate-bottom">
                            <Link  to="/form?render=third">
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>Make Resume</span>
                            </Link>
                            <Link to='/tamplateImage?imageURL=https://www.firstnaukri.com/career-guidance/wp-content/uploads/2020/02/Resume-Design-724x1024.jpg'>
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>View Template</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <Link  to="/form?render=fourth">
                            <div className="template_i">
                                <img  src="https://www.my-resume-templates.com/wp-content/uploads/2019/07/30-Resume-Classic-Red.jpg" />
                            </div>
                        </Link>
                        <div className="pt-2 tamplate-bottom">
                            <Link  to="/form?render=fourth">
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>Make Resume</span>
                            </Link>
                            <Link to='/tamplateImage?imageURL=https://www.my-resume-templates.com/wp-content/uploads/2019/07/30-Resume-Classic-Red.jpg'>
                                <span style={{fontSize:"20px",textDecoration:'none',color:'#0066ff'}}>View Template</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  (Templates)
