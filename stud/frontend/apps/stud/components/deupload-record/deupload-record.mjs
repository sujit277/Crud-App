/*
* (C) 2020 TekMonks. All rights reserved.
* License: MIT - see enclosed license.txt file.
*/
import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";



var del = async() => {
    let roll = deupload_record.shadowRoot.getElementById("roll").value;

    let respObj = await apiman.rest(APP_CONSTANTS.DEL_ATT_DATA, "POST", {roll}, false, false);
    console.log(respObj);
    if(respObj) {
        alert("Data Deleted");
        router.reload();
    }
}

function register() {
 // convert this all into a WebComponent so we can use it
 monkshu_component.register("deupload-record",
`${APP_CONSTANTS.APP_PATH}/components/deupload-record/deupload-record.html`, deupload_record);
}
const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
export const deupload_record = { trueWebComponentMode, register, del}
