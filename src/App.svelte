<script>
	import 'prism-svelte';
	import { onMount } from 'svelte';
	import CodeBlock from './CodeBlock.svelte';
	export const baseUrl = 'https://raw.githubusercontent.com/nielswadsholt/selfexplainer/master/';
	export let name = '';
	let source;
	let highlighted;
	let visible = false;

	onMount(async () => {
		const response = await fetch(
			baseUrl + 'src/App.svelte');
		source = await response.text();
	})

	async function btnClick() {
		source = highlighted ? highlighted : await Prism.highlightAll();
		visible = !visible;
	}
</script>
<main>
	<section class="section">
		<a class="github-button"
			href="https://github.com/nielswadsholt/selfexplainer"
			data-color-scheme="no-preference: dark; light: dark; dark: light;"
			data-size="large" aria-label="View nielswadsholt/selfexplainer on GitHub">
			View on GitHub
		</a>
	</section>
	<section>
		<h2>I am</h2>
		<h1>{name}</h1>
		<h2>I am a website</h2>
		<p>This is my button</p>
		<div class="button is-danger is-large is-outlined" on:click={btnClick}>Button</div>
	</section>
	<section>
		<div class="tabs is-centered">
			<ul>
				<li class="is-active"><a>App.svelte</a></li>
				<li><a>CodeBlock.svelte</a></li>
				<li><a>index.html</a></li>
				<li><a>main.js</a></li>
			</ul>
		</div>
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
	</section>
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