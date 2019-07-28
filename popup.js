import { hass, provideHass } from "./hass.js";
import { fireEvent } from "./event.js";
import { createCard } from "./lovelace-element.js";
import { moreInfo } from "./more-info.js";
import "./card-maker.js"

export function closePopUp() {
  const moreInfoEl = document.querySelector("home-assistant")._moreInfoEl;
  if(moreInfoEl)
    moreInfoEl.close();
}

export function popUp(title, card, large=false, style=null, fullscreen=false) {

  const dummy_entity = Object.keys(hass().states)[0];
  moreInfo(dummy_entity);

  const content = document.createElement("card-maker")
  content.noHass = true;
  content.config = card;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = `
  <style>
    app-toolbar {
      color: var(--more-info-header-color);
      background-color: var(--more-info-header-background);
    }
  </style>
  `;

  const header = document.createElement("app-toolbar");
  header.innerHTML = `
  <paper-icon-button
    icon="hass:close"
    dialog-dismiss=""
  ></paper-icon-button>
  <div class="main-title" main-title="">
    ${title}
    </div>
  `;

  const scroll = document.createElement("paper-dialog-scrollable");
  scroll.appendChild(content);

  if(!fullscreen) {
    wrapper.appendChild(header);
  }
  wrapper.appendChild(scroll);

  const moreInfoEl = document.querySelector("home-assistant")._moreInfoEl;
  scroll.dialogElement = moreInfoEl;
  moreInfoEl.large = large;
  moreInfoEl._page = "none";
  moreInfoEl.shadowRoot.appendChild(wrapper);

  scroll.shadowRoot.querySelector("#scrollable").style.setProperty('padding', '0');

  let oldStyle = {};
  if(style) {
    for (var k in style) {
      oldStyle[k] = moreInfoEl.style[k];
      moreInfoEl.style.setProperty(k, style[k]);
    }
  }

  setTimeout(() => {
    let interval = setInterval(() => {
      if (moreInfoEl.getAttribute("aria-hidden")) {
        clearInterval(interval);
        wrapper.parentNode.removeChild(wrapper);
        for (var k in oldStyle)
          if (oldStyle[k])
            moreInfoEl.style.setProperty(k, oldStyle[k]);
          else
            moreInfoEl.style.removeProperty(k);
      }
    }, 100);
  }, 1000);
  return moreInfoEl;
}
