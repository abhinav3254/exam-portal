import React from 'react'
import './SideNav.scss'
import { items } from './side'
import cImg from '../../images/certificates.svg'
import { useNavigate } from 'react-router-dom'

const SideNav = () => {
    const itemList = items;
    const navigate = useNavigate();

    const changePath = (link: string) => {
        navigate(`${link}`);
    }


    return (
        <div>
            <div className="side-nav">
                <ul>
                    {itemList.map((item, key) => (
                        <li key={key}>
                            <div className='item' onClick={() => { changePath(item.route) }}>
                                <img className='icons' src={require(`../../images/${item.icon}.svg`)} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideNav