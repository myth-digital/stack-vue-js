<template>
  <main class="app">
    <loader :isLoading="isLoading"></loader>
    
    <transition-page>
      <router-view></router-view>
    </transition-page>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue';
import TransitionPage from '@/components/transitions/TransitionPage.vue';

export default {
  components: { Loader, TransitionPage },
  data() {
    return {
      isLoading: true
    };
  }
};
</script>