<template>
  <div class="flex flex-col gap-2 w-gc-652 h-gc-300 group">
    <div
      v-click-outside="onClickOutside"
      class="flex flex-col m-auto rounded-lg gc-input h-gc-72 group-hover:border group-hover:border-solid group-hover:border-x-gc-btn-gray group-hover:border-b-gc-btn-gray group-hover:border-t-gc-light"
      :class="{ 'gc-input-active': isCalcInputActive }"
      @click="isCalcInputActive = true"
    >
      <div class="flex items-center justify-between h-gc-22 text-gc-light">
        <HistoryIcon />
        <div class="h-5 self-baseline text-gc-13">
          {{ result }}
        </div>
      </div>
      <div
        class="flex items-center justify-end h-8 text-3xl font-normal text-gc-default"
      >
        {{ expression }}
      </div>
    </div>
    <div class="grid flex-grow grid-cols-7 grid-rows-5 text-gc-default">
      <template v-for="(button, index) in buttons" :key="button.value">
        <div v-if="index === 0" class="col-span-2 m-1">
          <GCButton
            :value="buttons[0].value"
            :class="buttons[0].classes"
            @buttonClick="onButtonClick"
          >
            <template #left>
              <div class="">{{ buttons[0].label }}</div>
            </template>
            <template #default>
              <div class="invisible"></div>
              <div
                class="absolute h-4 border-l-2 border-solid border-l-gc-border-gray"
              ></div>
            </template>
            <template #right>
              <div class="text-gc-light">{{ buttons[1].label }}</div>
            </template>
          </GCButton>
        </div>
        <div v-else-if="![0, 1].includes(index)" class="m-1">
          <GCButton
            :value="button.value"
            :class="button.classes"
            @buttonClick="onButtonClick"
          >
            <template v-if="button.value === 'pow'" #default>
              <span>
                {{ button.label[0]
                }}<sup class="gc-pow">{{ button.label[1] }}</sup>
              </span>
            </template>
            <template v-else #default>
              {{ button.label }}
            </template>
          </GCButton>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import GCButton from "@/components/GCButton.vue";
import HistoryIcon from "@/components/HistoryIcon.vue";
import { activeCalButtons, calculatorButtons, format } from "@/utils";
import { evaluate, hasNumericValue, round } from "mathjs";
import vClickOutside from "click-outside-vue3";

export default {
  label: "CalculatorView",
  components: {
    GCButton,
    HistoryIcon,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      buttons: calculatorButtons,
      activeButtons: activeCalButtons,
      isCalcInputActive: false,
      result: "",
      expression: "0",
      isCalculated: false,
    };
  },
  methods: {
    onClickOutside(event) {
      if (event.srcElement.localName != "button") {
        this.isCalcInputActive = false;
      }
    },
    toggleCalcInputBorder() {
      this.isCalcInputActive = false;
      setTimeout(() => {
        this.isCalcInputActive = true;
      }, 100);
    },
    onButtonClick(value) {
      this.toggleCalcInputBorder();
      // Check if the clicked button is one of the active ones
      if (!activeCalButtons.includes(value)) return;

      // Set result to default value when zero or equals are clicked initially
      if (this.expression === "0" && value != "=" && !this.result) {
        this.result = "Ans = 0";
      }

      if (value === "ce") {
        // On clear, reset the expression to zero
        this.expression = "0";
      } else if (value === "=") {
        // On equals, calculate and then update the expression & result
        this.calculate();
      } else {
        // On other buttons - If the result is not calculated, update the expression; else update both
        if (!this.isCalculated) {
          this.expression =
            this.expression === "0" && hasNumericValue(value)
              ? value
              : format(this.expression + value);
        } else {
          this.result = `Ans = ${this.expression}`;
          this.expression = hasNumericValue(value)
            ? value
            : format(this.expression + value);
          this.isCalculated = false;
        }
      }
    },
    calculate() {
      try {
        if (!hasNumericValue(this.expression)) {
          const answer = round(
            evaluate(this.expression.replaceAll("×", "*").replaceAll(" ", "")),
            1
          );
          this.result = `${this.expression} =`;
          this.expression = answer;
        }
      } catch (error) {
        this.expression = "Error";
      } finally {
        this.isCalculated = true;
      }
    },
  },
};
</script>
