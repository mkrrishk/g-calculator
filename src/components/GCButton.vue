<template>
  <button type="button" :value="value" class="btn" @click="onClick($event)">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </button>
</template>

<script>
export default {
  name: "CalcButton",
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  emits: ["buttonClick"],
  methods: {
    onClick(event) {
      this.$emit("buttonClick", event.currentTarget.value);
    },
  },
};
</script>
