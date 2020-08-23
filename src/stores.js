import { writable } from 'svelte/store';

export const current = writable('App.svelte');
export const baseUrl = 'https://raw.githubusercontent.com/nielswadsholt/selfexplainer/master/';
export const codeCache = writable({
    "public/index.html": "",
    "src/main.js": "",
    "src/stores.js": "",
    "src/App.svelte": "",
    "src/CodeBlock.svelte": "",
    "src/Tab.svelte": "",
    "src/TabPanel.svelte": ""
});