<script setup lang="ts">
import { ButtonControl } from '@/shared/ui/button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <h1 class="text-3xl font-bold mb-8 text-gray-900">Catalyst UI Kit</h1>

    <div class="space-y-8 max-w-4xl">
      <section>
        <h2 class="text-xl font-semibold mb-4 text-gray-800">Button Component Demo</h2>

        <div class="space-y-6">
          <div>
            <h3 class="text-sm font-medium mb-3 text-gray-700">Colors</h3>
            <div class="flex flex-wrap gap-3">
              <ButtonControl color="dark/zinc" @click="handleClick">Dark/Zinc</ButtonControl>
              <ButtonControl color="light" @click="handleClick">Light</ButtonControl>
              <ButtonControl color="indigo" @click="handleClick">Indigo</ButtonControl>
              <ButtonControl color="cyan" @click="handleClick">Cyan</ButtonControl>
              <ButtonControl color="red" @click="handleClick">Red</ButtonControl>
              <ButtonControl color="green" @click="handleClick">Green</ButtonControl>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-3 text-gray-700">Sizes</h3>
            <div class="flex flex-wrap items-center gap-3">
              <ButtonControl size="sm" @click="handleClick">Small</ButtonControl>
              <ButtonControl size="md" @click="handleClick">Medium</ButtonControl>
              <ButtonControl size="lg" @click="handleClick">Large</ButtonControl>
              <ButtonControl size="icon" aria-label="Settings" @click="handleClick">⚙️</ButtonControl>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-3 text-gray-700">Variants</h3>
            <div class="flex flex-wrap gap-3">
              <ButtonControl @click="handleClick">Solid</ButtonControl>
              <ButtonControl outline @click="handleClick">Outline</ButtonControl>
              <ButtonControl plain @click="handleClick">Plain</ButtonControl>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-3 text-gray-700">States</h3>
            <div class="flex flex-wrap gap-3">
              <ButtonControl @click="handleClick">Normal</ButtonControl>
              <ButtonControl disabled @click="handleClick">Disabled</ButtonControl>
              <ButtonControl loading @click="handleClick">Loading</ButtonControl>
            </div>
          </div>

          <div>
            <h3 class="text-sm font-medium mb-3 text-gray-700">Interactive Demo</h3>
            <div class="flex flex-wrap gap-3">
              <ButtonControl color="indigo" @click="handleClick">Click me!</ButtonControl>
              <ButtonControl color="green" size="lg" @click="handleClick">Large Action</ButtonControl>
              <ButtonControl outline @click="handleClick">Cancel</ButtonControl>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
</style>
