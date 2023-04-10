export default {
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
    imgPath: String
  },
  methods: {
    nextStep() {
      this.$root.selectedArr.push({ title: this.title, img: this.img });
      this.$root.currentStep++;
      console.log(this.$root.selectedArr);
    }
  }
};
