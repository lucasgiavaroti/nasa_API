<script setup></script>

<template>
  <div class="image-frame">
    <h3>Image here</h3>
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
  transition: .2s ease-in-out;
}
.image-frame:hover {
  box-shadow: 15px 15px 1px 0 rgba(31, 135, 83, 0.37);
}
@media (min-width: 1024px) {
  .image-frame {
    width: 700px;
  }
}
</style>
