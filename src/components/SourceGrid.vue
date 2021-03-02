<template>
  <div class="grid">
    <div class="content">
      <slot name="default" />
    </div>
    <aside class="code">
      <slot name="code" />
    </aside>
  </div>
</template>


<style scoped>
.grid {
  display: grid;
  grid-template-areas: "content code";
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--spacing-xxl);
}

.content {
  grid-area: content;
}

.code {
  grid-area: code;
  width: 100%;
  overflow: hidden;
  font-size: .8rem;
}

.code pre {
  margin-bottom: var(--spacing-l);
}
</style>
