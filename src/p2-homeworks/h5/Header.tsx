import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {PATH} from "./Routes";


function Header() {
    return (
        <div className={s.navLinks}>


            <NavLink to={PATH.PRE_JUNIOR} className={({isActive})=> isActive ? s.active : ''}>PRE_JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive})=> isActive ? s.active : ''}>JUNIOR</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=> isActive ? s.active : ''}>JUNIOR_PLUS</NavLink>







{/*            <li><NavLink style={(params)=>{
                return {color: params.isActive ? "green" : 'black'} }} to={PATH.PRE_JUNIOR + '/dz1'}>ДЗ1</NavLink></li>
            <li><NavLink style={(params)=>{ return {color: params.isActive ? "green" : 'black'} }} to={PATH.PRE_JUNIOR + '/dz2'}>ДЗ2</NavLink></li>
            <li><NavLink style={(params)=>{
                return {color: params.isActive ? "green" : 'black'} }} to={PATH.PRE_JUNIOR + '/dz3'}>ДЗ3</NavLink></li>

            <li><NavLink to={PATH.PRE_JUNIOR + '/dz4'} className={({isActive})=> isActive ? s.activBG : ''}>ДЗ4</NavLink></li>
            <li><NavLink to={PATH.PRE_JUNIOR + '/dz6'} className={({isActive})=> isActive ? s.activBG : ''}>ДЗ6</NavLink></li>*/}

        </div>
    )
}

export default Header
