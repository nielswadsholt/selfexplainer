<script>
	export let name;
</script>

<main>
	<!-- Place this tag where you want the button to render. -->
	<a class="github-button" href="https://github.com/nielswadsholt/selfexplainer" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" aria-label="View nielswadsholt/selfexplainer on GitHub">View on GitHub</a>
	<h1>{name}</h1>
	<p>Today a basic <a href="https://svelte.dev/tutorial" target="blank">Svelte tutorial</a> rip-off. Tomorrow the world (hello, by the way).</p>
	<p></p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
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