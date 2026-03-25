# Design: Disabled State for BankSelector2 Controls

**Date:** 2026-03-25
**Component:** BankSelector2
**Feature:** Disable button/select when checkbox is unchecked

## Overview

Add disabled state to the "Изменить" button and Select component for banks 2 and 3 when their checkbox is unchecked. When the checkbox is checked again, the controls should become enabled again.

## Requirements

### Functional Requirements
1. When a bank's checkbox is unchecked, the "Изменить" button or Select component must become disabled
2. When the checkbox is checked again, the control must become enabled
3. Selected value in Select must be preserved when checkbox is unchecked
4. This applies only to banks 2 and 3 (index 1 and 2)

### UI/UX Requirements
- Visual feedback for disabled state (opacity-50, cursor-not-allowed)
- Consistent styling with existing disabled elements in the component
- No hiding of controls - they remain visible but inactive

## Technical Design

### Component: BankSelector2
**File:** `/src/widgets/bank-selector2/BankSelector2.vue`

#### Changes to Template

**1. ButtonControl (line ~163)**
```vue
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
```

**2. Select (line ~174)**
```vue
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
```

### Dependencies

The following UI components must support disabled state:
- `ButtonControl` - already supports `disabled` prop
- `Select` - needs to support `disabled` prop

### Data Flow

```
User clicks checkbox
  ↓
toggleBank() is called
  ↓
modelValue is updated (bank ID added/removed)
  ↓
isBankSelected(bankId) returns new value
  ↓
:disabled="!isBankSelected(bank.id)" is recomputed
  ↓
ButtonControl/Select updates to disabled/enabled state
```

## Test Cases

### Test Case 1: Disable Button
1. Open BankSelector2 with all banks selected
2. Uncheck bank 2 or bank 3
3. Verify "Изменить" button becomes disabled (gray, not clickable)
4. Verify cursor changes to `not-allowed`

### Test Case 2: Disable Select
1. Open BankSelector2 with all banks selected
2. Click "Изменить" on bank 2 or 3
3. Select appears
4. Uncheck the same bank's checkbox
5. Verify Select becomes disabled
6. Verify dropdown cannot be opened

### Test Case 3: Re-enable Controls
1. Follow Test Case 1 or 2
2. Check the same bank's checkbox again
3. Verify control becomes enabled again
4. Verify functionality works normally

### Test Case 4: Preserve Select Value
1. Open BankSelector2 with all banks selected
2. Click "Изменить" on bank 2 or 3
3. Select a program (not the default)
4. Uncheck the same bank's checkbox
5. Check the bank's checkbox again
6. Verify previously selected program is still selected

## Edge Cases

- First bank (index 0): No change - already has `isBankDisabled()` logic
- Rapid checkbox clicking: No issues - Vue reactivity handles this
- All banks unchecked: Button/Select for banks 2 and 3 will be disabled
- Switching between button and select while unchecked: Both will show disabled state

## Implementation Checklist

- [ ] Add `:disabled="!isBankSelected(bank.id)"` to ButtonControl
- [ ] Add `:disabled="!isBankSelected(bank.id)"` to Select
- [ ] Verify Select component supports disabled prop
- [ ] Test all test cases
- [ ] Update HISTORY.md with changes
