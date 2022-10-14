import { ObjectId } from "mongodb"
import { insertClothing } from "../scr/data/clothing"
import { createCloset, showLastClosetCreatedByUserId } from "../scr/services/closet"
import { pullCloth } from "../scr/services/clothing"
import { createNewLook } from "../scr/services/look"

function populate() {
    return populateClothes(),
        populateClosets(),
        populateLooks()

}

// async function populateUser() {
//     await addUser({ name: "Marta Maria", "esghtdrutf": "oo" })
// }

async function populateClothes() {
    const cloth1 = insertClothing({
        "pathToImage": "/images/roupas/blazerRoxo.png",
        "title": "Purple Blazer",
        "slot": "top",
        "type": "blazer",
        "color": "purple"
    })

    const cloth2 = insertClothing({
        "pathToImage": "/images/roupas/botaRosa.png",
        "title": "Pink Shoes",
        "slot": "bottom",
        "type": "shoes",
        "color": "pink"
    })

    const cloth3 = insertClothing({
        "pathToImage": "/images/roupas/botaVerde.png",
        "title": "Green Boots",
        "slot": "bottom",
        "type": "shoes",
        "color": "green"
    })

    const cloth4 = insertClothing({
        "pathToImage": "/images/roupas/calcasAzuisGanga1.png",
        "title": "Blue Jeans",
        "slot": "middle",
        "type": "pants",
        "color": "blue"
    })

    const cloth5 = insertClothing({
        "pathToImage": "/images/roupas/calcasBege.png",
        "title": "Beige Pants",
        "slot": "middle",
        "type": "pants",
        "color": "beige"
    })

    const cloth6 = insertClothing({
        "pathToImage": "/images/roupas/calcasCinzaGanga.png",
        "title": "Grey Jeans",
        "slot": "middle",
        "type": "pants",
        "color": "grey"
    })

    const cloth7 = insertClothing({
        "pathToImage": "/images/roupas/calcasCreme.png",
        "title": "Beige Jeans",
        "slot": "middle",
        "type": "pants",
        "color": "beige"
    })

    const cloth8 = insertClothing({
        "pathToImage": "/images/roupas/calcasPretas.png",
        "title": "Black Pants",
        "slot": "middle",
        "type": "pants",
        "color": "black"
    })

    const cloth9 = insertClothing({
        "pathToImage": "/images/roupas/calcasPretas2.png",
        "title": "Black Jeans",
        "slot": "middle",
        "type": "pants",
        "color": "black"
    })

    const cloth10 = insertClothing({
        "pathToImage": "/images/roupas/calcasRoxas.png",
        "title": "Purple Pants",
        "slot": "middle",
        "type": "pants",
        "color": "purple"
    })

    const cloth11 = insertClothing({
        "pathToImage": "/images/roupas/calcasVerde.png",
        "title": "Green Pants",
        "slot": "middle",
        "type": "pants",
        "color": "green"
    })

    const cloth12 = insertClothing({
        "pathToImage": "/images/roupas/camisolaBege.png",
        "title": "Beige Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "beige"
    })

    const cloth13 = insertClothing({
        "pathToImage": "/images/roupas/camisolaPreta.png",
        "title": "Black Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "black"
    })

    const cloth14 = insertClothing({
        "pathToImage": "/images/roupas/camisolaRiscas.png",
        "title": "Stripes Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "beige"
    })

    const cloth15 = insertClothing({
        "pathToImage": "/images/roupas/camisolaRosa.png",
        "title": "Pink Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "pink"
    })

    const cloth16 = insertClothing({
        "pathToImage": "/images/roupas/camisolaVerde.png",
        "title": "Green Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "green"
    })

    const cloth17 = insertClothing({
        "pathToImage": "/images/roupas/camisolaVermelha.png",
        "title": "Red Sweat",
        "slot": "top",
        "type": "sweat",
        "color": "red"
    })

    const cloth18 = insertClothing({
        "pathToImage": "/images/roupas/casacoBege.png",
        "title": "Beige Coat",
        "slot": "top",
        "type": "coat",
        "color": "beige"
    })

    const cloth19 = insertClothing({
        "pathToImage": "/images/roupas/casacoAzul.png",
        "title": "Blue Coat",
        "slot": "top",
        "type": "coat",
        "color": "blue"
    })

    const cloth20 = insertClothing({
        "pathToImage": "/images/roupas/saiaPreta.png",
        "title": "Black Skirt",
        "slot": "middle",
        "type": "skirt",
        "color": "black"
    })

    const cloth21 = insertClothing({
        "pathToImage": "/images/roupas/tenisBranco.png",
        "title": "White Sneakers",
        "slot": "bottom",
        "type": "shoes",
        "color": "white"
    })

    const cloth22 = insertClothing({
        "pathToImage": "/images/roupas/tenisCreme.png",
        "title": "Beige Sneakers",
        "slot": "bottom",
        "type": "shoes",
        "color": "Beige"
    })

    const cloth23 = insertClothing({
        "pathToImage": "/images/roupas/tenisVermelho.png",
        "title": "Red Sneakers",
        "slot": "bottom",
        "type": "shoes",
        "color": "red"
    })

}


async function populateLooks() {
    const look1 = {
        "clothes": {
            "top": "6347f19b6df2da01d0700165", //purple blazer
            "middle": "6347f22a6df2da01d070016b", //black pants
            "bottom": "6347edc66df2da01d0700164" //pink shoes
        }
    }
    const look2 = {
        "clothes": {
            "top": "6347f2fa6df2da01d0700177", //black skirt
            "middle": "6347f2166df2da01d070016a", //beige jeans
            "bottom": "63495ca863581201d0b2cea7" //white sneakers
        }
    }

    const look3 = {
        "clothes": {
            "top": "6347f2696df2da01d0700170", //black sweat
            "middle": "6347f22a6df2da01d070016b", //black pants
            "bottom": "63495cba63581201d0b2cea8" //beige sneakers
        }
    }

    const look4 = {
        "clothes": {
            "top": "6347f2ee6df2da01d0700176", //blue coat
            "middle": "6347f2436df2da01d070016d", // purple pants
            "bottom": "63495cc963581201d0b2cea9" //red sneakers
        }
    }

    const look5 = {
        "clothes": {
            "top": "6347f25b6df2da01d070016f", //beige sweat
            "middle": "6347f22a6df2da01d070016b", //black pants
            "bottom": "6347edc66df2da01d0700164" //pink shoes
        }
    }
    const look6 = {
        "clothes": {
            "top": "6347f2ee6df2da01d0700176", //blue coat
            "middle": "6347f2fa6df2da01d0700177", //black skirt
            "bottom": "6347f1ab6df2da01d0700166" //Green Boots
        }
    }
    const look7 = {
        "clothes": {
            "top": "6347f2a86df2da01d0700174", //red sweat
            "middle": "6347f22a6df2da01d070016b", //black pants
            "bottom": "6347edc66df2da01d0700164" //pink shoes
        }
    }

    const closet = showLastClosetCreatedByUserId(ObjectId("6346a68189bc601417f0a5a2"))
    return await createNewLook(look1, closet),
        await createNewLook(look2, closet),
        await createNewLook(look3, closet),
        await createNewLook(look4, closet),
        await createNewLook(look5, closet),
        await createNewLook(look6, closet),
        await createNewLook(look7, closet)

}

async function populateClosets() {
    const closet1 = createCloset(ObjectId("6346a68189bc601417f0a5a2"))
    const closet2 = createCloset(ObjectId("6346a68189bc601417f0a5a2"))
    const closet3 = createCloset(ObjectId("6346a68189bc601417f0a5a2"))

    return closet1, closet2, closet3
}

populate()
