"use strict";class DynamicDisclaimer{constructor(ctaText,app){this.app=app||window.appInstance||new App();this.ctaText=ctaText;}
onInit(){if(window.isDynamicDisclaimerRendered)return;this.injectDisclaimer();}
injectDisclaimer(){if(document.querySelector('#cta-disclaimer')){var _window$customData;this.ctaText=this.ctaText.replaceAll('&nbsp;','').trim();var disclaimer=((_window$customData=window.customData)===null||_window$customData===void 0?void 0:_window$customData.lander_disclaimer)||this.app.getFallbackDisclaimer();document.querySelector('#cta-disclaimer').innerHTML=decodeURIComponent(disclaimer.replace('{{ctaText}}',encodeURIComponent(ctaText)));}}}