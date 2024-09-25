<script setup></script>

<template>
  <div class="image-frame">
    <h2 id="text">Your Photo</h2>
    <figure id="figure" class="hidden">
      <img id="image" src="" alt="" />
      <!-- <caption id="caption">
        asd
      </caption> -->
    </figure>
  </div>
</template>
<style scoped>
.image-frame {
  cursor: pointer;
  margin: 7rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 520px;
  height: 50vh;
  border: 7px dashed rgba(31, 135, 83, 0.37);
  transition: 0.2s ease-in-out;
}
.image-frame:hover {
  box-shadow: 15px 15px 1px 0 rgba(31, 135, 83, 0.37);
}
figure {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  background-position: center;
  filter: grayscale(70%);
  object-fit: cover;
}
caption {
  width: 100%;
}
.hidden {
  display: none;
}
@media (min-width: 1024px) {
  .image-frame {
    width: 700px;
  }
}
</style>
