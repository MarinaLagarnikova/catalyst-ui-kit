<script setup lang="ts">
import { computed, ref } from 'vue'
import Checkbox from '@/shared/ui/checkbox/Checkbox.vue'
import ButtonControl from '@/shared/ui/button/ButtonControl.vue'
import Select from '@/shared/ui/select/Select.vue'
import { CheckIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import { clsx } from '@/shared/lib'
import type { BankSelector2Props, Bank, Program } from './types'

const props = withDefaults(defineProps<BankSelector2Props>(), {
  modelValue: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
  (e: 'submit'): void
}>()

// Состояние для отслеживания режима редактирования для каждого банка
const editingBanks = ref<Set<string>>(new Set())

// Состояние загрузки
const isLoading = ref(false)

// Локальные описания банков, которые могут обновляться
const bankDescriptions = ref<Record<string, string>>({})

// Инициализация описаний из props
const initDescriptions = () => {
  props.banks.forEach(bank => {
    if (bank.description) {
      bankDescriptions.value[bank.id] = bank.description
    }
  })
}

// Инициализируем при загрузке
initDescriptions()

const containerClasses = computed(() => {
  return clsx(
    'w-[520px] rounded-xl bg-white dark:bg-zinc-900',
    props.class,
  )
})

const buttonText = computed(() => {
  const count = props.modelValue.length
  const lastTwoDigits = count % 100
  const lastDigit = count % 10

  let suffix = 'банков'
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    suffix = 'банков'
  } else if (lastDigit === 1) {
    suffix = 'банк'
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    suffix = 'банка'
  }

  return `Отправить в ${count} ${suffix}`
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

function isEditingBank(bankId: string) {
  return editingBanks.value.has(bankId)
}

function getBankDescription(bank: Bank) {
  return bankDescriptions.value[bank.id] || bank.description || 'Название программы, длинное, не помещается в блок 94 810 ₽/мес'
}

function startEditing(bankId: string) {
  editingBanks.value.add(bankId)
}

function handleProgramChange(bankId: string, programId: string) {
  const bank = props.banks.find(b => b.id === bankId)
  if (bank && bank.programs) {
    // Находим выбранную программу
    const program = bank.programs.find(p => p.id === programId)
    if (program) {
      // Обновляем описание
      bankDescriptions.value[bankId] = program.name
      bank.selectedProgram = programId
    }
  }
}

function handleSubmit() {
  if (isLoading.value) return

  isLoading.value = true

  // Симуляция загрузки (2 секунды)
  setTimeout(() => {
    isLoading.value = false
    emit('submit')
  }, 2000)
}
</script>

<template>
  <div :class="containerClasses" style="width: 540px;">
    <!-- Header -->
    <div class="px-6 pt-6 mb-8">
      <h3 class="font-semibold leading-9 text-zinc-950 dark:text-white" style="font-size: 24px;">
        Подобрали банки с лучшими условиями
        и высокой вероятностью одобрения
      </h3>
    </div>

    <!-- Banks List -->
    <div class="px-6 mb-6 flex flex-col gap-4">
      <div v-for="(bank, index) in banks" :key="bank.id">
        <div class="flex items-center justify-between gap-4">
          <button
            type="button"
            class="text-base/6 text-zinc-900 dark:text-white font-medium text-left cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            :disabled="isBankDisabled(bank.id)"
            @click="toggleBank(bank.id)"
          >
            {{ bank.name }}
          </button>
          <Checkbox
            :model-value="isBankSelected(bank.id)"
            :disabled="isBankDisabled(bank.id)"
            @update:model-value="toggleBank(bank.id)"
            color="blue"
          />
        </div>
        <button
          type="button"
          class="mt-1 text-sm text-zinc-500 dark:text-zinc-400 text-left cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed block"
          :disabled="isBankDisabled(bank.id)"
          @click="toggleBank(bank.id)"
        >
          {{ getBankDescription(bank) }}
        </button>

        <!-- Кнопка "Изменить" или Select для 2-го и 3-го банка -->
        <template v-if="index === 1 || index === 2">
          <ButtonControl
            v-if="!isEditingBank(bank.id)"
            outline
            color="blue"
            size="md"
            class="mt-2"
            :disabled="!isBankSelected(bank.id)"
            @click="startEditing(bank.id)"
          >
            Изменить
          </ButtonControl>

          <Select
            v-else
            :model-value="bank.selectedProgram || ''"
            @update:model-value="(value) => handleProgramChange(bank.id, value)"
            :disabled="!isBankSelected(bank.id)"
            class="mt-2"
          >
            <option value="">Выберите программу</option>
            <option
              v-for="program in bank.programs"
              :key="program.id"
              :value="program.id"
            >
              {{ program.name }}
            </option>
          </Select>
        </template>
      </div>
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
        :loading="isLoading"
        :disabled="isLoading"
        @click="handleSubmit"
      >
        {{ buttonText }}
      </ButtonControl>
      <p class="text-sm text-zinc-500 leading-5 text-center">
        Никаких дополнительных данных не потребуется
      </p>
    </div>
  </div>
</template>
