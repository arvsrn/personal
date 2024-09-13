<script lang="ts">
    export let src: string;
    
    let position = [0, 0];
    let hovering = false;

    let zoomFactor = 2;

    let self: HTMLImageElement;

    const onMouseEnter = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event.clientX ?? event.touches[0].clientX;
        const clientY = event.clientY ?? event.touches[0].clientY;
        
        hovering = true;
        position = [clientX, clientY];
    };

    const onMouseLeave = () => {
        hovering = false;
        position = [0, 0];
    };

    const onMouseMove = (event: MouseEvent | TouchEvent) => {
        event.preventDefault();

        const clientX = event.clientX ?? event.touches[0].clientX;
        const clientY = event.clientY ?? event.touches[0].clientY;
        
        if (!self)
            return;
        
        const rect = (event.target as HTMLElement).getBoundingClientRect();
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        position = [
            Math.floor(((rect.width / 2) - mouseX) / 2),
            Math.floor(((rect.height / 2) - mouseY) / 2),
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

    class="bg-white responsive relative outline outline-1 outline-black/10 rounded-xl overflow-hidden cursor-move"
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
        width: 908px;
        aspect-ratio: 908 / 644;
    }

    @media only screen and (max-width: 927px) {
        .responsive {
            width: 98vw;
        }
    }
</style>