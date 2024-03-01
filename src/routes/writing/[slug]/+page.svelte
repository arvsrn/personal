<script lang="ts">
    export let data: any;

    const annotate = (node: HTMLElement, parameters: any): {
        update?: (parameters: any) => void,
        destroy?: () => void
    } => {
        if (parameters.italic)
            node.classList.add('_italic');
        
        if (parameters.code)
            node.classList.add('_code');
        
        return {
            destroy() {}
        }
    }
</script>

<main class="w-screen h-screen overflow-scroll flex flex-col items-center py-48">
    <p class="text-[15px] leading-[31px] text relative">
        {data.properties.title}

        <a href="/" class="absolute top-0 left-0 -translate-x-9 size-[31px] flex items-center justify-center text-[rgba(0,0,0,0.75)] hover:text-black">
            <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6.5H9c2 0 2.5 1.667 2.5 2.5v.5c0 .667-.4 2-2 2h-1m-5-5 3-3m-3 3 3 3" stroke="currentColor"/></svg>
        </a>
    </p>

    <p class="text-[14.5px] leading-6 text mb-6 text-[rgba(0,0,0,0.75)]">{data.properties.description}</p>

    {#each data.blocks.results as block}
        {#if ['paragraph', 'heading_3'].includes(block.type)}
            <p class="{block.type} text-[14.5px] leading-6 text mt-2">
                {#each block[block.type].rich_text as content}
                    {#if content.text.link}
                        <a href="{content.text.link.url}" use:annotate={ content.annotations }>{content.text.content}</a>
                    {:else}
                        <span use:annotate={ content.annotations }>{content.text.content}</span>
                    {/if}
                {/each}
            </p>
        {:else if block.type === 'image'}
            <div class="max-w-full h-[743px] flex-none overflow-x-scroll overflow-y-hidden my-16">
                <div class="w-[1057px] h-[743px] flex-none">
                    <img draggable="false" style:image-rendering="pixelated" class="select-none" src="{block.image.file.url}" alt="">
                </div>
            </div>
        {/if}
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

    .paragraph {}

    .heading_3 {
        font-size: 16px;
        margin-top: 32px;
        margin-bottom: 8px;
    }

    ._italic {
        font-family: 'IBM Plex Serif';
        font-style: italic;
        font-size: 16.25px;
    }

    ._code {
        font-family: Menlo;
        font-size: 12px;
        color: #FF2F00;
        background: rgba(255,47,0,0.25);
        border-radius: 4px;
        padding: 2px 4px;
    }

    a {
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-decoration-color: rgba(0,0,0,0.5);
        color: rgba(0,0,0,0.75);
    }

    .no-scroll::-webkit-scrollbar {
        display: none;
    }
</style>