export interface Program {
  id: string
  name: string
}

export interface Bank {
  id: string
  name: string
  logo?: string
  code: string
  description?: string
  programs?: Program[]
  selectedProgram?: string
}

export interface BankSelector2Props {
  banks: Bank[]
  modelValue: string[]
  class?: string
}
