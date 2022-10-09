import { useEffect } from "react";
import { useState } from "react";
import { fazPedido } from "../utils/rest"

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


async function addClothes(_idClothing, path_To_Image, color_clothing, position) {
    const objRes = await fazPedido(
        `/api/adiciona/roupa/roupa`, "POST",
        {
            _idClothing,
            path_To_Image,
            color_clothing,
            position
        }
    )
    return objRes
}

async function signUp(_idUser, nome) {
    const objRes = await fazPedido(
        `/api/adiciona/user`, "POST",
        {
            _idUser,
            nome
        }
    )
    return objRes
}

