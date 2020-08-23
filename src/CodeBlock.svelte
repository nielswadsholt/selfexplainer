<script>
    import { fade } from 'svelte/transition';
	import 'prism-svelte';
    import { onMount } from 'svelte';
	import { baseUrl, codeCache } from './stores';
    export let language = '';
    export let path = '';
	let code;

    onMount(async () => {
        await loadSource();
        await highlightSource();
    });

	async function loadSource() {
        if (!path) return;
        else if ($codeCache[path]) {
            code = $codeCache[path];
            return;
        }

        const response = await fetch(baseUrl + path);
        $codeCache[path] = code = await response.text();
	}

	async function highlightSource() {
        Prism.plugins.customClass.map({ tag: 'prismtag' });
		await Prism.highlightAll();
	}
</script>

<div class="code-block" in:fade><pre class="line-numbers">
    <code class="language-{language}">
        {#if code} {code}
        {:else} <slot></slot>
        {/if}
    </code>
</pre></div>
<p>This syntax-highlighted code block was made with <a href="https://github.com/PrismJS/prism" target="blank">PrismJS</a></p>

<style>
    .code-block {
        min-height: 6em;
        background-color: #2d2d2d;
    }
</style>