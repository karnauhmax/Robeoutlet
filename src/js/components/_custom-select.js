import selectOption from "./_select-option";

export default {
  data() {
    return {
      isVisible: false,
      screenWidth: window.innerWidth
    }
  },
  template: `
  <div v-if="screenWidth <= 767" class="select text-300" @click="isVisible = !isVisible">
    <button class="select__head">Step {{this.$root.currentStep}}</button>
    <div class="select__options grid-flow" v-show="isVisible">
      <select-option v-for="(button, index) in options" :index="index + 1" @click="selectStep(index + 1)"></select-option>
    </div>
    </div>
  `,
  props: {
    options: Array
  },

  methods: {
    selectStep(index) {
      if (this.$root.currentStep > index) {
        this.$root.selectedArr.splice(index - 1);
        for (let i = index; i < this.$root.currentStep; i++) {
          this.$root.selectedArr.splice(i - 1);
        }
        this.$root.currentStep = index;
        console.log(this.$root.currentStep);
      }
      console.log(index);
    },
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    hideSelect() {
      this.isVisible = false;
    },
  },

  components: {
    'select-option': selectOption
  },

  mounted() {
    window.addEventListener('resize', this.updateScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
}
