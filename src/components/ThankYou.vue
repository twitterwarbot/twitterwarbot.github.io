<template>
  <div class="container">
    <div class="text-center" style="margin: 25px 0">
      ¡Gracias por tus sugerencias! La batalla comenzará pronto...
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
