


<template>
  <view class="z-form">







<view class="level_1 z-form__object" 
v-if="parts.form2.model" 
>
<z-collection class="level_2 z-form__array " 
  @add="onAdd(['form2', 'model' ,'approverList'], $event)"
>
    <block v-for="(item2, index2) in parts.form2.model.approverList" 
    class="z-form__array-con " 
>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].approverId"
label="approverId" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'approverId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].approverName"
label="approverName" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'approverName'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'createDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'createUserId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].deptId"
label="deptId" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'deptId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].id"
label="id" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'id'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].name"
label="name" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'name'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].sequence"
label="sequence" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'sequence'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'updateDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.approverList[index2].updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'approverList', index2, 'updateUserId'], $event)">
</van-field>
</view>
    </block>
</z-collection>
<z-collection class="level_2 z-form__array " 
  @add="onAdd(['form2', 'model' ,'fileList'], $event)"
>
    <block v-for="(item2, index2) in parts.form2.model.fileList" 
    class="z-form__array-con " 
>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'createDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'createUserId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].fileName"
label="fileName" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'fileName'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].id"
label="id" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'id'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].isDelete"
label="isDelete" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'isDelete'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].recordsId"
label="recordsId" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'recordsId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'updateDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'updateUserId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.fileList[index2].url"
label="url" 
@change="onSetProp(['form2', 'model' ,'fileList', index2, 'url'], $event)">
</van-field>
</view>
    </block>
</z-collection>
<view class="level_2 z-form__object" 
v-if="parts.form2.model.records" 
>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.applyDate"
label="applyDate" 
@change="onSetProp(['form2', 'model' ,'records','applyDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.applyId"
label="applyId" 
@change="onSetProp(['form2', 'model' ,'records','applyId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.applyName"
label="applyName" 
@change="onSetProp(['form2', 'model' ,'records','applyName'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'records','createDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.createDeptId"
label="createDeptId" 
@change="onSetProp(['form2', 'model' ,'records','createDeptId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'records','createUserId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.createUserName"
label="createUserName" 
@change="onSetProp(['form2', 'model' ,'records','createUserName'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.currentApproverId"
label="currentApproverId" 
@change="onSetProp(['form2', 'model' ,'records','currentApproverId'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.duration"
label="duration" 
@change="onSetProp(['form2', 'model' ,'records','duration'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.endDate"
label="endDate" 
@change="onSetProp(['form2', 'model' ,'records','endDate'], $event)">
</van-field>
</view>
<z-collection class="level_3 z-form__array " 
  @add="onAdd(['form2', 'model' ,'records','fileList'], $event)"
>
    <block v-for="(item3, index3) in parts.form2.model.records.fileList" 
    class="z-form__array-con " 
>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'createDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'createUserId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].fileName"
label="fileName" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'fileName'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].id"
label="id" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'id'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].isDelete"
label="isDelete" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'isDelete'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].recordsId"
label="recordsId" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'recordsId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'updateDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'updateUserId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.fileList[index3].url"
label="url" 
@change="onSetProp(['form2', 'model' ,'records','fileList', index3, 'url'], $event)">
</van-field>
</view>
    </block>
</z-collection>
<view class="level_3 z-form__object" 
v-if="parts.form2.model.records.flowDetail" 
>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.approver"
label="approver" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','approver'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','createDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','createUserId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.id"
label="id" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','id'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.no"
label="no" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','no'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.recordsId"
label="recordsId" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','recordsId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.remark"
label="remark" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','remark'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.result"
label="result" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','result'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.resultName"
label="resultName" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','resultName'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','updateDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowDetail.updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'records','flowDetail','updateUserId'], $event)">
</van-field>
</view>
</view>
<z-collection class="level_3 z-form__array " 
  @add="onAdd(['form2', 'model' ,'records','flowList'], $event)"
>
    <block v-for="(item3, index3) in parts.form2.model.records.flowList" 
    class="z-form__array-con " 
>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].approverId"
label="approverId" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'approverId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].approverName"
label="approverName" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'approverName'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].createDate"
label="createDate" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'createDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].createUserId"
label="createUserId" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'createUserId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].id"
label="id" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'id'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].recordsId"
label="recordsId" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'recordsId'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].sequence"
label="sequence" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'sequence'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'updateDate'], $event)">
</van-field>
</view>
<view class="level_4 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.flowList[index3].updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'records','flowList', index3, 'updateUserId'], $event)">
</van-field>
</view>
    </block>
</z-collection>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.id"
label="id" 
@change="onSetProp(['form2', 'model' ,'records','id'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.isDelete"
label="isDelete" 
@change="onSetProp(['form2', 'model' ,'records','isDelete'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.reason"
label="reason" 
@change="onSetProp(['form2', 'model' ,'records','reason'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.recordsNo"
label="recordsNo" 
@change="onSetProp(['form2', 'model' ,'records','recordsNo'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.remark"
label="remark" 
@change="onSetProp(['form2', 'model' ,'records','remark'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.result"
label="result" 
@change="onSetProp(['form2', 'model' ,'records','result'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.startDate"
label="startDate" 
@change="onSetProp(['form2', 'model' ,'records','startDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.status"
label="status" 
@change="onSetProp(['form2', 'model' ,'records','status'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.updateDate"
label="updateDate" 
@change="onSetProp(['form2', 'model' ,'records','updateDate'], $event)">
</van-field>
</view>
<view class="level_3 z-form__prop" 
>
<van-field
v-model="parts.form2.model.records.updateUserId"
label="updateUserId" 
@change="onSetProp(['form2', 'model' ,'records','updateUserId'], $event)">
</van-field>
</view>
</view>
</view>


  </view>
</template>

<script>
import {computed, reactive} from 'vue';
import { JSON5 } from '@/plugins/z-frame/index';
import { initPart, useModelHandler } from '@/plugins/z-frame/components/ZForm';

export default {
  setup() {
    const config = JSON5.parse(`{name:'form_t9WtdY',parts:[{type:'form2',name:'form2',serviceTpl:{def:{},args:{src:'bservice.twig'}},def:{type:'object',properties:{approverList:{type:'array',items:{type:'object',properties:{approverId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},approverName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},deptId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},name:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},sequence:{type:'integer',ui:{type:'',label:'',widget:'',widgetConfig:{},format:'integer'},rules:{type:'number'}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}}},fileList:{type:'array',items:{type:'object',properties:{createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},fileName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},isDelete:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},recordsId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},url:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}}},records:{type:'object',properties:{applyDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},applyId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},applyName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createDeptId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createUserName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},currentApproverId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},duration:{type:'number',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},endDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},fileList:{type:'array',items:{type:'object',properties:{createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},fileName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},isDelete:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},recordsId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},url:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}}},flowDetail:{type:'object',properties:{approver:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},no:{type:'integer',ui:{type:'',label:'',widget:'',widgetConfig:{},format:'integer'},rules:{type:'number'}},recordsId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},remark:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},result:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},resultName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}},flowList:{type:'array',items:{type:'object',properties:{approverId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},approverName:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},createDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},createUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},recordsId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},sequence:{type:'integer',ui:{type:'',label:'',widget:'',widgetConfig:{},format:'integer'},rules:{type:'number'}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}}},id:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},isDelete:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},reason:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},recordsNo:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},remark:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},result:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},startDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},status:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}},updateDate:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{'value-format':'YYYY-MM-DD HH:mm:ss'},widgetFormat:'datetime'},rules:{}},updateUserId:{type:'string',ui:{type:'',label:'',widget:'',widgetConfig:{}},rules:{}}}}}},computed:{},defaultVal:{approverList:[{}],fileList:[{}],records:{}}}]}`);

    const partControl = {};
    const obj = {};
    const computedModel = {}

    config.parts.forEach((part) => {
      partControl[part.name] = initPart(part, config);
      // console.log(partControl[part.name])

      obj[part.name] = {
        model: partControl[part.name].model,
      };
      // computedModel[part.name] = partControl[part.name].computedModel
    });

    const parts = reactive(obj);

    // console.log(parts)
    for (const key in partControl) {
      partControl[key].init(
        parts[key].model,
      );
      partControl[key].detect(
        parts[key].model,
      );
    }


    const handlers = useModelHandler({
      parts,
    });

    return {
      // doubled: partControl.form2.computedModel.layoutSlotArrComputed,
      // doubled,
      parts,
      ...handlers,
    };
  },
};
</script>
