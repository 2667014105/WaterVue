(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d0a6"],{f699:function(e,s,r){"use strict";r.r(s);var o=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",[e._m(0),r("el-form",{ref:"sensorForm",attrs:{model:e.sensorForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"传感器id"}},[r("el-input",{model:{value:e.sensorForm.sensor_id,callback:function(s){e.$set(e.sensorForm,"sensor_id",s)},expression:"sensorForm.sensor_id"}})],1),r("el-form-item",{attrs:{label:"传感器名称"}},[r("el-input",{model:{value:e.sensorForm.name,callback:function(s){e.$set(e.sensorForm,"name",s)},expression:"sensorForm.name"}})],1),r("el-form-item",{attrs:{label:"传感器地点"}},[r("el-input",{model:{value:e.sensorForm.place,callback:function(s){e.$set(e.sensorForm,"place",s)},expression:"sensorForm.place"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.addForm}},[e._v("立即添加")])],1)],1)],1)},t=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"head"},[r("h1",[e._v("添加传感器（新增传感器）")])])}],n={data(){return{sensorForm:{sensor_id:"",name:"",place:""}}},methods:{async addForm(){const e=await this.$http.post("sensor/new",this.sensorForm);200==e.status&&this.$message({message:e.data,type:"success"})}}},a=n,l=r("2877"),m=Object(l["a"])(a,o,t,!1,null,null,null);s["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d22d0a6.9076062d.js.map