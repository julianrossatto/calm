<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  index: { type: Number, required: true },
  title: { type: String, required: true },
  icon: { type: String, required: true },
  revealed: { type: Boolean, default: false },
  selected: { type: Boolean, default: false },
  top: { type: String, default: 'flat' },
  right: { type: String, default: 'flat' },
  bottom: { type: String, default: 'flat' },
  left: { type: String, default: 'flat' },
})

const emit = defineEmits(['reveal', 'select'])
const instanceId = useId().replaceAll(':', '')
const revealedGradientId = `puzzle-revealed-${instanceId}`
const shadowId = `puzzle-shadow-${instanceId}`

function edgePath(side, type) {
  if (type === 'flat') {
    if (side === 'top') return 'L 50 0 L 100 0'
    if (side === 'right') return 'L 100 50 L 100 100'
    if (side === 'bottom') return 'L 50 100 L 0 100'
    return 'L 0 50 L 0 0'
  }

  const direction = type === 'tab' ? 1 : -1
  const sweep = direction === 1 ? 1 : 0

  if (side === 'top') {
    const offset = direction * -1
    return `L 34 0 C 38 0 38 ${offset * 8} 40 ${offset * 9.8} A 14 14 0 0 ${sweep} 60 ${offset * 9.8} C 62 ${offset * 8} 62 0 66 0 L 100 0`
  }
  if (side === 'right') {
    const offset = direction
    return `L 100 34 C 100 38 ${100 + offset * 8} 38 ${100 + offset * 9.8} 40 A 14 14 0 0 ${sweep} ${100 + offset * 9.8} 60 C ${100 + offset * 8} 62 100 62 100 66 L 100 100`
  }
  if (side === 'bottom') {
    const offset = direction
    return `L 100 100 L 66 100 C 62 100 62 ${100 + offset * 8} 60 ${100 + offset * 9.8} A 14 14 0 0 ${sweep} 40 ${100 + offset * 9.8} C 38 ${100 + offset * 8} 38 100 34 100 L 0 100`
  }

  const offset = direction * -1
  return `L 0 100 L 0 66 C 0 62 ${offset * 8} 62 ${offset * 9.8} 60 A 14 14 0 0 ${sweep} ${offset * 9.8} 40 C ${offset * 8} 38 0 38 0 34 L 0 0`
}

const outlinePath = computed(() => {
  const top = props.top === 'flat' ? 'L 100 0' : edgePath('top', props.top)
  const right = props.right === 'flat' ? 'L 100 100' : edgePath('right', props.right)
  const bottom = props.bottom === 'flat' ? 'L 0 100' : edgePath('bottom', props.bottom)
  const left = props.left === 'flat' ? 'L 0 0' : edgePath('left', props.left)
  return `M 0 0 ${top} ${right} ${bottom} ${left} Z`
})

function activate() {
  if (props.revealed) emit('select')
  else emit('reveal')
}
</script>

<template>
  <button
    class="puzzle-piece"
    :class="{
      'puzzle-piece--revealed': revealed,
      'puzzle-piece--selected': selected,
    }"
    type="button"
    :aria-label="revealed ? `Ver dica: ${title}` : `Revelar peça ${index}`"
    :aria-pressed="selected"
    @click="activate"
  >
    <svg
      class="puzzle-piece__shape"
      viewBox="-20 -20 140 140"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <linearGradient :id="revealedGradientId" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="100%" stop-color="#eaf5ff" />
        </linearGradient>
        <filter :id="shadowId" x="-25%" y="-25%" width="150%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#286ba6" flood-opacity=".16" />
        </filter>
      </defs>
      <path
        :d="outlinePath"
        :fill="revealed ? `url(#${revealedGradientId})` : 'var(--color-brand)'"
        :stroke="selected ? '#245f95' : (revealed ? '#ffffff' : '#8bc9f4')"
        stroke-width="1.8"
        stroke-linejoin="round"
        :filter="`url(#${shadowId})`"
      />
    </svg>

    <span v-if="!revealed" class="puzzle-piece__mystery" aria-hidden="true">?</span>
    <span v-else class="puzzle-piece__face">
      <img class="puzzle-piece__icon" :src="icon" alt="" aria-hidden="true" />
      <span class="puzzle-piece__title">{{ title }}</span>
    </span>
  </button>
</template>

<style scoped>
.puzzle-piece {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  min-width: 0;
  aspect-ratio: 1;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: transparent;
  color: var(--color-brand-dark);
  cursor: pointer;
  isolation: isolate;
  -webkit-tap-highlight-color: transparent;
  transition: transform 180ms ease, filter 180ms ease;
}

.puzzle-piece:hover {
  z-index: 5;
  transform: translateY(-2px);
  filter: brightness(1.035);
}

.puzzle-piece:focus-visible {
  z-index: 3;
  outline: 3px solid var(--color-brand-strong);
  outline-offset: 2px;
}

.puzzle-piece.puzzle-piece--selected {
  z-index: 6;
}

.puzzle-piece__shape {
  position: absolute;
  inset: -20%;
  z-index: -1;
  width: 140%;
  height: 140%;
  overflow: visible;
  pointer-events: none;
}

.puzzle-piece__mystery,
.puzzle-piece__face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 16%;
  text-align: center;
}

.puzzle-piece__mystery {
  color: #eff8ff;
  font-size: clamp(1.5rem, 4vw, 2.25rem);
  font-weight: 800;
  text-shadow: 0 2px 3px #1a5c923d;
}

.puzzle-piece__face {
  gap: 5px;
}

.puzzle-piece__icon {
  display: block;
  width: clamp(20px, 2.5vw, 30px);
  height: clamp(20px, 2.5vw, 30px);
  flex: 0 0 auto;
  object-fit: contain;
}

.puzzle-piece__title {
  display: -webkit-box;
  overflow: hidden;
  max-width: 100%;
  color: var(--color-brand-dark);
  font-size: clamp(0.58rem, 1.15vw, 0.88rem);
  font-weight: 800;
  line-height: 1.15;
  overflow-wrap: anywhere;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

@media (max-width: 640px) {
  .puzzle-piece {
    border-radius: 9px;
  }

  .puzzle-piece__face {
    gap: 3px;
    padding: 14%;
  }

  .puzzle-piece__icon {
    width: clamp(18px, 5vw, 24px);
    height: clamp(18px, 5vw, 24px);
  }

  .puzzle-piece__title {
    font-size: clamp(0.52rem, 2.5vw, 0.72rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .puzzle-piece {
    transition: none;
  }
}
</style>
