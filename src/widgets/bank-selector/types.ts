export interface Bank {
  id: string
  name: string
  logo?: string
  code: string
}

export interface BankSelectorProps {
  banks: Bank[]
  modelValue: string[]
  class?: string
}
