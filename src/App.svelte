<script lang="ts">
  import MenuBar from '@/components/MenuBar.svelte';
  import Editors from '@/components/Editors.svelte';
  import SaveDialog from '@/components/SaveDialog.svelte';
  import Shortcuts from '@/components/Shortcuts.svelte';
  import { Toaster } from '@/components/ui/sonner';
  import favIcon from '@/assets/imgs/favicon.png';
  import favIconDark from '@/assets/imgs/favicon-dark.png';
  import { mode, ModeWatcher } from 'mode-watcher';
  import { Notpad } from '@/helpers/notpad';
  import { onMount } from 'svelte';

  onMount(() => Notpad.init());
</script>

<!-- Actual UI -->
<div class="flex h-full flex-col">
  <MenuBar />
  <Editors />
</div>

<!-- Procedually -->
<SaveDialog />
<Shortcuts />
<Toaster />

<ModeWatcher />

<svelte:head>
  {#if $mode == 'dark'}
    <link rel="icon" href={favIconDark} />
  {:else}
    <link rel="icon" href={favIcon} />
  {/if}
</svelte:head>
