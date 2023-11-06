"use client"

import Link from "next/link"
import { useState } from "react"

export default function Login() {

    const [users, setUsers] = useState({
        email:'',
        login:'',
        senha:''
    })

    const [usersList, setUsersList] = useState([])


    const handleChange = e => {
        setUsers({...users, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:5000/users/`) 
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .then(resp => setUsersList(resp))
        .catch(error => console.error(error))
        console.log(users)
    }

    return(
        <main>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name='email' value={users.email}
                placeholder="E-mail" onChange={handleChange} /> <br />
                <input type="text" name='login' value={users.login}
                placeholder="Login" onChange={handleChange} /> <br />
                <input type="password" name='senha' value={users.senha}
                placeholder="Senha" onChange={handleChange} /> <br />
                <button type="submit" >Login</button>
                <Link href={'/'}>Cancelar</Link>
            </form>
        </main>
    )
}