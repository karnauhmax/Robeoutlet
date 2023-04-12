export default {
  template: `
  <label class="process__finale-label grid">
    <span class="text text-500">{{title}}, мм</span>
    <input :value="modelValue" @input="$emit('update:modelValue', Number($event.target.value))" type="number" class="process__finale-input input-reset custom-input" placeholder="0 mm">
  </label>
  `,

  props: {
    modelValue: {
      default: 0,
      type: Number
    },
    title: String
  }
}
