import { ObjectId } from "mongodb"
import { createCloset, showLastClosetCreatedByUserId } from "../scr/services/closet"
import { pullCloth } from "../scr/services/clothing"
import { createNewLook } from "../scr/services/look"

function populate() {
    return populateClosets(),
        populateLooks()
}

// async function populateUser() {
//     await addUser({ name: "Marta Maria", "esghtdrutf": "oo" })
// }


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
