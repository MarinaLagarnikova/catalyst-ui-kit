# Catalyst UI Kit

UI компонентная библиотека на Vue 3 + Tailwind CSS с архитектурой FSD (Feature-Sliced Design).

## Технологический стек

- **Vue 3.5** с Composition API и `<script setup>`
- **TypeScript** для типизации
- **Vite** как сборщик и dev server
- **Tailwind CSS v4** для стилизации
- **Headless UI for Vue** для доступных компонентов
- **Storybook** для документации и разработки компонентов
- **clsx** и **tailwind-merge** для объединения классов

## Установка

```bash
npm install
```

## Структура проекта (FSD)

```
src/
├── app/              # App layer - точка входа
├── pages/            # Pages layer - страницы
├── widgets/          # Widgets layer - составные компоненты
├── features/         # Features layer - бизнес-фичи
├── entities/         # Entities layer - сущности
└── shared/          # Shared layer - переиспользуемый код
    ├── ui/          # UI компоненты
    ├── lib/         # Утилиты и хелперы
    └── config/      # Конфигурация приложения
```

## Запуск Storybook

Для разработки компонентов:

```bash
npm run storybook
```

Storybook будет доступен по адресу http://localhost:6006/

## Запуск проекта

```bash
npm run dev
```

Проект будет доступен по адресу http://localhost:5173/

## Сборка для продакшена

```bash
npm run build
```

Результат будет в директории `dist/`

## Тестирование

```bash
npm test
```

## Компоненты

### Button

Универсальный компонент кнопки с множеством вариантов цветов и стилей.

#### Пример использования:

```vue
<script setup>
import { Button } from '@/shared/ui/button'
</script>

<template>
  <Button color="dark/zinc">Primary Button</Button>
  <Button color="indigo">Indigo Button</Button>
  <Button color="red" outline>Outline Red</Button>
  <Button color="cyan" plain>Plain Cyan</Button>
  <Button disabled>Disabled</Button>
</template>
```

#### Props:

- `color`: Цвет кнопки (по умолчанию: `dark/zinc`)
  - Доступные цвета: `dark/zinc`, `dark/white`, `dark/zinc`, `light/white`, `light/zinc`, `light/transparent`, `zinc`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

- `outline`: Обводка вместо заливки (по умолчанию: `false`)

- `plain`: Минимальный стиль без фона и обводки (по умолчанию: `false`)

- `disabled`: Неактивное состояние (по умолчанию: `false`)

- `type`: Тип кнопки HTML (по умолчанию: `button`)

- `class`: Дополнительные CSS классы

#### Events:

- `click`: Событие клика по кнопке

## Лицензия

Private
