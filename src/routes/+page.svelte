<script>
    import Image from "./Image.svelte";
    import Music from "./Music.svelte";

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
</script>

<main class="relative w-screen min-h-screen h-fit overflow-hidden">
    <svg class="absolute left-1/2 -translate-x-1/2 pointer-events-none -top-[1000px] -z-50" width="3750" height="1950" viewBox="0 0 3750 1950" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_2811_2961)">
            <circle opacity="0.75" cx="1875" cy="975" r="300" fill="#00FF94"/>
            <circle opacity="0.75" cx="1425" cy="975" r="300" fill="#DBFF00"/>
            <circle opacity="0.75" cx="2325" cy="975" r="300" fill="#0047FF"/>
            <circle opacity="0.75" cx="2775" cy="975" r="300" fill="#6100FF"/>
            <circle opacity="0.75" cx="975" cy="975" r="300" fill="#FF2F00"/>
        </g>
        <defs>
            <filter id="filter0_f_2811_2961" x="0" y="0" width="3750" height="1950" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="337.5" result="effect1_foregroundBlur_2811_2961"/>
            </filter>
        </defs>
    </svg>

    <svg class="absolute left-1/2 -translate-x-1/2 pointer-events-none -bottom-[1000px] -z-50" width="3750" height="1950" viewBox="0 0 3750 1950" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_2811_2961)">
            <circle opacity="0.75" cx="1875" cy="975" r="300" fill="#00FF94"/>
            <circle opacity="0.75" cx="1425" cy="975" r="300" fill="#DBFF00"/>
            <circle opacity="0.75" cx="2325" cy="975" r="300" fill="#0047FF"/>
            <circle opacity="0.75" cx="2775" cy="975" r="300" fill="#6100FF"/>
            <circle opacity="0.75" cx="975" cy="975" r="300" fill="#FF2F00"/>
        </g>
        <defs>
            <filter id="filter0_f_2811_2961" x="0" y="0" width="3750" height="1950" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="337.5" result="effect1_foregroundBlur_2811_2961"/>
            </filter>
        </defs>
    </svg>

    <div class="py-32 flex items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <Music></Music>
            <p class="text-lg italic">Aarav Sareen</p>
            <p class="text-[13px] leading-6 text-black/75">Full-stack developer and website/product designer.</p>
            <p class="text-[13px] leading-6 text-black mt-3">Dedicated to designing & building memorable and human-centered experiences across brands, websites and products.</p>

            <div class="flex flex-row gap-2 mt-5">
                <button class="rounded-full h-8 bg-black border border-black select-none w-fit flex flex-row gap-2 items-center pl-3 pr-3.5 text-white text-xs shadow-[inset_0px_4px_15px_0px_rgba(255,255,255,25%),0px_15px_40px_0px_rgba(0,0,0,20%),0px_10px_20px_0px_rgba(0,0,0,15%),0px_3px_4px_0px_rgba(0,0,0,3%)]">
                    <div class="rounded-full size-2 bg-[#42D692]"></div>
                    <span class="translate-y-[1px]">Schedule call</span>  
                </button>
                <a href="https://x.com/arvsrn" class="rounded-full h-8 bg-transparent border border-black/25 select-none w-fit flex flex-row gap-2 items-center px-3.5 text-black text-xs">
                    <span class="translate-y-[1px]">X/Twitter</span>  
                </a>
            </div>
        </div>
    </div>

    <div class="py-32 flex flex-col gap-16 items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <p class="text-lg italic">Ghosteams</p>
            <p class="text-[13px] leading-6 text-black/75">Design for a project management platform.</p>

            <div class="w-full flex flex-row gap-3 mt-3">
                <img class="size-6 rounded-full" src="/Testimonials/Ghosteams.jpg">
                
                <div class="w-full flex flex-col">
                    <p class="text-[13px] leading-6 text-black">Utkarsh Dubey, Founder at Ghosteams</p>
                    <p class="text-[13px] leading-6 text-black/50">He masterfully understood my vision ⏤ making him an outstanding designer I wholeheartedly recommend.</p>
                </div>
            </div>
        </div>

        <div class="flex flex-col responsive-gap">
            <Image src="/Shots/Ghosteams-1.png"></Image>
            <Image src="/Shots/Ghosteams-2.png"></Image>
            <Image src="/Shots/Ghosteams-3.png"></Image>
            <Image src="/Shots/Ghosteams-4.png"></Image>
        </div>
    </div>

    <div class="py-32 flex flex-col gap-16 items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <p class="text-lg italic">Intent</p>
            <p class="text-[13px] leading-6 text-black/75">An issue tracker app built for teams. Designed & built from scratch (Bun, SvelteKit, Tailwind)</p>
        </div>

        <Image src="/Shots/Intent-1.png"></Image>
        <Image src="/Shots/Intent-2.png"></Image>
        <Image src="/Shots/Intent-3.png"></Image>
    </div>

    <div class="py-32 flex flex-col gap-16 items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <p class="text-lg italic">Runic</p>
            <p class="text-[13px] leading-6 text-black/75">A design system and icon set.</p>
        </div>

        <Image src="/Shots/Runic-1.png"></Image>
        <Image src="/Shots/Runic-2.png"></Image>
        <Image src="/Shots/Runic-3.png"></Image>
    </div>

    <div class="py-32 flex items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <p class="text-lg italic">Want to work together?</p>
            <p class="text-[13px] leading-6 text-black">I design/redesign/build products and websites from scratch.</p>

            <button class="mt-5 rounded-full h-8 bg-black border border-black select-none w-fit flex flex-row gap-2 items-center pl-3 pr-3.5 text-white text-xs shadow-[inset_0px_4px_15px_0px_rgba(255,255,255,25%),0px_15px_40px_0px_rgba(0,0,0,20%),0px_10px_20px_0px_rgba(0,0,0,15%),0px_3px_4px_0px_rgba(0,0,0,3%)]">
                <div class="rounded-full size-2 bg-[#42D692]"></div>
                <span class="translate-y-[1px]">Schedule call</span>  
            </button>

            <div class="responsive flex flex-row mt-5">
                <p class="text-[13px] leading-6 text-black">{time.getHours()}:{time.getMinutes() < 10 ? '0' : ''}{time.getMinutes()} IST</p>
                <p class="text-[13px] leading-6 text-black/50 ml-auto">19th Iteration</p>
            </div>
        </div>
    </div>
</main>

<style>
    :global(body::-webkit-scrollbar), ::-webkit-scrollbar {
        display: none;
    }

    .responsive {
        width: 400px;
    }

    .responsive-gap {
        gap: 64px;
    }

    @media only screen and (max-width: 500px) {
        .responsive {
            width: 80vw;
        }
    }

    @media only screen and (max-width: 927px) {
        .responsive-gap {
            gap: 32px;
        }
    }
</style>