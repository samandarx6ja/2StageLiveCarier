import React from 'react';
import Logo from './images/Logos.svg';
import Down from './images/down-arrow.png';
import Comm from './images/bubble-chat.png';
import Sign from './images/sign-in.png';
import './Nav.css';
    function Nav(){
        return(
            <div
                className='navs_nav'>
                    <img src={Logo}
                        className='nav_logo'>
                    </img>
                    <div 
                        className='nav_header'>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    RESUMES  <img src={Down}></img>
                                </a>
                        </span>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    CV  <img src={Down}></img>
                                </a>
                        </span>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    COVER LETTERS  <img src={Down}></img>
                                </a>
                        </span>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    QUESTIONS
                                </a>
                        </span>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    RESOURCES
                                </a>
                        </span>
                        <span
                            className='nav_res'>
                                <a href='/'>
                                    ABOUT  <img src={Down}></img>
                                </a>
                        </span>
                    </div>
                    <div 
                        className='nav_header_end'>
                            <img src={Comm}
                                className='nav_messages'>
                             </img> 
                            <span
                                className='nav_item'>
                                 | 
                            </span>
                            <img src={Sign}
                                className='nav_sigin_in icon'>
                            </img>
                            <span
                                className='nav_sgn_in'>
                                <a href=''
                                    className='nav_sgn'>Sign In</a>
                            </span>
                    </div>
            </div>
        );
    }



export default Nav;