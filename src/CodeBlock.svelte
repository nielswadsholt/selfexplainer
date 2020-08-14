<script>
	import 'prism-svelte';
    import { onMount } from 'svelte';
    export let language = '';
    export let path = '';
	let code = '';

    onMount(async () => {
        await loadSource();
        await highlightSource();
    });

	async function loadSource() {
		const response = await fetch(path);
		code = await response.text();
	}

	async function highlightSource() {
		code = await Prism.highlightAll();
	}
</script>

<pre class="line-numbers"><code class="language-{language}">{code}</code></pre>
<p>This syntax-highlighted code block was made with <a href="https://github.com/PrismJS/prism" target="blank">PrismJS</a></p>