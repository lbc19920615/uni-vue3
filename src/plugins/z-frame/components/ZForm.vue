<template>
<view class="z-form">

  <view class="level_1 z-form__object"  label-width='150px'
        v-if="parts.form2.model"
  >
    <view class="level_2 z-form__prop"  scroll-control='page_name'
    >
      <van-field
          v-model="parts.form2.model.name"
          label="name"
          @change="onSetProp(['form2', 'model' ,'name'], $event)">
      </van-field>
    </view>
    <view class="level_2 z-form__prop"
    >
      <van-field
          v-model="parts.form2.model.name1"
          label="name1"
          @change="onSetProp(['form2', 'model' ,'name1'], $event)">
      </van-field>
    </view>
    <z-collection class="level_2 z-form__array "  scroll-control='page_slotArr'
                  @add="onAdd(['form2', 'model' ,'layoutSlotArr'], $event)"
    >
      <block v-for="(item2, index2) in parts.form2.model.layoutSlotArr"
             class="z-form__array-con a-space-mb-20"  :name='"slot"+index2'
      >
        <view class="level_3 z-form__prop"
        >
          <van-field
              v-model="parts.form2.model.layoutSlotArr[index2].name"
              label="name"
              @change="onSetProp(['form2', 'model' ,'layoutSlotArr', index2, 'name'], $event)">
          </van-field>
        </view>
        <view class="level_3 z-form__prop"
        >
          <van-field
              v-model="parts.form2.model.layoutSlotArr[index2].prop1"
              label="prop1"
              @change="onSetProp(['form2', 'model' ,'layoutSlotArr', index2, 'prop1'], $event)">
          </van-field>
        </view>
      </block>
    </z-collection>
  </view>

</view>
</template>

<script>
import {computed, reactive} from 'vue';
import { JSON5 } from '@/plugins/z-frame/index';
import { initPart, useModelHandler } from '@/plugins/z-frame/components/ZForm';

export default {
  name: 'ZForm',
  setup() {
    const config = JSON5.parse(`{constants:{},parts:[{type:'form2',name:'form2',serviceTpl:{def:{},args:{src:'bservice.twig'}},def:{type:'object',ui:{attrs:[['label-width','150px']]},properties:{name:{type:'string',ui:{attrs:[['scroll-control','page_name']],class:['a-space-pt-20'],widget:'van-field',widgetConfig:{enums:"ROOT_STATE('tools.constVars_pageNames', [])"}}},name1:{type:'string',computedProp:'layoutSlotArrComputed'},layoutSlotArr:{type:'array',ui:{label:'Slot',attrs:[['scroll-control','page_slotArr']],conAttrs:[{prefixValue:'"slot"+',handler:['c','return [":name", c.indexKey]']}],conClass:['a-space-mb-20']},items:{type:'object',properties:{name:{type:'string',ui:{widget:'van-field',widgetConfig:{suggest:[{label:'Form After',value:'form_after'}]}}},prop1:{type:'string',reflect:'name',reflectTpl:'$VAL'}}}}}},computed:{layoutSlotArrComputed:"A.slotArrToStr(MODEL('name'))"},service:'ServiceJ5CnFHgdga57QhYD1s3a2'}],process:'o582V2U4si5QEqzewnyVA',servicePartLink:{form2:'ServiceJ5CnFHgdga57QhYD1s3a2'}}`);

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
    partControl.form2.detect(parts.form2.model);

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
