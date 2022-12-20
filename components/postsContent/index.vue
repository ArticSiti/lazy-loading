<template>
  <div class="posts-content">
    <div class="posts-content__container">
      <div class="posts-content__block" v-for="(url,index) in urls" :key="index">
        <div class="posts-content__block-description">
          <h2>{{ title }}</h2>
        </div>
        <div class="posts-content__block-image">
          <img class="lazy" :data-src="url" v-lazy-load>
        </div>
      </div>
      <client-only>
      <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
        <SplideSlide>
          <img :src="urls" alt="Sample 1">
        </SplideSlide>
        <SplideSlide>
          <img src="image2.jpg" alt="Sample 2">
        </SplideSlide>
      </Splide>
      </client-only>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Posts',

  data(){
    return{
      title: 'Ленивая загрузка',
      urls:[
        require('/assets/images/photo.jpg'),
        require('/assets/images/photo6.jpg'),
        require('/assets/images/photo2.jpg'),
        require('/assets/images/photo3.jpg'),
        require('/assets/images/photo4.jpg'),
        require('/assets/images/photo5.jpg'),
      ]
    }
  },
  methods:{
    lazyLoad(){
      [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
          img.removeAttribute('data-src');
        };
      });
    },
  }
}
</script>
<style lang="scss">
.posts-content {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  &__block {
    justify-self: center;
    &-description {
      text-align: center;
      color: $red;
    }

    &-image {
      width: 400px;
      height: 400px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        //opacity: 1;
      }
      //img[data-src]{
      //  opacity: 0;
      //}
    }
  }
}
</style>

