<template >
  <div class="page">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>


<script>
  export default {
    
  }
</script>

<style>
  .page {
    min-height: 100vh;
  }

  .page > footer {
  position: sticky;
  top: 100vh;
}

</style>