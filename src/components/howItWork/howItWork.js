import React, { useState } from 'react';
import './howItWork.scss'
import imgBook from '../../images/JPEG/book.jpg'
import imgApprove from '../../images/JPEG/approve.jpg'
import imgStart from '../../images/JPEG/start.jpg'

const HowItWorkBox =() =>{
    const [hIWContent, setHIWContnet] = useState(require('../howItWork/howItWork.content.json'));

    return (
        <section className="container-fluid">
            <div className="row">
                <div className="hiwBox">
                    <h1 className="hiwBox_header">{hIWContent.header}</h1>
                    <div className="row">
                        {
                            hIWContent.content.map((items) => {
                                return (
                                    <div className="col-md-4 hiwBox_content">
                                        <img className="hiwBox_content_image" src={items.imageName == "book" ? imgBook :
                                            items.imageName == "approve" ? imgApprove :
                                                items.imageName == "start" ? imgStart :

                                                    null} />
                                        <h1 className="hiwBox_content_short">{items.short}</h1>
                                        <h5 className="hiwBox_content_desc">{items.desc}</h5>

                                    </div>
                                );
                            })

                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorkBox;