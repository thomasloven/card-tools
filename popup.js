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
    .scrollable {
      overflow: auto;
      max-width: 100% !important;
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

  const scroll = document.createElement("div");
  scroll.classList.add('scrollable');
  scroll.appendChild(content);

  if(!fullscreen) {
    wrapper.appendChild(header);
  }
  wrapper.appendChild(scroll);

  const moreInfoEl = document.querySelector("home-assistant")._moreInfoEl;
  if(moreInfoEl._closer) moreInfoEl._closer();
  moreInfoEl.sizingTarget = scroll;
  moreInfoEl.large = large;
  moreInfoEl._page = "none";
  moreInfoEl.shadowRoot.appendChild(wrapper);

  let oldStyle = {};
  if(style) {
    for (var k in style) {
      oldStyle[k] = moreInfoEl.style[k];
      moreInfoEl.style.setProperty(k, style[k]);
    }
  }

  moreInfoEl._closer = function() {
    wrapper.parentNode.removeChild(wrapper);
    for (var k in oldStyle)
      if (oldStyle[k])
        moreInfoEl.style.setProperty(k, oldStyle[k]);
      else
        moreInfoEl.style.removeProperty(k);
    moreInfoEl._closer = null;
  }

  setTimeout(() => {
    let interval = setInterval(() => {
      if (moreInfoEl.getAttribute("aria-hidden")) {
        clearInterval(interval);
        if(moreInfoEl._closer) moreInfoEl._closer();
      }
    }, 100);
  }, 1000);
  return moreInfoEl;
}
