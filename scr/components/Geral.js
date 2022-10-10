import { useEffect } from "react";
import { useState } from "react";
import { fazPedido } from "../utils/rest"

//funcao que levará ao frontend o Look ao Closet

async function addLookCloset(_idCloth, username_user, slots) {
    const objRes = await fazPedido(
        `/api/adiciona/roupa/look`, "POST",
        {
            _idCloth,
            username_user,
            slots
        }
    )
    return objRes
}

//funcao que levara ao frontend as informações do Login.

async function signUp(_idUser, nome) {
    const objRes = await fazPedido(
        `/api/adiciona/user/login`, "GET",
        {
            _idUser,
            nome
        }
    )
    return objRes
}




