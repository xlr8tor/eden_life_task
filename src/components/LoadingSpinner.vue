<template>
  <div class="spinner"></div>
</template>

<style scoped>
.spinner {
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
