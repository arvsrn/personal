<script lang="ts">
    export let src: string;
    export let light: boolean = false;
    
    let position = [0, 0];
    let hovering = false;

    let zoomFactor = 2.5;
    let padding = 64;

    let self: HTMLImageElement;

    const onMouseEnter = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        
        hovering = true;
        position = [clientX, clientY];
    };

    const onMouseLeave = () => {
        hovering = false;
        position = [0, 0];
    };

    const onMouseMove = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
        const clientY = event instanceof MouseEvent ? event.clientY : event.touches[0].clientY;
        
        if (!self)
            return;
        
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const mouseX = (clientX - rect.left);
        const mouseY = (clientY - rect.top);

        const centerRect = [
            (rect.width * zoomFactor) - rect.width + 2 * padding,
            (rect.height * zoomFactor) - rect.height + 2 * padding,
        ];

        console.log(mouseX, mouseY);

        const maxX = centerRect[0] / 2;
        const maxY = centerRect[1] / 2;

        const percentage = [
            mouseX / rect.width,
            mouseY / rect.height,
        ];

        position = [
            Math.floor((1 - 2 * percentage[0]) * maxX / zoomFactor),
            Math.floor((1 - 2 * percentage[1]) * maxY / zoomFactor),
        ];
    };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
    on:mouseenter={onMouseEnter} 
    on:mouseleave={onMouseLeave} 
    on:mousemove={onMouseMove}
    on:touchstart={onMouseEnter} 
    on:touchend={onMouseLeave} 
    on:touchmove={onMouseMove} 

    class="bg-[#101010] responsive relative outline outline-1 outline-white/[.025] rounded-md overflow-hidden cursor-move"
    class:light={light}
>
    <img bind:this={self} style:transform="translate({position[0]}px, {position[1]}px)" style:--zoom={zoomFactor} class:zoom={hovering} class="responsive origin-center pointer-events-none absolute" {src} alt="">
</div>

<style>
    img {
        image-rendering: smooth;
    }

    .zoom {
        scale: var(--zoom);
    }

    .responsive {
        width: 780px;
        aspect-ratio: 780 / 507;
    }

    .light {
        @apply bg-[#FBFBFB];
    }

    @media only screen and (max-width: 907px) {
        .responsive {
            width: 86vw;
        }
    }
</style>