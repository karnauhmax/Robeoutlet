import selectedArr from "../components/_selected";
import steps from "../components/_frameless-steps";
import customSelect from "../components/_custom-select";
import selectedComponent from "../components/_selected-component";
import step from "../components/_step";
import stepBtn from "../components/_step-btn";

const { createApp } = Vue;



const app = createApp({
  data() {
    return {
      stepBtns: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      currentStep: 1,
      steps,
      selectedArr,
      imgPath: "img/content/",
    };
  },
  methods: {
    selectStep(index) {
      if (this.currentStep > index) {
        this.selectedArr.splice(index - 1);
        for (let i = index; i < this.currentStep; i++) {
          this.selectedArr.splice(i - 1);
        }
        this.currentStep = index;
      }
    },

  },
  components: {
    'custom-select': customSelect,
    'selected': selectedComponent,
    'step': step,
    'step-btn': stepBtn,
  }
});

app.mount("[data-quiz-type='frameless-doors']");
