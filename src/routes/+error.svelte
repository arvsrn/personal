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

    <div class="py-32 flex items-center justify-center w-full h-fit">
        <div class="responsive h-fit flex flex-col">
            <p class="text-lg italic">Not found.</p>
            <p class="text-[13px] leading-6 text-black mt-3">Done is better than perfect, but done is never finished.</p>
            <p class="text-[13px] leading-6 text-black">Today's 404 page is tomorrow's breakthrough. It's the nature of the internet.</p>

            <div class="flex flex-row gap-2 mt-5">
                <a href="/" class="rounded-full h-8 bg-black border border-black select-none w-fit flex flex-row gap-2 items-center pl-3 pr-3.5 text-white text-xs shadow-[inset_0px_4px_15px_0px_rgba(255,255,255,25%),0px_15px_40px_0px_rgba(0,0,0,20%),0px_10px_20px_0px_rgba(0,0,0,15%),0px_3px_4px_0px_rgba(0,0,0,3%)]">
                    <div class="rounded-full size-2 bg-white/50"></div>
                    <span class="translate-y-[1px]">Go back</span>
                </a>
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
</style>