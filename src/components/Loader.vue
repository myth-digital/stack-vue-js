<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <!-- Add loading screen here -->
  </div>
</template>

<script>
export default {
  name: "LoadingScreen",
  props: ["isLoading"]
};
</script>

<style>
.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>