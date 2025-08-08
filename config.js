const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "oUx21LTB#OkGgnKBwf6jnFS2h1plolYTB5T6vfxbThybU2FAuPz0",
ALIVE_IMG: process.env.ALIVE_IMG || "",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 DENETH-YT Is Alive Now😍*",
BOT_OWNER: '94768805840',  // Replace with the owner's phone number



};
