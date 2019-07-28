import {hass} from './hass.js';
import {deviceID} from './deviceID.js';

export async function parseTemplate(hass, str, specialData = {}) {
  if (!hass) hass = hass();
  if (typeof(specialData === "string")) specialData = {};
    specialData = Object.assign({
      user: hass.user.name,
      browser: deviceID,
      hash: location.hash.substr(1) || ' ',
    },
    specialData);

    for (var k in specialData) {
      var re = new RegExp(`\\{${k}\\}`, "g");
      str = str.replace(re, specialData[k]);
    }

    return hass.callApi("POST", "template", {template: str});
}
