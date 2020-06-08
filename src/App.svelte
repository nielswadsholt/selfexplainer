<script>
	import { onMount } from 'svelte';
	import 'prism-svelte';
	export let name;

	let source = '';

	$: highlighted = source;

	onMount(async () => {
		const response = await fetch('/index.html');
		source = await response.text();
	})
	
	let btnText = "";

	function btnClick() {
		btnText = "You just clicked a button. Awesome!";
		highlighted = Prism.highlightAll();
		setTimeout(function() { btnText = ""; }, 3000);
	}
</script>

<main>
	<a class="github-button" href="https://github.com/nielswadsholt/selfexplainer" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" aria-label="View nielswadsholt/selfexplainer on GitHub">View on GitHub</a>
	<h2>Hi, my name is</h2>
	<h1>{name}</h1>
	<h2>I am a website.</h2>
	<p>This is my button:</p>
	<button on:click={btnClick}>Button</button>
	<p>{btnText}</p>
	<p>It does stuff when you click it. And by "it" I mean <a href="https://svelte.dev/" target="blank">Svelte</a> the most non-frameworky non-framework.</p>
	<p>This is my HTML code:</p>
	<pre><code class="language-css">{highlighted}</code></pre>
	<p>It was made with <a href="https://github.com/PrismJS/prism" target="blank">PrismJS</a></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	button {
		background-color: #801515;
		border: none;
		border-radius: 0.4em;
		color: antiquewhite;
		cursor: pointer;
		font-size: 2em;
		transition-duration: 0.5s;
	}

	h1 {
		color: #801515;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>