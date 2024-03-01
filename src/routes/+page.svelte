<script lang="ts">
    import type { PageData } from "$lib";
    
    export let data: { pages_data: PageData[] };

    const date = new Date();
    let localTime = date.getTime();
    let localOffset = date.getTimezoneOffset() * 60_000;

    let utc = localTime + localOffset;
    let time = new Date(utc + 19_800_000);

    const setTime = () => {
        const date = new Date();
        let localTime = date.getTime();
        let localOffset = date.getTimezoneOffset() * 60_000;

        let utc = localTime + localOffset;
        time = new Date(utc + 19_800_000);

        setTimeout(setTime, 60_000);
    };

    setTimeout(setTime, 60_000);

    interface Work {
        url: string;
        link: string | null;
        type: 'Showreel' | 'Link' | 'Image';
        title: string,
    }

    let images: Work[] = [
        {
            url: '/ss1.png',
            link: 'https://www.intent.app',
            type: 'Link',
            title: 'Intent',
        },
        {
            url: '/ss2.png',
            link: 'https://www.runic.design',
            type: 'Link',
            title: 'Runic Icons',
        }
    ];
</script>

<main>
    <div class="w-screen h-[50vh] flex flex-col items-center justify-end gap-2.5">
        <p class="text-[14.5px] leading-6 w-80">I'm Aarav, a freelance full-stack web developer & visual designer from India.</p>
        <p class="text-[14.5px] leading-6 w-80">I'm well-versed with <span class="bg-[rgba(255,47,0,0.25)]">Svelte, React, Tailwind, Supabase, Rust, JS/TS, etc</span>. I practice <span class="bg-[rgba(12,140,233,0.25)]">interface, web and brand design</span>.</p>
        
        <div class="flex flex-row gap-2 w-80 mt-2.5">
            <button class="
                select-none h-[31px] w-fit bg-black rounded-full pl-4 pr-3.5 border border-black text-xs text-white flex flex-row items-center justify-center gap-1 leading-[31px]
                shadow-[0px_41px_12px_0_rgba(0,0,0,0),0px_26px_11px_0_rgba(0,0,0,0.03),0px_15px_9px_0_rgba(0,0,0,0.1),0px_7px_7px_0_rgba(0,0,0,0.17),0px_2px_4px_0_rgba(0,0,0,0.2),inset_0px_-4px_4px_0_rgba(255,255,255,0.15),inset_0px_4px_4px_0_rgba(255,255,255,0.25)]
            ">
                Available for work
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 7.5H12.5M12.5 7.5L9 4M12.5 7.5L9 11" stroke="#EDEDED"/>
                </svg>                
            </button>
            <a href="https://x.com/arvsrn" class="select-none h-[31px] w-fit bg-black/5 rounded-full px-4 border border-black/15 active:bg-black/10 duration-75 transition-all ease-in-out text-xs text-black flex flex-row items-center justify-center gap-1">
                X/Twitter           
            </a>
        </div>
    </div>
    
    <div class="w-screen h-fit flex flex-col items-center justify-center py-32 gap-32">
        <div class="w-80 h-fit flex flex-col gap-5">
            <p class="text-[14.5px] leading-6 w-full text-black/75 select-none">Articles</p>
    
            {#each data.pages_data as page}
                <div class="flex flex-row w-full h-fit cursor-pointer" on:click={() => window.location.assign(`/writing/${page.id}`)}>
                    <div class="flex flex-col w-full h-fit">
                        <p class="text-[14.5px] leading-6 w-fit select-none">{page.title}</p>
                        <p class="text-[14.5px] leading-6 w-fit text-black/75 select-none">{page.description}</p>
                    </div>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="flex-none">
                        <path d="M3.5 11.5L8.5 6.5M8.5 6.5H5.5M8.5 6.5V9.5M2.5 7V4.5C2.5 3.39543 3.39543 2.5 4.5 2.5H10.5C11.6046 2.5 12.5 3.39543 12.5 4.5V10.5C12.5 11.6046 11.6046 12.5 10.5 12.5H8" stroke="black" stroke-opacity="0.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>                
                </div>
            {/each}
        </div>

        <div class="size-fit flex flex-col gap-16 px-4">
            {#each images as image}
                <a href={image.link} class="size-fit relative">
                    <img src={image.url} style:image-rendering="pixelated" alt="" class="rounded-xl border select-none" draggable="false">

                    <div class="w-fit text-xs text-white px-2.5 flex flex-row items-center justify-center h-7 absolute bottom-1.5 right-1.5 rounded-md bg-white/10 border border-white/10 select-none">
                        {image.title} · {image.type}
                    </div>
                </a>
            {/each}
        </div>
    
        <div class="w-80 h-fit flex flex-col gap-0">
            <div class="w-full flex flex-row">
                <p class="text-[14.5px] leading-6 w-full text-black/75 select-none">Version 17 · 2024</p>
                <p class="text-[14.5px] leading-6 w-fit text-black/75 select-none flex-none">{time.getHours()}.{time.getMinutes()} local time</p>
            </div>
        </div>
    </div>
</main>

<div class="fixed bottom-4 left-1/2 size-[31px] rounded-full bg-white/5 backdrop-blur-sm border border-black/10 flex items-center justify-center">
    <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 2v10.5m0 0L11 9m-3.5 3.5L4 9" stroke="white"/></svg>
</div>

<style>
    main {
        overflow-x: hidden;
    }
</style>
