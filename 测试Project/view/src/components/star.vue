<template>
  <div>
    <div class="star">
      <div class="star_contain">
        <svg class="grey_fill" v-for="num in 5" :key="num">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
        </svg>
      </div>
      <section :style="'width:' + rating*20 + 'px'" class="star_overflow">
        <div class="star_contain">
          <svg class="orange_fill" v-for="num in 5" :key="num">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
          </svg>
        </div>
      </section>
    </div>
    <!-- 分割 -->
    <!-- <div class="rating_container">
        <section class="star_container">
            <svg class="grey_fill" v-for="num in 5" :key="num">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
            </svg>
        </section>
        <div :style="'width:' + rating*2/5 + 'rem'" class="star_overflow">
            <section class="star_container" >
                <svg  class="orange_fill" v-for="num in 5" :key="num">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
                </svg>
            </section>
        </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'star',
  data () {
    return {
      rating: 3.5
    }
  }
}
</script>

<style scoped lang='less'>
.star{
  width: 500px;
  height: 100%;
  background-color: aquamarine;
  position: relative;
  .star_overflow{
    position: absolute;
    top: 0;
    overflow: hidden;
  }
  .star_contain{
    display: flex;
    width: 100px;
    .grey_fill{
      fill: #d1d1d1;
    }
    .orange_fill{
      fill: #ff9a0d;
    }
  }
}

// .rating_container{
//   position: relative;
//   top: .2rem;
//   width: 2rem;
// height: .4rem;
//   .star_overflow{
//       overflow: hidden;
//       position: relative;
//       height: 100%;
//   }
//   .star_container{
//       position: absolute;
//       display: flex;
//       width: 2rem;
//       height: 0.4rem;
//       top: -0.02rem;
//       left: -0.02rem;
//       .grey_fill{
//           fill: #d1d1d1;
//       }
//       .orange_fill{
//           fill: #ff9a0d;
//       }
//   }
// }
</style>
