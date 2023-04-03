"use strict";(self.webpackChunkcodespaces_react=self.webpackChunkcodespaces_react||[]).push([[470],{9126:function(e,t,n){n.d(t,{GxQ:function(){return o}});var r=n(9983);function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z"}},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"}}]})(e)}},3853:function(e,t,n){n.d(t,{bTu:function(){return o}});var r=n(9983);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"}}]})(e)}},860:function(e,t,n){n.d(t,{hYx:function(){return o}});var r=n(9983);function o(e){return(0,r.w_)({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M10.027 10.074v-10.074h-6.054v10.077l3.021-2.053 3.033 2.050zM4.973 8.188v-7.188h4.055v7.191l-2.037-1.376-2.018 1.373zM16 1.007v14.993h-15v-14.993h1.974v1h-0.974v12.993h13v-12.993h-4.005v-1h5.005z"}}]})(e)}},2279:function(e,t,n){n.d(t,{p:function(){return _}});var r,o,u,a=n(9439),l=n(4925),i=n(4942),s=n(1413),c=n(2791),d=n(9904),f=n(785),p=n(4159),v=n(7003),h=n(7369),Z=n(2953),g=n(4510),P=n(4381),y=n(5718),k=n(3654),m=null!=(r=c.startTransition)?r:function(e){e()},I=["defaultOpen"],S=["id"],b=["id"],E=((u=E||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),C=function(e){return e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e}(C||{}),D=(o={},(0,i.Z)(o,0,(function(e){var t;return(0,s.Z)((0,s.Z)({},e),{},{disclosureState:(0,d.E)(e.disclosureState,(t={},(0,i.Z)(t,0,1),(0,i.Z)(t,1,0),t))})})),(0,i.Z)(o,1,(function(e){return 1===e.disclosureState?e:(0,s.Z)((0,s.Z)({},e),{},{disclosureState:1})})),(0,i.Z)(o,4,(function(e){return!0===e.linkedPanel?e:(0,s.Z)((0,s.Z)({},e),{},{linkedPanel:!0})})),(0,i.Z)(o,5,(function(e){return!1===e.linkedPanel?e:(0,s.Z)((0,s.Z)({},e),{},{linkedPanel:!1})})),(0,i.Z)(o,2,(function(e,t){return e.buttonId===t.buttonId?e:(0,s.Z)((0,s.Z)({},e),{},{buttonId:t.buttonId})})),(0,i.Z)(o,3,(function(e,t){return e.panelId===t.panelId?e:(0,s.Z)((0,s.Z)({},e),{},{panelId:t.panelId})})),o),M=(0,c.createContext)(null);function R(e){var t=(0,c.useContext)(M);if(null===t){var n=new Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,R),n}return t}M.displayName="DisclosureContext";var T=(0,c.createContext)(null);function w(e){var t=(0,c.useContext)(T);if(null===t){var n=new Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(n,w),n}return t}T.displayName="DisclosureAPIContext";var x=(0,c.createContext)(null);function z(e,t){return(0,d.E)(t.type,D,e,t)}x.displayName="DisclosurePanelContext";var B=c.Fragment;var O=f.AN.RenderStrategy|f.AN.Static;var L=(0,f.yV)((function(e,t){var n,r=e.defaultOpen,o=void 0!==r&&r,u=(0,l.Z)(e,I),s=(0,c.useRef)(null),v=(0,p.T)(t,(0,p.h)((function(e){s.current=e}),void 0===e.as||e.as===c.Fragment)),h=(0,c.useRef)(null),Z=(0,c.useRef)(null),P=(0,c.useReducer)(z,{disclosureState:o?0:1,linkedPanel:!1,buttonRef:Z,panelRef:h,buttonId:null,panelId:null}),m=(0,a.Z)(P,2),S=m[0],b=S.disclosureState,E=S.buttonId,C=m[1],D=(0,k.z)((function(e){C({type:1});var t=(0,y.r)(s);if(t&&E){var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(E):t.getElementById(E);null==n||n.focus()}})),R=(0,c.useMemo)((function(){return{close:D}}),[D]),w=(0,c.useMemo)((function(){return{open:0===b,close:D}}),[b,D]),x={ref:v};return c.createElement(M.Provider,{value:P},c.createElement(T.Provider,{value:R},c.createElement(g.up,{value:(0,d.E)(b,(n={},(0,i.Z)(n,0,g.ZM.Open),(0,i.Z)(n,1,g.ZM.Closed),n))},(0,f.sY)({ourProps:x,theirProps:u,slot:w,defaultTag:B,name:"Disclosure"}))))})),V=(0,f.yV)((function(e,t){var n=(0,v.M)(),r=e.id,o=void 0===r?"headlessui-disclosure-button-".concat(n):r,u=(0,l.Z)(e,S),i=R("Disclosure.Button"),s=(0,a.Z)(i,2),d=s[0],g=s[1],y=(0,c.useContext)(x),m=null!==y&&y===d.panelId,I=(0,c.useRef)(null),b=(0,p.T)(I,t,m?null:d.buttonRef);(0,c.useEffect)((function(){if(!m)return g({type:2,buttonId:o}),function(){g({type:2,buttonId:null})}}),[o,g,m]);var E=(0,k.z)((function(e){var t;if(m){if(1===d.disclosureState)return;switch(e.key){case h.R.Space:case h.R.Enter:e.preventDefault(),e.stopPropagation(),g({type:0}),null==(t=d.buttonRef.current)||t.focus()}}else switch(e.key){case h.R.Space:case h.R.Enter:e.preventDefault(),e.stopPropagation(),g({type:0})}})),C=(0,k.z)((function(e){if(e.key===h.R.Space)e.preventDefault()})),D=(0,k.z)((function(t){var n;(0,Z.P)(t.currentTarget)||e.disabled||(m?(g({type:0}),null==(n=d.buttonRef.current)||n.focus()):g({type:0}))})),M=(0,c.useMemo)((function(){return{open:0===d.disclosureState}}),[d]),T=(0,P.f)(e,I),w=m?{ref:b,type:T,onKeyDown:E,onClick:D}:{ref:b,id:o,type:T,"aria-expanded":e.disabled?void 0:0===d.disclosureState,"aria-controls":d.linkedPanel?d.panelId:void 0,onKeyDown:E,onKeyUp:C,onClick:D};return(0,f.sY)({ourProps:w,theirProps:u,slot:M,defaultTag:"button",name:"Disclosure.Button"})})),N=(0,f.yV)((function(e,t){var n=(0,v.M)(),r=e.id,o=void 0===r?"headlessui-disclosure-panel-".concat(n):r,u=(0,l.Z)(e,b),i=R("Disclosure.Panel"),s=(0,a.Z)(i,2),d=s[0],h=s[1],Z=w("Disclosure.Panel").close,P=(0,p.T)(t,d.panelRef,(function(e){m((function(){return h({type:e?4:5})}))}));(0,c.useEffect)((function(){return h({type:3,panelId:o}),function(){h({type:3,panelId:null})}}),[o,h]);var y=(0,g.oJ)(),k=null!==y?(y&g.ZM.Open)===g.ZM.Open:0===d.disclosureState,I=(0,c.useMemo)((function(){return{open:0===d.disclosureState,close:Z}}),[d,Z]),S={ref:P,id:o};return c.createElement(x.Provider,{value:d.panelId},(0,f.sY)({ourProps:S,theirProps:u,slot:I,defaultTag:"div",features:O,visible:k,name:"Disclosure.Panel"}))})),_=Object.assign(L,{Button:V,Panel:N})}}]);
//# sourceMappingURL=470.cdbd7818.chunk.js.map