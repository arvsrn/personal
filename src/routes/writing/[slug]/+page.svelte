<script lang="ts">
    export let data: any;
</script>

<main class="w-screen h-screen overflow-scroll flex flex-col items-center py-48">
    <p class="text-[15px] leading-[31px] text relative">
        {data.properties.title}

        <a href="/" class="absolute top-0 left-0 -translate-x-9 size-[31px] flex items-center justify-center text-[rgba(0,0,0,0.75)] hover:text-black">
            <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6.5H9c2 0 2.5 1.667 2.5 2.5v.5c0 .667-.4 2-2 2h-1m-5-5 3-3m-3 3 3 3" stroke="currentColor"/></svg>
        </a>
    </p>

    <p class="text-[13px] leading-6 text mb-6 text-[rgba(0,0,0,0.75)]">{data.properties.description}</p>

    {#each data.blocks.results as block}
        <p class="text-[13px] leading-6 text mt-2">{block.paragraph.rich_text[0].text.content}</p>
    {/each}
</main>

<style>
    main {
        overflow-x: hidden;
    }

    p.text {
        width: 512px;
    }

    @media only screen and (max-width: 731.43px) {
        p.text {
            width: 70vw;
        }
    }
</style>