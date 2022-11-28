<template>
  <div class="m-0 px-1">
  <el-table-column label="" width="200">
    <template #default="scope">
      <el-button data-id="add"
                  v-if="checkTypeAndVisibility('created', scope.row)"
                  size="small" type="success" icon="el-icon-plus" circle @click="addItems()"></el-button>
      <el-button data-id="edit"
                  v-if="!checkTypeAndVisibility(scope.row)"
                  size="small" type="primary" @click="setEdit($event,scope.row)">Edit
      </el-button>
      <el-button data-id="update"
                  v-if="checkTypeAndVisibility(scope.row)"
                  size="small" type="success" @click="update(scope.$index)">Save
      </el-button>
      <el-button data-id="delete" v-if="checkProperty('created',scope.$index)" size="small" type="danger"
                  @click="handleDelete(scope.$index)">Delete
      </el-button>
    </template>
  </el-table-column>

    <button v-if="showButton('accept')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-accept', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Accept" v-b-tooltip.hover.noninteractive>
        <i class="sw-circle-check"></i>
      </span>
    </button>
    <button v-if="showButton('decline')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-decline', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Decline" v-b-tooltip.hover.noninteractive>
        <i class="sw-close"></i>
      </span>
    </button>
    <button v-if="showButton('enter')" class="px-1 border-0 bg-transparent enterButton" @click.stop.prevent="emit('row-enter', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Enter" v-b-tooltip.hover.noninteractive>
        <i class="sw-enter"></i>
      </span>
    </button>
    <button v-if="showButton('comment')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-comment', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Comment" v-b-tooltip.hover.noninteractive>
        <i class="sw-chat-bubble"></i>
      </span>
    </button>
    <button v-if="showButton('send')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-send', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Send" v-b-tooltip.hover.noninteractive>
        <i class="sw-email"></i>
      </span>
    </button>
    <button v-if="showButton('arrows')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-up', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Move up" v-b-tooltip.hover.noninteractive>
        <i class="sw-move-up"></i>
      </span>
    </button>
    <button v-if="showButton('arrows')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-down', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Move down" v-b-tooltip.hover.noninteractive>
        <i class="sw-move-down"></i>
      </span>
    </button>
    <button v-if="showButton('edit')" class="px-1 border-0 bg-transparent editBtn" @click.stop.prevent="emit('row-edit', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Edit" v-b-tooltip.hover.noninteractive>
        <i class="sw-pencil"></i>
      </span>
    </button>
    <button v-if="showButton('clone')" class="px-1 border-0 bg-transparent cloneBtn" @click.stop.prevent="emit('row-clone', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Copy" v-b-tooltip.hover.noninteractive>
        <i class="sw-copy"></i>
      </span>
    </button>
    <button v-if="showButton('view')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-show', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="View" v-b-tooltip.hover.noninteractive>
        <i class="sw-search"></i>
      </span>
    </button>
    <button v-if="showButton('view-2')" class="px-1 border-0 bg-transparent viewBtn" @click.stop.prevent="emit('row-show', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="View" v-b-tooltip.hover.noninteractive>
        <i class="sw-eye"></i>
      </span>
    </button>
    <button v-if="showButton('download')" class="px-1 border-0 bg-transparent downloadBtn" @click.stop.prevent="emit('row-download', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Download" v-b-tooltip.hover.noninteractive>
        <i class="sw-download"></i>
      </span>
    </button>
    <button v-if="showButton('delete')" class="px-1 border-0 bg-transparent deleteBtn" @click.stop.prevent="emit('row-delete', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Delete" v-b-tooltip.hover.noninteractive>
        <i class="sw-delete"></i>
      </span>
    </button>
    <button v-if="showButton('back')" class="px-1 border-0 bg-transparent backBtn" @click.stop.prevent="emit('row-back', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Back" v-b-tooltip.hover.noninteractive>
        <i class="sw-reply"></i>
      </span>
    </button>
    <button v-if="showButton('delete-access')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-delete-access', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="Delete access" v-b-tooltip.hover.noninteractive>
        <i class="sw-delete-access"></i>
      </span>
    </button>
    <button v-if="showButton('history')" class="px-1 border-0 bg-transparent" @click.stop.prevent="emit('row-history', indexRow, entry)" size="xs">
      <span class="icon-btns" role="img" title="View history" v-b-tooltip.hover.noninteractive>
        <i class="sw-history"></i>
      </span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'TableButtons',
  props: {
    entry: {
      type: Object,
      required: true
    },
    indexRow: {
      type: Number,
      required: true
    },
    actions: {
      type: Array,
      default () {
        return []
      }
    },
    deleteConfirmation: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    emit: function (action, key, rec) {
      if (this.$root && this.$root.frameEditMode && this.deleteConfirmation) {
        this.$notify({
          type: 'warn',
          title: `Warning!`,
          text: `Please Save or Cancel your changes before doing anything else!`
        })
        return false
      }
      this.$emit(action, key, rec)
    }
  },
  computed: {
    showButton () {
      return (action) => {
        return this.actions.includes(action)
      }
    }
  }
}
</script>

<style scoped>
.icon-btns i {
  vertical-align: middle;
  font-size: 24px;
}
.icon-btns i.sw-enter {
  font-size: 20px;
}
.icon-btns i.sw-history {
  font-size: 22px;
}
</style>
