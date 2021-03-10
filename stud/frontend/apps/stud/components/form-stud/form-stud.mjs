import { router } from "/framework/js/router.mjs";
import { monkshu_component } from "/framework/js/monkshu_component.mjs";
import { apimanager as apiman } from "/framework/js/apimanager.mjs";
import { APP_CONSTANTS } from "../../js/constants.mjs";


var validate = () => {
    var roll = form_stud.shadowRoot.getElementById("roll").value;
    roll=parseInt(roll);
    console.log(roll);
    console.log(typeof(roll));
    getAttData(roll);
    
}


var getAttData = async(roll) => {
    console.log({roll});
    let respObj = await apiman.rest(APP_CONSTANTS.ATT_DATA, "POST", {roll}, false,false);
    console.log(respObj);
    console.log(respObj.length);
    if(respObj.length == 1) {
        let target = document.querySelector("form-stud").shadowRoot.querySelector("#data");
        target.style.display = "block";
        target.querySelector("#name").innerHTML = respObj[0].name;
        target.querySelector("#roll").innerHTML = respObj[0].roll;
        target.querySelector("#class").innerHTML =respObj[0].class;
    
    }
    else {
        alert("Please enter valid data");
        router.reload();
    }
}
function register() {
    // convert this all into a WebComponent so we can use it
    monkshu_component.register("form-stud",
   `${APP_CONSTANTS.APP_PATH}/components/form-stud/form-stud.html`, form_stud);
   }
   const trueWebComponentMode = true; // making this false renders the component without using Shadow DOM
   export const form_stud = { trueWebComponentMode, register,validate}
   
