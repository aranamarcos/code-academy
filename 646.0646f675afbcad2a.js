"use strict";(self.webpackChunkproyectoCoderArana=self.webpackChunkproyectoCoderArana||[]).push([[646],{5646:(x,u,t)=>{t.r(u),t.d(u,{AutenticacionModule:()=>Z});var m=t(6895),e=t(4006),d=t(9822),o=t(4650),g=t(3829),f=t(9653),s=t(6582),p=t(4859),l=t(9549),v=t(4144);const h=[{path:"login",component:(()=>{class n{constructor(i,r,c){this.sesionService=i,this.store=r,this.router=c,this.formulario=new e.cw({usuario:new e.NI("admin"),contrasena:new e.NI("admin"),admin:new e.NI(!0)})}ngOnInit(){}login(){this.sesionService.login({id:0,nombre:"",apellido:"",email:"",usuario:this.formulario.value.usuario,contrasena:this.formulario.value.contrasena,admin:this.formulario.value.admin}).subscribe(r=>{r&&(this.store.dispatch((0,d.d2)({usuarioActivo:r})),this.router.navigate(["inicio"]))})}}return n.\u0275fac=function(i){return new(i||n)(o.Y36(g.K),o.Y36(f.yh),o.Y36(s.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:21,vars:1,consts:[[1,"row","inicio"],[1,"col-md-4","d-flex","align-items-center"],[1,"contenedor_login"],[1,"contenedor_titulo"],[1,"mx-5",3,"formGroup","ngSubmit"],[1,"d-flex","flex-column"],["appearance","fill",1,"fill","w100"],["matInput","","formControlName","usuario"],["matInput","","formControlName","contrasena"],[1,"d-flex","justify-content-end"],["type","submit","mat-raised-button","","color","accent",1,"centrar"],[1,"col-md-4"],["src","./assets/img/inicio.png","alt",""]],template:function(i,r){1&i&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h2"),o._uU(5,"Iniciar Sesion"),o.qZA()(),o.TgZ(6,"form",4),o.NdJ("ngSubmit",function(){return r.login()}),o.TgZ(7,"div",5)(8,"mat-form-field",6)(9,"mat-label"),o._uU(10,"Usuario"),o.qZA(),o._UZ(11,"input",7),o.qZA(),o.TgZ(12,"mat-form-field",6)(13,"mat-label"),o._uU(14,"Contrasena"),o.qZA(),o._UZ(15,"input",8),o.qZA(),o.TgZ(16,"div",9)(17,"button",10),o._uU(18,"Entrar"),o.qZA()()()()()(),o.TgZ(19,"div",11),o._UZ(20,"img",12),o.qZA()()),2&i&&(o.xp6(6),o.Q6J("formGroup",r.formulario))},dependencies:[p.lW,l.KE,l.hX,v.Nt,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:[".w100[_ngcontent-%COMP%]{width:100%}.contenedor_titulo[_ngcontent-%COMP%]{width:100%;background-color:#3f51b5;border-top-left-radius:10px;border-top-right-radius:10px;margin-bottom:30px}h2[_ngcontent-%COMP%]{color:#fff;text-align:center;padding:10px}.contenedor_login[_ngcontent-%COMP%]{width:100%;margin:0 20px;border:1px solid lightgray;border-radius:10px;padding:0 0 30px}"]}),n})()}];let A=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.Bz.forChild(h),s.Bz]}),n})();var C=t(4466);let Z=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[m.ez,A,C.m]}),n})()}}]);