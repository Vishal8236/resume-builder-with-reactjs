import React from 'react'
import './Show_template_i.css';
function Show_template_i(props) {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const imageUrl = params.get('imageURL')
    return (
        <div className="show_template_i">
            <div className="tamplate_header">
                <span>Your resume look like that after fill the information</span>
            </div>
            <img src={imageUrl} />
        </div>
    )
}

export default Show_template_i
