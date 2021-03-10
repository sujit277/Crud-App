/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";

var insert = async() => {
    let name = upload_record.shadowRoot.getElementById("name").value;
    let roll = upload_record.shadowRoot.getElementById("roll").value;
    let clas = upload_record.shadowRoot.getElementById("class").value;
    
    let respObj = await apiman.rest(APP_CONSTANTS.INS_ATT_DATA, "POST", {name, roll, clas}, false, false);
    console.log(respObj);
    if(respObj.affectedRows > 0) {
        alert("Data inserted");
        router.reload();
    } 
     
}


function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("upload-record",
`${APP_CONSTANTS.APP_PATH}/components/upload-record/upload-record.html`, upload_record);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const upload_record = { trueWebComponentMode, register, insert}
