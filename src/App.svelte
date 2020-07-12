<script>
	import 'prism-svelte';
	import { onMount } from 'svelte';
	import CodeBlock from './CodeBlock.svelte';
	export let name = '';
	let source = '';
	let visible = false;

	onMount(async () => {
		const response = await fetch(
			'https://raw.githubusercontent.com/nielswadsholt/selfexplainer/master/src/App.svelte');
		source = await response.text();
	})

	async function btnClick() {
		source = await Prism.highlightAll();
		visible = !visible;
	}
</script>
<main>
	<a class="github-button"
		href="https://github.com/nielswadsholt/selfexplainer"
		data-color-scheme="no-preference: dark; light: light; dark: dark;"
		data-size="large" aria-label="View nielswadsholt/selfexplainer on GitHub">
		View on GitHub
	</a>
	<h2>Hi, my name is</h2>
	<h1>{name}</h1>
	<h2>I am a website.</h2>
	<p>This is a</p>
	<button on:click={btnClick}>Button</button>
	<div hidden='{visible}'>
		<p>If you click it I will explain what happens if you click it.</p>
	</div>
	<div hidden='{!visible}'>
		<p>Well done! You just clicked a button and triggered a click event. Here is the
		<a href="https://svelte.dev/" target="blank">Svelte</a>
		code that made it happen:</p>
		<CodeBlock code={source}/>
		<p>This syntax-highlighted code block was made with <a href="https://github.com/PrismJS/prism" target="blank">PrismJS</a></p>
	</div>
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