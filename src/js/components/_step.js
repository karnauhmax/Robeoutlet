import defaultItem from "./_default-item";
import previewItem from './_preview-item';
import finalItem from "./_final-item";
import selected from "./_selected-component";



export default {
  components: {
    'default-item': defaultItem,
    'preview-item': previewItem,
    'final-item': finalItem,
    'selected': selected
  },
  template: `
  <div class="process__step grid process__step-start" :data-show-selected=showSelected :data-step-final="itemsType === 'final' ? 'true' : null">
    <p class="uppercase-bold section-title process__step-title">
      Step {{index + 1}}. {{title}}
    </p>

      <div v-if="isNotFinal(itemsType)" class="process__items grid" :data-items-type=itemsType>

      <template v-if="itemsType === 'preview'">
        <preview-item
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :title="item.title"
        :img="item.img"
        :imgPath="imgPath"
        :table="item.table"
        :color="item.color"
        :index="index"
        >
        </preview-item>
      </template>

      <template v-if="itemsType === 'default'">
        <default-item
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :title="item.title"
        :table="item.table"
        :trackValue="item.trackValue"
        :img="item.img"
        :imgPath="imgPath"
        >
        </default-item>
      </template>

      </div>
      <selected v-if="showSelected" :selectedArr="selected" :imgPath="imgPath"></selected>

      <final-item v-if="itemsType === 'final'"></final-item>

    </div>
  `,
  props: {
    showSelected: Boolean,
    itemsType: String,
    index: Number,
    items: Array,
    title: String,
    selected: Array,
    imgPath: String
  },
  methods: {
    isNotFinal(type) {
      return type !== "final";
    },
  }
}
