<template>
  <div class="container">
    <div class="text-center" style="margin: 25px 0">
      <a href="//www.twitter.com/paramobot"
        ><img class="img-fluid" src="../assets/thanks.png" alt="paramo"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "thank-you",
  beforeCreate: function () {
    document.body.className = "bg-dark";
  },
};
</script>
