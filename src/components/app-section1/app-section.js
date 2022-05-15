import './app-section.css';
import android from './app-section1-img/andoroid-ico.png';
import internet from './app-section1-img/internet-ico.png';
import music from './app-section1-img/music-ico.png';
import battery from './app-section1-img/battery-ico.png';
import settings from './app-section1-img/setting-ico.png';
import messages from './app-section1-img/messages-ico.png';
import '../app/app';
const Section1 = () =>{
        // let elem = data.map(item => {
        //     return(
        //         <>
        //         <div className="block-title">{item.nameIco}</div>
        //         <div className="block-under-title">{item.meaningIco}</div>
        //         </>
        //     )
        // })
        // return(
        //     <div className="blocks">
        //         <div className="block">
        //             <div className="block-ico"><img  className='andoid' src={android} alt={data.alt} /></div>
        //             <div className="block-title">{data.nameIco}</div>
        //             <div className="block-under-title">{data.meaningIco}</div>
        //         </div>
        //         <div className="block">
        //             <div className="block-ico"><img  className='internet' src={internet} alt={data.alt} /></div>
        //             <div className="block-title">{data.nameIco}</div>
        //             <div className="block-under-title">{data.meaningIco}</div>
        //         </div>
        //         <div className="block">
        //             <div className="block-ico"><img  className='music' src={music} alt={data.alt} /></div>
        //             <div className="block-title">{data.nameIco}</div>
        //             <div className="block-under-title">{data.meaningIco}</div>
        //         </div>
        //     </div>
        // )
    return(
        <div className="section">
            <div className='title'>Our Service Feature</div>
            <div className="under-title">Watch companies are now focusing more on trendy <br />watches which targets the youngsters who always.</div>
            <div className="familiarization">
                <div className="familiarization-left">
                    <div className="blocks">
                        <div className="block">
                            <div className="block-ico"><img  className='internet' src={android} alt={android} /></div>
                            <div className="block-title">Android Version</div>
                            <div className="block-under-title">Android officially 10.0</div>
                        </div>
                        <div className="block">
                            <div className="block-ico"><img  className='music' src={internet} alt={internet} /></div>
                            <div className="block-title">Internet Service</div>
                            <div className="block-under-title">4G Smart Watches</div>
                        </div>
                        <div className="block">
                            <div className="block-ico"><img  className='music' src={music} alt={music} /></div>
                            <div className="block-title">Music Player</div>
                            <div className="block-under-title">Use the Music app</div>
                        </div>
                    </div>
                </div>
                    <div className="familiarization-picture"></div>
                    <div className="familiarization-right">
                    <div className="blocks">
                        <div className="block">
                            <div className="block-ico"><img  className='internet' src={battery} alt='battery' /></div>
                            <div className="block-title">Battery</div>
                            <div className="block-under-title">Battery life is 18 hours</div>
                        </div>
                        <div className="block">
                            <div className="block-ico"><img  className='music' src={settings} alt='settings'/></div>
                            <div className="block-title">Settings</div>
                            <div className="block-under-title">Choose your settings.</div>
                        </div>
                        <div className="block">
                            <div className="block-ico"><img  className='music' src={messages} alt='messages' /></div>
                            <div className="block-title">Messages</div>
                            <div className="block-under-title">Open the Messages app</div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
    }
export default Section1;