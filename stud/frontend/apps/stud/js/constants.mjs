const FRONTEND = "http://localhost:8080";
const BACKEND = "http://localhost:9090";
const APP_NAME = "stud";
const APP_PATH = `${FRONTEND}/apps/${APP_NAME}`;
const API_PATH = `${BACKEND}/apps/${APP_NAME}`

export const APP_CONSTANTS = {
 FRONTEND, BACKEND, APP_PATH, APP_NAME, API_PATH,
 INDEX_HTML: APP_PATH + "/index.html",
 STUDENTDETAILS_HTML: APP_PATH + "/studentdetails.html",
 ADMISSION_HTML: APP_PATH + "/admission.html",
 DEADMISSION_HTML: APP_PATH + "/deadmission.html",
 UPDATE_HTML: APP_PATH + "/update.html",


 SESSION_NOTE_ID: "com_monkshu_ts",

 ATT_DATA: `${BACKEND}/apis/getattr`,
 INS_ATT_DATA: `${BACKEND}/apis/insert`,
 DEL_ATT_DATA: `${BACKEND}/apis/del`,
 UPD_ATT_DATA: `${BACKEND}/apis/update`,
 


 USERID: "id",
 USER_ROLE: "user",
 GUEST_ROLE: "guest",
 PERMISSIONS_MAP: {
 user: [//APP_PATH + "/index.html",
 APP_PATH + "/studentdetails.html",
 APP_PATH + "/admission.html",
 APP_PATH + "/deadmission.html",
 APP_PATH + "/update.html",

$$.MONKSHU_CONSTANTS.ERROR_THTML],

 guest: [//APP_PATH + "/index.html",
 APP_PATH + "/studentdetails.html",
 APP_PATH + "/admission.html",
 APP_PATH + "/deadmission.html",
 APP_PATH + "/update.html",


$$.MONKSHU_CONSTANTS.ERROR_THTML]
 },
 API_KEYS: { "*": "uiTmv5YBOZMqdTb0gekD40PnoxtB9Q0k" },
 KEY_HEADER: "X-API-Key"
}