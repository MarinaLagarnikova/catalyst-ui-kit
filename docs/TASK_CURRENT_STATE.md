# Текущее состояние задачи: Storybook + Tailwind Components + Modal

**Дата:** 18 марта 2026

## Что сделано:

### 1. Проект настроен
- Vite + Vue 3.5 + TypeScript + Tailwind CSS v4
- Storybook для Vue установлен и работает (http://localhost:6006/)
- FSD архитектура создана (app, pages, widgets, features, entities, shared)
- PostCSS config удалён (конфликт с Tailwind v4)

### 2. Компонент Button создан
**Файлы:**
- `src/shared/ui/button/types.ts` - типы TypeScript
- `src/shared/ui/button/TouchTarget.vue` - обёртка для touch устройств
- `src/shared/ui/button/styles.ts` - стили Tailwind (адаптированы под v4)
- `src/shared/ui/button/ButtonControl.vue` - основной компонент
- `src/shared/ui/button/button-control.stories.ts` - сторис для Storybook
- `src/shared/ui/button/index.ts` - публичный API

**Storybook сторис:**
- Primary, Light, Dark/White, Indigo, Cyan, Red, Green
- Outline, Plain
- Disabled
- AllColors, AllVariants
- Test/Simple (тестовый компонент для диагностики)

### 3. Стили кнопок адаптированы под Tailwind v4
Оригинальный код Catalyst использует Tailwind v3 синтаксис, который несовместим с v4:
- `theme(spacing.3.5)` → `0.875rem`
- `theme(--color-white/15%)` → `rgba(255,255,255,0.15)`
- `/90`, `/80` → `rgb(...)]/90`

В `styles.ts` стили переписаны под Tailwind v4.

## Текущая проблема:

**Проблема:** Стили кнопок не соответствуют дизайну Catalyst (Tailwind UI)

**Статус:**
- ✅ Кнопки отображаются в Storybook
- ✅ Разные цвета работают
- ✅ Варианты (solid, outline, plain) работают
- ❌ Внешний вид НЕ совпадает с библиотекой Tailwind

**Возможные причины:**
1. Tailwind v4 не распознаёт кастомный синтаксис (`rgb(...)` с opacity в CSS classes)
2. Нужно перезапустить Storybook после удаления postcss.config.js
3. CSS переменные не применились корректно
4. Псевдо-элементы (`before`, `after`) не работают с текущим синтаксисом

## Следующие шаги:

1. **Перезапустить Storybook** - чтобы убедиться что стили загружены корректно
2. **Проверить стили в DevTools** - какие классы применились к кнопке
3. **Упростить стили** - если Tailwind v4 не поддерживает сложный синтаксис
4. **Рассмотреть альтернативный подход** - использовать обычный CSS вместо Tailwind классов для сложных эффектов

## Технические детали:

### Запуск Storybook:
```bash
cd "/Users/marinalagarnikova/Desktop/Dev/tailwind components"
npm run storybook
```

### Проверка статуса:
```bash
# Посмотреть последние логи Storybook
tail -f /tmp/claude/-Users-marinalagarnikova-Desktop-Dev-tailwind-components/tasks/[ID].output
```

### Файлы для проверки:
- `.storybook/main.ts` - конфигурация Storybook
- `.storybook/preview.ts` - превью настройки
- `vite.config.ts` - конфигурация Vite с Tailwind v4 plugin
- `src/index.css` - глобальные стили
- `src/shared/ui/button/styles.ts` - стили кнопок
- `src/shared/ui/button/ButtonControl.vue` - компонент кнопки

## Git статус:

Последние коммиты:
- `ed988c8` docs: add README with project documentation
- `a6b820c` chore: remove Storybook example files
- `b0c92e2` chore: remove duplicate .storybook config files
- `38a80c2` chore: verify Button component in Storybook

## Заметки:

- Удалён `postcss.config.js` - он использовал `@tailwindcss/postcss` для Tailwind v3
- Проект использует Tailwind v4 с `@tailwindcss/vite` plugin
- Кнопки работают, но стили не соответствуют Catalyst дизайну
- Тестовый компонент `Test/Simple` отображается корректно (красный блок)

## Вопросы для решения:

1. Поддерживает ли Tailwind v4 синтаксис `rgb(255,255,255)/90` в произвольных значениях?
2. Нужно ли использовать CSS-in-JS вместо Tailwind классов для сложных стилей?
3. Есть ли официальная документация по миграции с Tailwind v3 на v4?
