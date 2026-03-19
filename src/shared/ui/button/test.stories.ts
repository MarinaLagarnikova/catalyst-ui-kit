import type { Meta, StoryObj } from '@storybook/vue3'

const TestComponent = {
  name: 'TestComponent',
  template: `
    <div style="padding: 20px; background: red; color: white;">
      TEST COMPONENT - This should be visible!
    </div>
  `,
}

const meta: Meta<typeof TestComponent> = {
  title: 'Test/Simple',
  component: TestComponent,
}

export default meta
type Story = StoryObj<typeof TestComponent>

export const Test: Story = {
  render: () => ({
    components: { TestComponent },
    template: '<TestComponent />',
  }),
}
