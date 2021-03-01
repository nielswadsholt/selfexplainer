<script>
    import { onMount } from 'svelte';
    import CodeBlock from './CodeBlock.svelte';
    import Tab from './Tab.svelte';
    import TabPanel from './TabPanel.svelte';
    import { baseUrl, codeCache } from './stores';
    export let name = '';

    onMount(async () => {
        Object.keys($codeCache).forEach(async path => {
            const response = await fetch(baseUrl + path);
            $codeCache[path] = await response.text();
        });
    });
    
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
        <h2 class="is-size-6-mobile is-size-4-tablet">I am a website.</h2>
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
                <Tab title="Inline JS"/>
            </ul>
        </div>
        <div class="tab-panels">
            <TabPanel tab="index.html">
                <CodeBlock language="html" path="{'public/index.html'}"/>
            </TabPanel>
            <TabPanel tab="main.js">
                <CodeBlock language="js" path="{'src/main.js'}"/>
            </TabPanel>
            <TabPanel tab="stores.js">
                <CodeBlock language="js" path="{'src/stores.js'}"/>
            </TabPanel>
            <TabPanel tab="App.svelte">
                <CodeBlock language="svelte" path="{'src/App.svelte'}"/>
            </TabPanel>
            <TabPanel tab="CodeBlock.svelte">
                <CodeBlock language="svelte" path="{'src/CodeBlock.svelte'}"/>
            </TabPanel>
            <TabPanel tab="Tab.svelte">
                <CodeBlock language="svelte" path="{'src/Tab.svelte'}"/>
            </TabPanel>
            <TabPanel tab="TabPanel.svelte">
                <CodeBlock language="svelte" path="{'src/TabPanel.svelte'}"/>
            </TabPanel>
            <TabPanel tab="Inline JS">
                <CodeBlock language="js">
                    {'let answer = 42;\nconsole.log(answer);'}
                </CodeBlock>
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

    section {
        padding: 2rem 1.5rem;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>