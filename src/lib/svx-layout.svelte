<script>
  export let title = 'FOSS4G 2025 Auckland';
  export let description = '';
</script>

<svelte:head>
  <title>{title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<main class="prose prose-headings:font-serif max-w-full px-2 py-2 sm:py-4">
  <slot />
</main>
