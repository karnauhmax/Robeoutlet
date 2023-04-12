import selected from "./_selected";

export default {
  data() {
    return {
      selected
    }
  },
  template: `
  <div tabindex="0" class="process__item grid" @click="nextStep">
         <div class="process__img ibg">
          <img loading="lazy" :src="imgPath + img" width="445" height="290" alt="Framed Silver Doorss">
        </div>
        <p class="process__name uppercase-bold">
          {{title}}
        </p>
      </div>
  `,
  props: {
    title: String,
    img: String,
    imgPath: String,
    table: Array,
    trackValue: String
  },
  methods: {
    nextStep() {
      this.$root.selectedArr.push({ title: this.title, img: this.img, table: this.table, track: this.trackValue });
      this.$root.currentStep++;
      console.log(this.$root.selectedArr);
    }
  }
};
