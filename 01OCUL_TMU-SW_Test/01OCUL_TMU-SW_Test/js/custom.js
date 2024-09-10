(function(){
"use strict";
'use strict';

var app = angular.module('viewCustom', ['angularLoad']);

/* chat widget */

(function() {
    var x = document.createElement("script"); x.type = "text/javascript"; x.async = true;
    x.src = (document.location.protocol === "https:" ? "https://" : "http://") + "ca.libraryh3lp.com/js/libraryh3lp.js?1125";
    var y = document.getElementsByTagName("script")[0]; y.parentNode.insertBefore(x, y);
  })();

var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}let l;function f(t){l=t}const d=[],m=[];let p=[];const $=[],h=Promise.resolve();let g=!1;function y(t){p.push(t)}const b=new Set;let _=0;function x(){if(0!==_)return;const t=l;do{try{for(;_<d.length;){const t=d[_];_++,f(t),v(t.$$)}}catch(t){throw d.length=0,_=0,t}for(f(null),d.length=0,_=0;m.length;)m.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while(d.length);for(;$.length;)$.pop()();g=!1,b.clear(),f(t)}function v(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(y)}}const w=new Set;let k;function E(t,n){t&&t.i&&(w.delete(t),t.i(n))}function j(t,e,c,u){const{fragment:s,after_update:a}=t.$$;s&&s.m(e,c),u||y((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(y)}function N(t,n){const e=t.$$;null!==e.fragment&&(!function(t){const n=[],e=[];p.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),p=n}(e.after_update),o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(d.push(t),g||(g=!0,h.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(n,r,c,u,a,i,d,m=[-1]){const p=l;f(n);const $=n.$$={fragment:null,ctx:[],props:i,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:r.target||p.$$.root};d&&d($.root);let h=!1;if($.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&a($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),h&&q(n,t)),e})):[],$.update(),h=!0,o($.before_update),$.fragment=!!u&&u($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();r.intro&&E(n.$$.fragment),j(n,r.target,r.anchor,r.customElement),x()}f(p)}class O{$destroy(){N(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function S(t){let n,e;return{c(){var o,r,c;n=a("div"),e=i(t[0]),o=n,r="class",null==(c="banner svelte-1yhnqf7")?o.removeAttribute(r):o.getAttribute(r)!==c&&o.setAttribute(r,c)},m(t,o){u(t,n,o),function(t,n){t.appendChild(n)}(n,e)},p(t,n){1&n&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(e,t[0])},d(t){t&&s(n)}}}function T(n){let e,o=n[0]&&S(n);return{c(){o&&o.c(),e=i("")},m(t,n){o&&o.m(t,n),u(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=S(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&s(e)}}}function C(t,n,e){let{url:o="https://library.torontomu.ca/wp-json/acf/v3/options/options/summon_alert_message"}=n,{message:r=""}=n,{error:c=null}=n;async function u(){try{const t=await fetch(o);return(await t.json()).summon_alert_message}catch(t){return console.error(t),e(1,c=t),null}}return function(t=1e3){u().then((t=>{null!==t&&""!==t.trim()?e(0,r=t):(document.body.style.marginTop="0",document.querySelector(".banner").style.display="none")})),setInterval((()=>{u().then((t=>{null!==t&&""!==t.trim()?e(0,r=t):(document.body.style.marginTop="0",document.querySelector(".banner").style.display="none")}))}),t)}(),t.$$set=t=>{"url"in t&&e(2,o=t.url),"message"in t&&e(0,r=t.message),"error"in t&&e(1,c=t.error)},[r,c,o]}class B extends O{constructor(t){super(),A(this,t,C,T,c,{url:2,message:0,error:1})}}function I(n){let e,o,r;return o=new B({}),{c(){var t;e=a("main"),(t=o.$$.fragment)&&t.c()},m(t,n){u(t,e,n),j(o,e,null),r=!0},p:t,i(t){r||(E(o.$$.fragment,t),r=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),k.c.push((()=>{w.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}(o.$$.fragment,t),r=!1},d(t){t&&s(e),N(o)}}}return new class extends O{constructor(t){super(),A(this,t,null,I,c,{})}}({target:document.body})}();

"use strict";
'use strict';

"use strict";
'use strict';

"use strict";
'use strict';

app.component('prmLocationItemsAfterAppStoreGenerated', {
    bindings: { parentCtrl: '<' },
    controller: function controller($scope) {
        this.$onInit = function () {
            {
                var activateFilter = function activateFilter() {
                    console.log("starting activateFilter");
                    filterCount = filterCount + 1;
                    // once the filter is expanded, clear interval and stop trying                    
                    // may have multiple filters (one hidden).

                    if (document.querySelectorAll("[translate='nui.aria.locationItems.filters']").length > 0) {
                        clearInterval(myFilterIntervalVar);
                        return;
                    }

                    //failsafe if we have a record the target fails
                    if (filterCount > 5) {
                        clearInterval(myFilterIntervalVar);
                        return;
                    }

                    var filter_list = document.querySelectorAll("[id^='filter']");
                    for (var i = 0; i < filter_list.length; i++) {
                        filter_list[i].parentNode.click();
                        filterExpanded = true;
                    }
                };

                var myFilterIntervalVar = setInterval(activateFilter, 800);
                // loop via timer until filter expanded (handle UI delays)
                var filterCount = 0;
                var filterExpanded = false;
            }
        };
    }
}); // end of component for prmLocationItemsAfterAppStoreGenerated

/********** START OF COLLAPSE OF ALMA OTHER MEMBERS IN FULL DISPLAY ***************/

    // Collapse "Get It From Other Institutions" dropdown by default in full record display. 
    app.component("prmAlmaOtherMembersAfter", {
        bindings: {parentCtrl: '<'},
        controller: function($scope) {
            this.$onInit = function(){
            {              
                var ctrl = this;
                ctrl.parentCtrl.isCollapsed = true;
            }            
        }; 
        }      
    }); 
    /********** END OF COLLAPSE OF ALMA OTHER MEMBERS IN FULL DISPLAY ***************/

//Auto generated code by primo app store DO NOT DELETE!!! -START-
/*
    hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
    e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
 */
app.controller('LocationItemsAfterController', [function () {
    var vm = this;
}]);

app.component('prmLocationItemsAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'LocationItemsAfterController',
    template: '\n    <prm-location-items-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-location-items-after-app-store-generated>\n'

});

//Auto generated code by primo app store DO NOT DELETE!!! -END-
})();