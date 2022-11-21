<template>
  <span :class="spanClass" role="img" >
    <svg :fill="fillColor" :width="width" :height="height" viewBox="0 0 24 24" >
      <path :d="svgPath"> <title>{{ title }}</title> </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    spanClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    fillColor: {
      type: String,
      default: 'white'
    },
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    },
    iconType: {
      type: String,
      default: ''
    }
  },
  computed: {
    svgPath: function () {

    }
  }
}
</script>
