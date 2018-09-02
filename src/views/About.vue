<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- build:start -->
    <h2>This is an about page prod</h2>
    <!-- build:end -->
    <!-- debug:start -->
    <h2>This is an about page debug</h2>
    <!-- debug:end -->
  </div>
</template>

<script>
  console.log(3344)
  /* debug:start */
  console.log(333)
  /* debug:end */
  /* build:start */
  console.log(444)
  /* build:end */
  // debug:start
  console.log(555)
  // debug:end
  // build:start
  console.log(666)
  // build:end
</script>
<style>
  /* debug:start */
  h1{color: blue}
  /* debug:end */
  /* build:start */
  h1 {color: red}
  /* build:end */
</style>