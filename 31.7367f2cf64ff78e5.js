"use strict";(self.webpackChunksuperapp_backoffice=self.webpackChunksuperapp_backoffice||[]).push([[31],{1031:(J,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>L});var r=a(6895),u=a(5217),e=a(8256);let g=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-auth-base"]],decls:3,vars:0,consts:[[1,"h-screen","w-screen","bg-slate-200","flex","flex-col","place-items-center","justify-center","text-sm","text-slate-700","px-5","md:px-0"],[1,"bg-white","rounded-lg","shadow","grid","grid-cols-1","w-full","md:w-1/2","lg:w-1/3","xl:w-1/4"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"router-outlet"),e.qZA()())},dependencies:[u.lC]}),o})();var i=a(433);class f{constructor(s,n){this.email=s,this.password=n}get FormData(){var s=new FormData;return s.append("email",this.email),s.append("password",this.password),s}get JsonData(){return{email:this.email,password:this.password}}}var c=a(2729),h=a(1782),m=a(929),v=a(2117);let w=(()=>{class o{constructor(n,t,l){this.auth=n,this.notif=t,this.nav=l}Login(n){this.loginSubs=this.auth.login(n).subscribe({next:t=>{localStorage.setItem("token",t.data?.token),localStorage.setItem("user",JSON.stringify(t.data?.user)),this.nav.NavigateTo("/home")},error:t=>{this.notif.Push(new c.F("login gagal","error")),console.log(t)}})}ngOnDestroy(){this.loginSubs?.unsubscribe()}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(h.e),e.LFG(m.g),e.LFG(v.o))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var b=a(3293);function Z(o,s){1&o&&(e.TgZ(0,"span",17),e._uU(1,"Email harus diisi!"),e.qZA())}function A(o,s){1&o&&(e.TgZ(0,"span",17),e._uU(1,"Email tidak valid!"),e.qZA())}function x(o,s){1&o&&(e.TgZ(0,"span",17),e._uU(1,"Password harus diisi!"),e.qZA())}const d=function(o){return{"border-red-500 border":o}},C=[{path:"",component:g,children:[{path:"login",component:(()=>{class o{constructor(n,t,l){this.fb=n,this.service=t,this.notif=l,this.loadingSubmit=!1,this.obsecure=!0,this.form=this.fb.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.required]]})}get email(){return this.form.get("email")}get password(){return this.form.get("password")}obsecureToggle(){this.obsecure=!this.obsecure}Login(){if(this.email?.valid&&this.password?.valid){var n=new f(this.email?.value,this.password?.value);this.service.Login(n)}else console.log("err"),this.notif.Push(new c.F("action failed to execute","error")),console.log(this.notif.notifications),this.email?.markAllAsTouched(),this.password?.markAllAsTouched()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.qu),e.Y36(w),e.Y36(m.g))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:25,vars:12,consts:[[1,"flex","flex-col","gap-10","px-5","py-5","justify-center"],[1,"flex","flex-col","text-center"],[1,"flex","flex-col","justify-center","place-items-center"],["src","/assets/logo/bawaslu-logo.png",1,"h-16","w-16","bg-contain","rounded-lg"],[1,"font-bold","text-xl"],[1,"text-xs"],[1,"flex","flex-col","gap-3",3,"formGroup","submit"],[1,"flex","flex-col","gap-1"],[1,"flex","flex-row","place-items-center","px-3","gap-2","bg-slate-100","rounded",3,"ngClass"],[1,"fa-solid","fa-envelope"],["type","text","placeholder","Email","formControlName","email",1,"flex-1","focus:outline-none","focus:ring-0","bg-transparent","h-10"],["class","text-xs text-red-500",4,"ngIf"],[1,"fa-solid","fa-lock"],["placeholder","Kata Sandi","formControlName","password",1,"flex-1","focus:outline-none","focus:ring-0","bg-transparent","h-10",3,"type"],["type","button",1,"hover:text-orange-500",3,"click"],[1,"fa-solid",3,"ngClass"],["type","submit",1,"bg-orange-500","hover:bg-orange-600","text-white","py-2","px-3","rounded-lg"],[1,"text-xs","text-red-500"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"span",4),e._uU(5,"Selamat Datang Kembali"),e.qZA(),e.TgZ(6,"span",5),e._uU(7,"masuk untuk melanjutkan"),e.qZA()(),e.TgZ(8,"form",6),e.NdJ("submit",function(){return t.Login()}),e.TgZ(9,"div",7)(10,"div",8),e._UZ(11,"i",9)(12,"input",10),e.qZA(),e.YNc(13,Z,2,0,"span",11),e.YNc(14,A,2,0,"span",11),e.qZA(),e.TgZ(15,"div",7)(16,"div",8),e._UZ(17,"i",12)(18,"input",13),e.TgZ(19,"button",14),e.NdJ("click",function(){return t.obsecureToggle()}),e._UZ(20,"i",15),e.qZA()(),e.YNc(21,x,2,0,"span",11),e.qZA(),e.TgZ(22,"button",16),e._uU(23,"Masuk"),e.qZA()()(),e._UZ(24,"app-notifications")),2&n&&(e.xp6(8),e.Q6J("formGroup",t.form),e.xp6(2),e.Q6J("ngClass",e.VKq(8,d,(null==t.email?null:t.email.invalid)&&(null==t.email?null:t.email.touched))),e.xp6(3),e.Q6J("ngIf",(null==t.email?null:t.email.hasError("required"))&&(null==t.email?null:t.email.touched)),e.xp6(1),e.Q6J("ngIf",(null==t.email?null:t.email.hasError("email"))&&(null==t.email?null:t.email.touched)),e.xp6(2),e.Q6J("ngClass",e.VKq(10,d,(null==t.password?null:t.password.invalid)&&(null==t.password?null:t.password.touched))),e.xp6(2),e.Q6J("type",t.obsecure?"password":"text"),e.xp6(2),e.Q6J("ngClass",t.obsecure?"fa-eye":"fa-eye-slash"),e.xp6(1),e.Q6J("ngIf",(null==t.password?null:t.password.hasError("required"))&&(null==t.password?null:t.password.touched)))},dependencies:[r.mk,r.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,b.t]}),o})()},{path:"",redirectTo:"login",pathMatch:"full"}]}];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(C),u.Bz]}),o})();var y=a(4466);let L=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,T,i.UX,y.m]}),o})()}}]);