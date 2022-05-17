import React, { Component } from 'react'
import './app-section3.css';
class Section3 extends Component {
    render(){
            return(
            <>
            <div className="section3">
                <div className="section3-left"><div className="under-inherit"></div></div>
                <div className="section3-right">
                    <div className="title">The best watch for <br />your best time.</div>
                    <div className="under-title section3-under-title">Since the watch is such a popular Fashion accessory <br /> and is seen as an essential wardrobe piece for both <br /> men and women.</div>
                    <div className="mini-link"><a className='mini-link' href="#"> &#9658;Play video</a></div>
                </div>
            </div>
            <div className="reviews">
                <div className="review">
                    <div className="review-box">
                        <div className="review-text">For example, if someone lives in adverse conditions then they use the <br /> slogan accuracy under adverse conditions to show them their watch <br /> can fulfill their needs. Similarly, if someone likes handmade products <br /> then they use the slogan Handmade. </div>
                        <div className="review-human">
                            <div className="review-data">
                                <div className="review-name">Ronald Richards</div>
                                <div className="review-under-name">
                                    <div className="review-under-name-text">D.M Richards</div>
                                    <div className="review-border"></div>
                                </div>
                            </div>
                            <div className="review-pupil-ico">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

            )
    }
}

export default Section3;