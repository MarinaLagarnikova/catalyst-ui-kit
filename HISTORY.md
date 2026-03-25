# История работы над Catalyst UI Kit

## 2025-03-24 - Разработка виджета BankSelector2

### ✅ Реализованный функционал

#### Компонент BankSelector2
**Расположение:** `/src/widgets/bank-selector2/`

**Основные возможности:**
- Список из 3 банков с чекбоксами (Сбер, Тинькофф, Альфа-Банк)
- Все банки выбраны по умолчанию
- Первый банк нельзя отключить (disabled + всегда выбран)
- Чекбоксы расположены справа от названия банка

#### Интерактивность
- **Кликабельные элементы:**
  - Название банка (кнопка слева)
  - Description под названием (кнопка)
  - Сам чекбокс
  - Все три элемента переключают чекбокс

- **Кнопка "Изменить":**
  - Появляется под 2-м и 3-м банком
  - Размер: md (36px высота)
  - Тип: outline, цвет: blue
  - При клике скрывает кнопку и Description
  - Показывает компонент Select с выбором программы

- **Select с программами:**
  - Заменяет кнопку и Description при клике на "Изменить"
  - Содержит список программ банка
  - При выборе программы обновляет текст в Description
  - Выбранная программа подсвечена

#### Состояние загрузки
- Кнопка "Отправить в X банков" показывает loading-состояние
- Спиннер внутри кнопки
- Кнопка заблокирована во время загрузки
- Длительность: 2 секунды (симуляция)
- Предотвращает повторные нажатия

#### Стилизация
- **Размеры:**
  - Width контейнера: 540px
  - Padding-bottom: 24px
  - Margin-bottom заголовка: 32px
  - Margin-bottom списка банков: 32px

- **Типографика:**
  - Заголовок: 24px, font-semibold
  - Название банка: text-base/6, font-medium
  - Description: text-sm, text-zinc-500
  - Текст под кнопкой отправки: text-sm, text-center

#### Компоненты UI
- Checkbox - с кастомным позиционированием (чекбокс справа)
- ButtonControl - основной тип и outline
- Select - нативный select с опциями
- CheckIcon - иконка для информационных пунктов

### 📝 Обновленные сторис

#### Checkbox - WithCustom Layout
**Файл:** `/src/shared/ui/checkbox/Checkbox.stories.ts`
- Добавлен description для стори
- Реализован паттерн: название слева, чекбокс справа, описание под строкой
- Используется как референс для BankSelector2

### 🔧 Технические детали

#### Структура данных
```typescript
interface Program {
  id: string
  name: string
}

interface Bank {
  id: string
  name: string
  code: string
  logo?: string
  description?: string
  programs?: Program[]
  selectedProgram?: string
}
```

#### Реактивное состояние
- `editingBanks: Set<string>` - отслеживание режима редактирования
- `isLoading: Ref<boolean>` - состояние загрузки кнопки
- `bankDescriptions: Ref<Record<string, string>>` - динамические описания

#### Функции
- `toggleBank(bankId)` - переключение чекбокса
- `startEditing(bankId)` - запуск режима редактирования
- `handleProgramChange(bankId, programId)` - выбор программы
- `handleSubmit()` - обработка отправки с loading-состоянием

### 📦 Дополнительные компоненты

Добавлены в проект:
- **Divider** - разделитель (soft/hard варианты)
- **Select** - нативный select компонент
- **Icons** - компонент для отображения Heroicons
- **ActivityList** - список активностей

### 🚀 Подготовка к публикации

#### Git
- Все изменения закоммичены
- Создан репозиторий: https://github.com/MarinaLagarnikova/catalyst-ui-kit
- Коммиты:
  - `feat: add BankSelector2 widget with interactive features`
  - `chore: add Vercel config for Storybook deployment`

#### Vercel
- Создан `vercel.json` с настройками деплоя Storybook
- Build command: `npm run build-storybook`
- Output directory: `storybook-static`

### 📱 Storybook
- Запущен на http://localhost:6008/
- Автоматический hot-reload при изменениях
- Документация для всех компонентов

## 2025-03-25 - Добавление disabled state для кнопки/Select

### ✅ Реализованный функционал

#### Disabled state для контролов банков 2 и 3
**Изменения:** `/src/widgets/bank-selector2/BankSelector2.vue`

**Новая функциональность:**
- Когда чекбокс банка снят, кнопка "Изменить" или Select становятся disabled
- Когда чекбокс выбран снова, контролы снова активны
- Выбранное значение в Select сохраняется при снятии чекбокса
- Визуальный стиль: opacity-50, cursor-not-allowed (согласован с другими disabled элементами)

**Технические детали:**
- Добавлен `:disabled="!isBankSelected(bank.id)"` к ButtonControl
- Добавлен `:disabled="!isBankSelected(bank.id)"` к Select
- Используется существующая функция `isBankSelected(bankId)`
- Применяется только к 2-му и 3-му банкам (index 1 и 2)

**Ветка:** `feat/bankselector2-disabled-state`
**Коммит:** `feat: add disabled state to BankSelector2 button/select controls`

## Заметки для будущего

### TODO
- [ ] Завершить деплой на Vercel
- [ ] Добавить анимации при переключении состояний
- [ ] Рассмотреть добавление переходов между кнопкой и Select
- [ ] Возможно добавить валидацию формы
- [ ] Добавить обработку ошибок

### Идеи для улучшения
- Добавить возможность добавлять новые банки динамически
- Сохранять состояние в localStorage
- Добавить анимацию появления/исчезновения элементов
- Добавить tooltip с подсказками
- Рассмотреть возможность редактирования 1-го банка

## Ссылки
- GitHub: https://github.com/MarinaLagarnikova/catalyst-ui-kit
- Storybook локально: http://localhost:6008/
- Branch: main
