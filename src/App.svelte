<script>
	import CodeBlock from './CodeBlock.svelte';
	import Tab from './Tab.svelte';
	import TabPanel from './TabPanel.svelte';
	export const baseUrl = 'https://raw.githubusercontent.com/nielswadsholt/selfexplainer/master/';
	export let name = '';

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
		<h2>Hi. I am</h2>
		<h1>{name}</h1>
		<h2>I am a website. This is my code:</h2>
	</section>
	<section>
		<div class="tabs is-centered">
			<ul>
				<Tab title="index.html"/>
				<Tab title="main.js"/>
				<Tab title="stores.js"/>
				<Tab title="App.svelte"/>
				<Tab title="CodeBlock.svelte"/>
				<Tab title="Tab.svelte"/>
				<Tab title="TabPanel.svelte"/>
			</ul>
		</div>
		<div id="tab-panels">
			<TabPanel tab="index.html">
				<CodeBlock language="html" path="{baseUrl+'/public/index.html'}"/>
			</TabPanel>
			<TabPanel tab="main.js">
				<CodeBlock language="js" path="{baseUrl+'src/main.js'}"/>
			</TabPanel>
			<TabPanel tab="stores.js">
				<CodeBlock language="js" path="{baseUrl+'src/stores.js'}"/>
			</TabPanel>
			<TabPanel tab="App.svelte">
				<CodeBlock language="svelte" path="{baseUrl+'src/App.svelte'}"/>
			</TabPanel>
			<TabPanel tab="CodeBlock.svelte">
				<CodeBlock language="svelte" path="{baseUrl+'src/CodeBlock.svelte'}"/>
			</TabPanel>
			<TabPanel tab="Tab.svelte">
				<CodeBlock language="svelte" path="{baseUrl+'src/Tab.svelte'}"/>
			</TabPanel>
			<TabPanel tab="TabPanel.svelte">
				<CodeBlock language="svelte" path="{baseUrl+'src/TabPanel.svelte'}"/>
			</TabPanel>
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