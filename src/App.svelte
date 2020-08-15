<script>
	import CodeBlock from './CodeBlock.svelte';
	import Tab from './Tab.svelte';
	import TabPanel from './TabPanel.svelte';
	export const baseUrl = 'https://raw.githubusercontent.com/nielswadsholt/selfexplainer/master/';
	export let name = '';

</script>
<main class="container">
	<section class="section has-text-centered">
		<a class="github-button"
			href="https://github.com/nielswadsholt/selfexplainer"
			data-color-scheme="no-preference: dark; light: dark; dark: light;"
			data-size="large" aria-label="View nielswadsholt/selfexplainer on GitHub">
			View on GitHub
		</a>
	</section>
	<section class="section has-text-centered">
		<h2 class="is-size-6-mobile is-size-4-tablet">Hi. I am</h2>
		<h1 class="title is-size-3-mobile is-size-1-tablet">{name}</h1>
		<h2 class="is-size-5-mobile is-size-3-tablet">I am a website.</h2>
		<h2 class="is-size-6-mobile is-size-4-tablet">This is my code:</h2>
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
		margin: 0 auto;
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