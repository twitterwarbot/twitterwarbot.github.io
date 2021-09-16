<template>
  <div class="container">
    <div class="text-center" style="margin: 150px 0">
      <div class="card" style="padding: 150px 0">
        <div class="card-body text-center">
          <h1 class="card-title">¡Gracias por tus sugerencias!</h1>
          <h3 class="card-subtitle mb-2 text-muted">
            La batalla comenzará pronto...
          </h3>
        </div>
      </div>
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
