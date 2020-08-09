<script>
    import { current } from './stores'
    export let title = '';
        
    function tabClick() {
        current.update(v => v = title);
    }
</script>


<li class:is-active="{$current == title}"><a on:click={tabClick}>{title}</a></li>