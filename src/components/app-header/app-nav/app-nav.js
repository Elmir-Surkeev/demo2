import './app-nav.css';
const Nav = ({links}) => {
    const navElements = links.map(item => {
        if(item.increase){
            return(
            <div className='increase links'><a href={item.a}>{item.linkName}</a></div>
            )
        }
        return(
            <div className='links'><a href={item.a}>{item.linkName}</a></div>
        )
    })
    return(
        <nav>
            {navElements}
            <button className='btn'>Get Stated</button>
        </nav>
    )
}


export default Nav;