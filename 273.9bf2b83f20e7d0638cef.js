"use strict";(self.webpackChunkportafolio=self.webpackChunkportafolio||[]).push([[273],{9273:(L,u,i)=>{i.r(u),i.d(u,{ContactMeModule:()=>Z});var c=i(8583),p=i(5002),s=i(665);class m{static getCurrentDate(){const a=new Date,t=a.getDate()<9?`0${a.getDate()}`:String(a.getDate()),o=a.getMonth()+1;return`${t}-${o<9?`0${o}`:String(o)}-${a.getFullYear()}`}}const d={title:"Contacto",nameInputLabel:"Nombre",emailInputLabel:"Correo electr\xf3nico",messageInputLabel:"Mensaje",buttonLabel:"Enviar mensaje",thanks:{title:"Gracias!",message:"Tu mensaje ha sido enviado. Te respondere lo antes posible!",button:"Enviar nuevo mensaje"}};var e=i(7716),h=i(2278);let _=(()=>{class n{constructor(t){this.store=t}saveMessage(t){return this.store.collection("contact-messages").add(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.ST))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function C(n,a){1&n&&(e.TgZ(0,"div",1),e._UZ(1,"div",2),e.qZA())}let f=(()=>{class n{constructor(){this.isLoading=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["wc-loader"]],inputs:{isLoading:"isLoading"},decls:1,vars:1,consts:[["class","overlay",4,"ngIf"],[1,"overlay"],[1,"loader"]],template:function(t,o){1&t&&e.YNc(0,C,2,0,"div",0),2&t&&e.Q6J("ngIf",o.isLoading)},directives:[c.O5],styles:[".overlay[_ngcontent-%COMP%]{position:fixed;display:block;width:100%;height:100%;top:0;left:0;background-color:#8b8b8b4d;z-index:99999}.loader[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:50px;height:50px;border-radius:50%;border-top:5px solid #ffffff;border-right:5px solid #3c9d93;border-bottom:5px solid #3c9d93;border-left:5px solid #3c9d93;animation:spinner 1s infinite linear}@keyframes spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),n})();function M(n,a){if(1&n&&(e.ynx(0),e.TgZ(1,"span",4),e._uU(2),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.errorMessage)}}const x=function(n){return{error:n}};let b=(()=>{class n{constructor(){this.isDisabled=!1,this.hasErrors=!1,this.type="text",this.onChange=t=>{},this.onTouched=()=>{}}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.isDisabled=t}changeValue(){this.onChange(this.value)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["wc-input"]],inputs:{label:"label",type:"type"},features:[e._Bn([{provide:s.JU,multi:!0,useExisting:(0,e.Gpc)(()=>n)}])],decls:5,vars:8,consts:[[1,"container"],["for","input"],["name","input","required","",3,"type","ngModel","ngClass","disabled","ngModelChange","change","keyup","click"],[4,"ngIf"],[1,"error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"input",2),e.NdJ("ngModelChange",function(l){return o.value=l})("change",function(){return o.changeValue()})("keyup",function(){return o.changeValue()})("click",function(){return o.changeValue()}),e.qZA(),e.YNc(4,M,3,1,"ng-container",3),e.qZA()),2&t&&(e.xp6(2),e.Oqu(o.label),e.xp6(1),e.Q6J("type",o.type)("ngModel",o.value)("ngClass",e.VKq(6,x,o.hasErrors))("disabled",o.isDisabled),e.xp6(1),e.Q6J("ngIf",o.hasErrors))},directives:[s.Fj,s.Q7,s.JJ,s.On,c.mk,c.O5],styles:[".container[_ngcontent-%COMP%]{width:75vw;position:relative;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;background:transparent;color:#fff;margin:6px 0;padding:0 2px;left:10px}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:8px 10px;border-radius:8px;border:none;color:#fff;outline:1px solid #19443b;background-color:#203a52;-moz-appearance:textfield}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.container[_ngcontent-%COMP%]   span.error[_ngcontent-%COMP%]{color:#df6060;font-size:12px;margin:8px 0 0 12px}input[_ngcontent-%COMP%]:hover{outline:1px solid #2d8c81!important}input[_ngcontent-%COMP%]:focus{outline:2px solid #2d8c81!important}input.error[_ngcontent-%COMP%]{outline:1px solid #df6060!important}"]}),n})();function v(n,a){if(1&n&&(e.TgZ(0,"span",6),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Oqu(t.errorMessage)}}const g=function(n){return{error:n}};let O=(()=>{class n{constructor(){this.counter=0,this.value="",this.hasErrors=!1,this.isDisabled=!1,this.onChange=t=>{},this.onTouched=()=>{}}getCounter(){var t,o;return null!==(o=null===(t=this.value)||void 0===t?void 0:t.length)&&void 0!==o?o:0}writeValue(t){this.value=t}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.isDisabled=t}changeValue(){this.onChange(this.value)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["wc-text-area"]],inputs:{label:"label",maxChars:"maxChars"},features:[e._Bn([{provide:s.JU,multi:!0,useExisting:(0,e.Gpc)(()=>n)}])],decls:8,vars:12,consts:[[1,"container"],["for","textarea"],["name","textarea","required","",3,"ngClass","ngModel","maxLength","ngModelChange","change","keyup","click"],[1,"msg-box",3,"ngClass"],["class","error",4,"ngIf"],[1,"counter"],[1,"error"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"textarea",2),e.NdJ("ngModelChange",function(l){return o.value=l})("change",function(){return o.changeValue()})("keyup",function(){return o.changeValue()})("click",function(){return o.changeValue()}),e.qZA(),e.TgZ(4,"div",3),e.YNc(5,v,2,1,"span",4),e.TgZ(6,"span",5),e._uU(7),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Oqu(o.label),e.xp6(1),e.Q6J("ngClass",e.VKq(8,g,o.hasErrors))("ngModel",o.value)("maxLength",o.maxChars),e.xp6(1),e.Q6J("ngClass",e.VKq(10,g,o.hasErrors)),e.xp6(1),e.Q6J("ngIf",o.hasErrors),e.xp6(2),e.AsE("",o.getCounter(),"/",o.maxChars,""))},directives:[s.Fj,s.Q7,c.mk,s.JJ,s.On,c.O5],styles:[".container[_ngcontent-%COMP%]{width:75vw;display:flex;flex-direction:column}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;background:transparent;color:#fff;margin:6px 0;padding:0 2px}.container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:100px;padding:5px;border-radius:8px;border:none;color:#fff;outline:1px solid #19443b;background-color:#203a52}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;padding:5px 10px;font-size:12px;text-align:right}.container[_ngcontent-%COMP%]   .msg-box[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.container[_ngcontent-%COMP%]   .msg-box[_ngcontent-%COMP%]   span.error[_ngcontent-%COMP%]{color:#df6060;font-size:12px;margin:2px 0 0 12px}.container[_ngcontent-%COMP%]   .msg-box.error[_ngcontent-%COMP%]{justify-content:space-between}textarea[_ngcontent-%COMP%]:hover{outline:1px solid #2d8c81!important}textarea[_ngcontent-%COMP%]:focus{outline:1px solid #2d8c81!important}textarea.error[_ngcontent-%COMP%]{outline:1px solid #df6060!important}"]}),n})();const T=["nameInput"],k=["emailInput"],y=["messageInput"];function I(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",4),e.TgZ(1,"wc-input",5,6),e.NdJ("keyup",function(){return e.CHM(t),e.oxw().onNameChange()}),e.qZA(),e.TgZ(3,"wc-input",7,8),e.NdJ("keyup",function(){return e.CHM(t),e.oxw().onEmailChange()}),e.qZA(),e.TgZ(5,"wc-text-area",9,10),e.NdJ("keyup",function(){return e.CHM(t),e.oxw().onMessageChange()}),e.qZA(),e.TgZ(7,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().sendMessage()}),e._uU(8),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.messageForm),e.xp6(1),e.Q6J("label",t.contactMeLabels.nameInputLabel),e.xp6(2),e.Q6J("label",t.contactMeLabels.emailInputLabel),e.xp6(2),e.Q6J("label",t.contactMeLabels.messageInputLabel)("maxChars",200),e.xp6(3),e.Oqu(t.contactMeLabels.buttonLabel)}}function P(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"div",12),e.TgZ(1,"p",13),e._uU(2),e.qZA(),e.TgZ(3,"p",14),e._uU(4),e.qZA(),e.TgZ(5,"button",11),e.NdJ("click",function(){return e.CHM(t),e.oxw().sendNewMessage()}),e._uU(6),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.Oqu(t.contactMeLabels.thanks.title),e.xp6(2),e.Oqu(t.contactMeLabels.thanks.message),e.xp6(2),e.Oqu(t.contactMeLabels.thanks.button)}}const w=[{path:"",component:(()=>{class n{constructor(t,o){this.fb=t,this.fireService=o,this.isMessageSent=!1,this.isLoading=!1}ngOnInit(){this.initMessageForm()}get contactMeLabels(){return d}initMessageForm(){this.messageForm=this.fb.group({name:[null,[s.kI.required]],email:[null,[s.kI.required,s.kI.email]],message:[null,[s.kI.required]]})}onNameChange(){if(this.messageForm.get("name").hasError("required"))return this.nameInput.hasErrors=!0,void(this.nameInput.errorMessage="Campo obligatorio!");this.nameInput.hasErrors=!1,this.nameInput.errorMessage=""}onEmailChange(){const t=this.messageForm.get("email");return t.hasError("required")?(this.emailInput.hasErrors=!0,void(this.emailInput.errorMessage="Campo obligatorio!")):t.hasError("email")?(this.emailInput.hasErrors=!0,void(this.emailInput.errorMessage="Correo no valido!")):(this.emailInput.hasErrors=!1,void(this.emailInput.errorMessage=""))}onMessageChange(){if(this.messageForm.get("message").hasError("required"))return this.messageInput.hasErrors=!0,void(this.messageInput.errorMessage="Campo obligatorio!");this.messageInput.hasErrors=!1,this.messageInput.errorMessage=""}sendMessage(){if(this.messageForm.valid){this.isLoading=!0;const t={date:m.getCurrentDate(),name:this.messageForm.get("name").value,email:this.messageForm.get("email").value,message:this.messageForm.get("message").value};this.fireService.saveMessage(t).then(()=>{this.isLoading=!1,this.isMessageSent=!0},()=>{this.isLoading=!1,this.isMessageSent=!0})}else this.onNameChange(),this.onEmailChange(),this.onMessageChange()}sendNewMessage(){this.isMessageSent=!1,this.messageForm.reset()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.qu),e.Y36(_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-contact-me"]],viewQuery:function(t,o){if(1&t&&(e.Gf(T,5),e.Gf(k,5),e.Gf(y,5)),2&t){let r;e.iGM(r=e.CRH())&&(o.nameInput=r.first),e.iGM(r=e.CRH())&&(o.emailInput=r.first),e.iGM(r=e.CRH())&&(o.messageInput=r.first)}},decls:6,vars:4,consts:[[3,"isLoading"],[1,"contact-me-container"],["class","form",3,"formGroup",4,"ngIf"],["class","thanks",4,"ngIf"],[1,"form",3,"formGroup"],["type","text","formControlName","name","ngDefaultControl","",3,"label","keyup"],["nameInput",""],["type","email","formControlName","email","ngDefaultControl","",3,"label","keyup"],["emailInput",""],["formControlName","message","ngDefaultControl","",3,"label","maxChars","keyup"],["messageInput",""],["type","button",3,"click"],[1,"thanks"],[1,"title"],[1,"message"]],template:function(t,o){1&t&&(e._UZ(0,"wc-loader",0),e.TgZ(1,"div",1),e.TgZ(2,"h1"),e._uU(3),e.qZA(),e.YNc(4,I,9,6,"div",2),e.YNc(5,P,7,3,"div",3),e.qZA()),2&t&&(e.Q6J("isLoading",o.isLoading),e.xp6(3),e.Oqu(o.contactMeLabels.title),e.xp6(1),e.Q6J("ngIf",!o.isMessageSent),e.xp6(1),e.Q6J("ngIf",o.isMessageSent))},directives:[f,c.O5,s.JL,s.sg,b,s.JJ,s.u,s.Fj,O],styles:[".contact-me-container[_ngcontent-%COMP%]{text-align:center;margin:30px auto}.contact-me-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:20px}.contact-me-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{display:grid;grid-auto-flow:row;justify-content:center;text-align:left;grid-row-gap:20px;row-gap:20px}.contact-me-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#2d8c81}.contact-me-container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#3b5877}.contact-me-container[_ngcontent-%COMP%]   .thanks[_ngcontent-%COMP%]{text-align:center;width:80%;margin:20vh 30px}.contact-me-container[_ngcontent-%COMP%]   .thanks[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:18px;font-weight:600}.contact-me-container[_ngcontent-%COMP%]   .thanks[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{font-size:14px}button[_ngcontent-%COMP%]{height:30px;width:100%;color:#fff;border-radius:12px;border:1px solid #011627;background-color:#3c9d93;cursor:pointer}"]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,p.Bz.forChild(w)],p.Bz]}),n})()}}]);