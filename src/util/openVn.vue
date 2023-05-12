<template>

</template>

<script>
import {ElMessage} from "element-plus";
import {h} from "vue";

// export default {
//   name: "openVn"
// }

export default function openVn (msg){
  ElMessage({
    message: h('p', null, [
      h('span', null, msg),
      h('i', {style: 'color: teal'}, ''),
    ]),
  })
}

</script>

<style scoped>

</style>