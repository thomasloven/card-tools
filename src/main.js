import "card-maker.js"
import { deviceID } from "deviceID.js";
import { fireEvent } from "event.js";
import { hass, provideHass, lovelace, lovelace_view, load_lovelace } from "hass.js";
import { LitElement, html, css } from "lit-element.js";
import { longpress } from "long-press.js";
import { createCard, createElement, createEntityRow } from "lovelace-element.js";
import { moreInfo } from "more-info.js";
import { popUp, closePopUp } from "popup.js";
import { parseTemplate, subscribeRenderTemplate } from "templates.js";
import { hasOldTemplate, parseOldTemplate } from "old-templates.js";


class CardTools {

  constructor() {
    this.deviceID = deviceID;

    this.fireEvent = fireEvent;

    this.provideHass = provideHass;
    this.load_lovelace = load_lovelace

    this.LitElement = LitElement;
    this.LitHtml = html;
    this.LitCSS = css;

    this.longpress = longpress;

    this.createCard = createCard;
    this.createElement = createElement;
    this.createEntityRow = createEntityRow;

    this.moreInfo = moreInfo;

    this.popUp = popUp;
    this.closePopUp = closePopUp;

    this.parseTemplate = parseTemplate;
    this.subscribeRenderTemplate = subscribeRenderTemplate;

    this.hasOldTemplate = hasOldTemplate;
  }

  get hass() {
    return hass();
  }
  get lovelace() {
    return lovelace();
  }
  get lovelace_view() {
    return lovelace_view();
  }

  static parseTemplate(hass, str, specialData = {}) {
    if (typeof(hass) === "string")
      return parseOldTemplate(hass, str);
    return parseTemplate(hass, str, specialData);
  }
}

customElements.define("card-tools", CardTools);

window.cardTools = customElements.get('card-tools');
console.info(`%cCARD-TOOLS 2 IS INSTALLED
%cDeviceID: ${customElements.get('card-tools').deviceID}`,
"color: green; font-weight: bold",
"");

