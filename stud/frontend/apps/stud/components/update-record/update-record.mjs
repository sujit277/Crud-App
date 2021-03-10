/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

var update = async() => {
    let name = update_record.shadowRoot.getElementById("name").value;
    let roll = update_record.shadowRoot.getElementById("roll").value;
    let clas = update_record.shadowRoot.getElementById("class").value;

    let respObj = await apiman.rest(APP_CONSTANTS.UPD_ATT_DATA, "POST", {name,roll,clas}, false, false);
    console.log(respObj);
    if(respObj.affectedRows > 0) {
        alert("Data Updated");
        router.reload();
    }
     
}

function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("update-record",
`${APP_CONSTANTS.APP_PATH}/components/update-record/update-record.html`, update_record);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const update_record = { trueWebComponentMode, register, update}
