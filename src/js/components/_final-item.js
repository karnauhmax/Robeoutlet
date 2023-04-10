export default {
  template: `
  <form id="opening-size-form" class="process__finale grid">
   <div class="process__finale-img ibg">
    <img loading="lazy" src="img/svg/opening-size.svg" class="image" width="505" height="340" alt="Opening Size Image">
   </div>
   <div class="process__finale-body grid">
    <p class="uppercase-bold process__finale-title">
     provide your opening size in mm
    </p>
    <div class="process__finale-inputs grid">
     <label class="process__finale-label grid">
      <span class="text text-500">A, мм</span>
      <input type="number" class="process__finale-input input-reset custom-input" placeholder="0 mm">
     </label>
     <label class="process__finale-label grid">
      <span class="text text-500">B, мм</span>
      <input type="number" class="process__finale-input input-reset custom-input" placeholder="0 mm">
     </label>
     <label class="process__finale-label grid">
      <span class="text text-500">C, мм</span>
      <input type="number" class="process__finale-input input-reset custom-input" placeholder="0 mm">
     </label>
     <label class="process__finale-label grid">
      <span class="text text-500">D, мм</span>
      <input type="number" class="process__finale-input input-reset custom-input" placeholder="0 mm">
     </label>
    </div>
    <div class="process__notice grid">
     <label class="checkbox-label text text-300 process__finale-checkbox grid">
      <input type="radio" value="Free Pickup" name="Type of Delivery">
      add floor board
      <span class="checkbox"></span>
     </label>
     <p class="text text-300 process__notice-text">
      16mm melamine board recommended to use on top of carpet or concrete floor. The bottom track applies on top of it.
              Please provide the actual opening sizes and we will take care of deductions!
     </p>
    </div>
    <p class="process__finale-total uppercase-bold text">
     Total:
     <span>$0 incl GST</span>
    </p>
   </div>
  </form>
  <button type="submit" form="opening-size-form" class="uppercase-bold process__finale-btn btn btn-dark"> Add to cart</button>

  `
}
