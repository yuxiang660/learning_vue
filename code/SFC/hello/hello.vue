<template>
   <div id="msg">
      {{ message }}
   </div>
</template>

<script>
export default {
   data() {
      return {
         message: "Hello SFC"
      }
   }
}
</script>

<style>
#msg {
   font-size: 18px;
   font-family: "Roboto", sans-serif;
   color: blue;
}
</style>