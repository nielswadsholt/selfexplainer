<script>
    import { onMount } from 'svelte';
    export let language = '';
    export let code = '';
    export let onmount = () => {};

    onMount(onmount);
</script>

<pre class="line-numbers"><code class="language-{language}">{code}</code></pre>