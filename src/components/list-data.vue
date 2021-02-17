<template>
  <div class="list">
    <h6 class="list-title">Executive Producer(s):</h6>
    <ul class="list-container">
      <li class="list-item" v-for="(item, index) in list" :key="index">
        {{ item[type] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            required: true
        },
        itemToRender:{
            type: String
        }
    }
}
</script>