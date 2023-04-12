import calculatePrice from "./_calculator";
import selected from "./_selected";
import calculatorInput from "./_input";

export default {
  data() {
    return {
      addFloorBoard: false,
      inputs: [{
          title: "A",
          value: null,
          type: "width"
        },
        {
          title: "B",
          value: null,
          type: "width"
        },
        {
          title: "C",
          value: null,
          type: "height"
        },
        {
          title: "D",
          value: null,
          type: "height"
        },
      ],
      selected,
    }
  },
  components: {
    'calculator-input': calculatorInput
  },
  computed: {
    selectedTable() {
      return this.selected.length > 0 ? this.selected[0].table : null;
    }
  },
  methods: {
    calculateMetric(metric, arr) {
      return arr.filter(item => item.type === metric).reduce((acc, item) => acc + item.value, 0);
    },
    renderPrice() {
      if (this.inputs.some(item => !item.value)) {
        return null;
      }

      const width = this.calculateMetric("width", this.inputs);
      const height = this.calculateMetric("height", this.inputs);
      const thickness = this.selected.find(item => item.track)?.track || "double";
      const total = calculatePrice(width, height, thickness, thickness, this.selectedTable);


      return total;

    }

  },
  template: `
  <form id="opening-size-form" class="process__finale grid">
   <div class="process__finale-img ibg" @click="renderPrice">
    <img loading="lazy" src="img/svg/opening-size.svg" class="image" width="505" height="340" alt="Opening Size Image">
   </div>
   <div class="process__finale-body grid">
    <p class="uppercase-bold process__finale-title">
     provide your opening size in mm
    </p>
    <div class="process__finale-inputs grid">
     <calculator-input v-for="(input, index) in inputs" :key="index" :title="input.title" v-model:modelValue="input.value"></calculator-input>
    </div>
    <div class="process__notice grid">
     <label class="checkbox-label text text-300 process__finale-checkbox grid">
      <input v-model="addFloorBoard" type="checkbox" value="Floor Board" name="Floor board checkbox">
      add floor board
      <span class="checkbox"></span>
     </label>
     <p v-if="addFloorBoard" class="text text-300 process__notice-text">
      16mm melamine board recommended to use on top of carpet or concrete floor. The bottom track applies on top of it.
              Please provide the actual opening sizes and we will take care of deductions!
     </p>
    </div>
    <p class="process__finale-total uppercase-bold text">
     Total:
     <span>{{renderPrice()}}$ Inc GST</span>
    </p>
   </div>
  </form>
  <button type="submit" form="opening-size-form" class="uppercase-bold process__finale-btn btn btn-dark"> Add to cart</button>

  `
}
