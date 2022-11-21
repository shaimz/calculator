<template>
  <draggable
    v-if="useDrag"
    tag="tbody"
    handle=".move-column"
    :value="rows"
    :setData="setData"
    @change="$emit('row-order-change', $event)"
  >
    <slot name="body">
    </slot>
  </draggable>
  <tbody v-else>
    <slot name="body">
    </slot>
  </tbody>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  components: { draggable },
  props: {
    tag: {
      type: String,
      default: 'tbody'
    },
    useDrag: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    setData (dataTransfer, dragEl) {
      dataTransfer.setData('grid', dragEl.getAttribute('data-id'))
    }
  }
}
</script>
