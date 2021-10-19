import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import api from '../../services/client';
import './styles.scss'

import { context } from '../../context';
import { useParams } from 'react-router';

const Header = () => {

    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('')
    const [token, setToken] = useState('')
    
    const { username } = useParams();

    useEffect(async () => {
        await getToken()
        if(username)
            getUser()
    }, []);

    function _handleKeyDown(e){
        if (e.key === 'Enter') {
            getUser();
        }
      }

    const getToken = async () => {
        try {
            const { data } = await axios.get('http://localhost:3002/auth/token')

            if (data.token === "bad_verification_code")
                return

            setToken(data.token)
            sessionStorage.setItem("token", data.token)
            sessionStorage.setItem("auth", true)
        } catch (error) {
            console.log(error)
        }
    }

    const getUser = async () => {
        try {
            const { data } = await api.get(`/${searchedValue === '' ? username : searchedValue}`, {
                headers: {
                    Authorization: 'Bearer ' + (token === "" ? sessionStorage.getItem("token") : token)
                }
            })
            ctx.setUserData(data)
            getStarred();
            getRepos();
        } catch (error) {
            console.log(error)
        }
    }

    const getRepos = async () => {
        try {
            const { data } = await api.get(`/${searchedValue === '' ? username : searchedValue}/repos`, {
                headers: {
                    Authorization: 'Bearer ' + (token === "" ? sessionStorage.getItem("token") : token)
                }
            })
            ctx.setUserRepos(data)
            sessionStorage.setItem("obje", data)
        } catch (error) {
            console.log(error)
        }
    }

    const getStarred = async () => {
        try {
            const { data } = await api.get(`/${searchedValue === '' ? username : searchedValue}/starred`, {
                headers: {
                    Authorization: 'Bearer ' + (token === "" ? sessionStorage.getItem("token") : token)
                }
            })
            ctx.setUserStarred(data.length)
            ctx.setUserStarredData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header className="c-header">
            
            <h3 className="c-header__title">Github Profile</h3>
            <div className="c-header__search">
                <input className="c-header__search__input" onKeyDown={_handleKeyDown} value={searchedValue} onChange={e => setSearchedValue(e.target.value)} type="text" />
                <button className="c-header__search__button" onClick={getUser}>
                    <BiSearch size={25} />
                </button>
            </div>
        </header>
    )
};

export default Header;