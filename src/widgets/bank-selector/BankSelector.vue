<script setup lang="ts">
import { computed } from 'vue'
import Checkbox from '@/shared/ui/checkbox/Checkbox.vue'
import ButtonControl from '@/shared/ui/button/ButtonControl.vue'
import ActivityList from '@/shared/ui/activity-list/ActivityList.vue'
import { CheckIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { clsx } from '@/shared/lib'
import type { BankSelectorProps, Bank } from './types'

const props = withDefaults(defineProps<BankSelectorProps>(), {
  modelValue: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'submit'): void
}>()

const containerClasses = computed(() => {
  return clsx(
    'w-[520px] rounded-xl bg-white dark:bg-zinc-900',
    props.class,
  )
})

function toggleBank(bankId: string) {
  // Первый банк нельзя снять выбор
  if (bankId === props.banks[0]?.id && props.modelValue.includes(bankId)) {
    return
  }

  const newValue = props.modelValue.includes(bankId)
    ? props.modelValue.filter(id => id !== bankId)
    : [...props.modelValue, bankId]
  emit('update:modelValue', newValue)
}

function isBankDisabled(bankId: string) {
  // Только первый банк disabled
  return bankId === props.banks[0]?.id
}

function isBankSelected(bankId: string) {
  return props.modelValue.includes(bankId)
}

function handleSubmit() {
  emit('submit')
}
</script>

<template>
  <div :class="containerClasses" style="width: 560px;">
    <!-- Header -->
    <div class="px-6 pt-6 mb-6">
      <h3 class="font-semibold leading-9 text-zinc-950 dark:text-white" style="font-size: 24px;">
        Подобрали банки с лучшими условиями
        и высокой вероятностью одобрения
      </h3>
    </div>

    <!-- Banks List -->
    <div class="px-6 mb-6">
      <ActivityList :items="banks.map(bank => ({
        user: {
          name: bank.name,
          imageUrl: bank.logo || 'https://via.placeholder.com/40'
        },
        projectName: 'Название программы, длинное, не помещается в блок',
        commit: '94 810 ₽/мес',
        branch: '',
        date: '',
        dateTime: ''
      }))">
        <template #actions="{ item }">
          <Checkbox
            :model-value="isBankSelected(item.commit)"
            :disabled="isBankDisabled(item.commit)"
            @update:model-value="toggleBank(item.commit)"
            color="dark/zinc"
          />
        </template>
      </ActivityList>
    </div>

    <!-- Info items with icons -->
    <div class="px-6 mb-6 flex flex-col gap-2">
      <div class="flex items-start gap-2">
        <CheckIcon class="size-4 text-green-600 flex-shrink-0 mt-0.5" />
        <p class="text-sm text-zinc-500 leading-5">
          +42% к одобрению, если отправить сразу в 3 банка
        </p>
      </div>

      <div class="flex items-start gap-2">
        <CheckIcon class="size-4 text-green-600 flex-shrink-0 mt-0.5" />
        <p class="text-sm text-zinc-500 leading-5">
          Количество банков не повлияет на кредитный рейтинг в будущем
        </p>
      </div>
    </div>

    <!-- Action button with description -->
    <div class="px-6 pb-6 flex flex-col gap-2">
      <ButtonControl
        color="blue"
        size="lg"
        class="w-full"
        @click="handleSubmit"
      >
        Отправить в 3 банка
      </ButtonControl>
      <p class="text-sm text-zinc-500 leading-5 text-center">
        Никаких дополнительных данных не потребуется
      </p>
    </div>
  </div>
</template>
