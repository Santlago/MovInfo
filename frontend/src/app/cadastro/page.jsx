"use client"

import Link from "next/link"
import { useEffect, useState } from "react"


export default function Cadastro(){

    const [users, setUsers] = useState({
        email:'',
        login:'',
        senha:''
    })

    let metodo = 'post'

    const handleChange = e => {
        setUsers({...users, [e.target.name]:e.target.value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:5000/users/`,{
        method: metodo,
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(users)
      })
      .then(window.location = '/')
      .catch(error => console.error(error))    
    }

    // useEffect(()=>{
    //     if(prodId){
    //         fetch(`http://localhost:5000/produto/${prodId}`)
    //         .then(resp => resp.json())
    //         .then(resp => setUsers(resp))
    //         .catch(error => console.error(error))     
    //     }
    // },[prodId])





    return(
        <main className="form">
            <h1>Cadastro</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name='email' value={users.email}
                placeholder="E-mail" onChange={handleChange} /> <br />
                <input type="text" name='login' value={users.login}
                placeholder="Login" onChange={handleChange} /> <br />
                <input type="password" name='senha' value={users.senha}
                placeholder="Senha" onChange={handleChange} /> <br />
                <button type="submit" >Cadastrar</button>
                <Link href={'/'}>Cancelar</Link>

            </form>
        </main>
    )
}