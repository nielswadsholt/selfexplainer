<script>
    import { current } from './stores'
    export let tab = '';
</script>

{#if $current == tab}
<slot></slot>
{/if}