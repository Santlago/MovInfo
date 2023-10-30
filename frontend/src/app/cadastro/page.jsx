"use client"
import './page.scss'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

const schema = yup.object({
    email: yup.string()
            .required("O e-mail é obrigatório!"),
    login: yup.string()
            .required('O login é obrigatório!'),
    senha: yup.string()
            .required('A senha do pedido é obrigatória!')
}).required()

export default function Cadastro () {
    const {register, handleSubmit, formState:{errors}, setValue, setFocus} = useForm({
        resolver: yupResolver(schema)
    })

    const [user, setUser] = useState([])

    const insertUser = (newUser) => {
        setUser([...user, newUser])
        console.log(user)
        fetch(`http://localhost:5000/produto/`, {
            method: 'post',
            body: JSON.stringify(newUser), 
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }

    return(
        <div className="container">
            <main>
                <h1>Cadastro</h1>
                <form onSubmit={handleSubmit(insertUser)}>
                    <fieldset>
                        <legend>Cadastro</legend>
                        <label htmlFor="">E-mail
                            <input type="text" {...register("email")}/>
                        </label>
                        <label htmlFor="">Login
                            <input type="text" {...register("login")}/>
                        </label>
                        <label htmlFor="">Senha
                            <input type="password" {...register("senha")}/>
                        </label>
                        <button type='submit'>Cadastrar</button>
                    </fieldset>
                    {
                        user.map((user, i) => 
                            console.log(user)
                        )
                    }
                </form>
                {user.map((u, i) => (
                <div key={i}>
                    <p>Email: {u.email}</p>
                    <p>Login: {u.login}</p>
                    <p>Senha: {u.senha}</p>
                </div>
                ))}
            </main>
        </div>
    )
}