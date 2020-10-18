import './First.css'
import React, { Component, PropTypes, useEffect } from 'react'
import { connect } from 'react-redux';
import  html2canvas  from 'html2canvas';
import { jsPDF } from 'jspdf'
import image1 from './img.png'
function First(props) {
    const printDocument =() => {
        const input = document.getElementById('content');
        html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'PNG', 10, 10);
                pdf.save("download.pdf");  
            });
        }
        var user_photo = {
            width: "100%",
            height: "400px",
            backgroundImage:`url(${props.p_image})`
        }
       
    return (
        <div className="first pl-5 mt-5">
            <div id="content">
                <div className="resume-left-top" style={{textAlign:"left"}}>
                    <div className="user-photo" >
                        <img src={props.p_image} width='100' height='100' />   
                    </div>
                    <div className="user-social-info">
                        <div>
                            {props.email}
                        </div>
                        <div>
                            {props.phone}
                        </div>
                        <div>
                            {props.personal_website}
                        </div>
                        <div>
                            {props.address}
                        </div>
                        <div>
                            {props.linkedin}
                        </div>
                        <div>
                            {props.twitter}
                        </div>
                    </div>
                    <div className="user-skills">
                        <span>SKILLS</span>
                        <hr />
                        {props.skills.map((skills_name)=>(
                            <div>
                                {skills_name}
                            </div>    
                        ))}
                    </div>
                    <div>
                        <span>LANGUAGE</span>
                        <hr />
                        {props.language.map((language_name)=>(
                            <div>
                                {language_name}
                            </div>    
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <span onClick={printDocument}>submit</span>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        p_image: state.p_image,
        name: state.name,
        email: state.email,
        phone: state.phone,
        address: state.address,
        profession: state.profession,
        //
        twitter:state.twitter,
        linkedin:state.linkedin,
        //skills
        skills:state.skills,
        language:state.language
    }
}
export default connect(mapStateToProps)(First)
