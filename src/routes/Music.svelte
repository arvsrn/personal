<script lang="ts">
    const links: string[] = [
        "https://open.spotify.com/embed/track/6XjDF6nds4DE2BBbagZol6",
        "https://open.spotify.com/embed/track/2nqtsUds06yqBgjfhMZhpa",
        "https://open.spotify.com/embed/track/3A1BJKGMsa8JqO8M8zztyq",
        "https://open.spotify.com/embed/track/65r94rVdiMwqXyQFEr3tqT",
        "https://open.spotify.com/embed/track/44ENDeqm995fDbfBoX25Am",
        "https://open.spotify.com/embed/track/7H3n6nnlgJPD58YqoBiN7q",
        "https://open.spotify.com/embed/track/3gilyLEPttYyyo9NTNyAwx",
        "https://open.spotify.com/embed/track/2ywSkFhN0wUvxKiWW0BxcK",
        "https://open.spotify.com/embed/track/1LPgmcF3F2Hp8Rd69dREpW",
    ];

    let last = links[Math.floor(Math.random() * links.length)];

    const shuffle = () => {
        let newSong = links[Math.floor(Math.random() * links.length)];

        while (newSong === last) {
            newSong = links[Math.floor(Math.random() * links.length)];
        }

        last = newSong;
        return newSong;
    }

    let open: boolean = false;

    export function clickOutside(node: HTMLElement, options: {
        handler: (e: MouseEvent) => void,
        handleContextMenu?: boolean,
    }): { destroy: () => void } {
        const onClick = (event: MouseEvent) =>
            node 
            && !node.contains(event.target as HTMLElement) 
            && !event.defaultPrevented 
            && options.handler(event);
    
        document.addEventListener('click', onClick, true);
        if (options.handleContextMenu)
            document.addEventListener('contextmenu', onClick, true);
    
        return {
            destroy() {
                document.removeEventListener('click', onClick, true);
                if (options.handleContextMenu)
                    document.removeEventListener('contextmenu', onClick, true);
            },
        };
    };

    export function blurInDownwards(node: Node, props: { duration: number, transform?: string }) {
        return {
            duration: props.duration,
            css: (t: number) => {
                return `
                    transform: translateY(-${4-(t*4)}px) ${props.transform ?? ""};
                    scale: ${0.99 + (0.01 * t)};
                    filter: blur(${1-(t*1)}px);
                `;
            }
        };
    };
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-click-events-have-key-events -->
<main on:click={() => open = true} use:clickOutside={{ handler: () => open = false, handleContextMenu: true }} class="overflow-visible mb-3 flex items-center size-6 rounded-full bg-black/10 cursor-pointer gap-0.5 justify-center relative">
    <div class="w-0.5 h-1.5 bg-black/50 rounded-full animate-1"></div>
    <div class="w-0.5 h-1.5 bg-black/50 rounded-full animate-2"></div>
    <div class="w-0.5 h-1.5 bg-black/50 rounded-full animate-3"></div>

    {#if open}
        <div transition:blurInDownwards={{ duration: 100 }} class="w-fit h-fit absolute top-8 left-0 z-50">
            <iframe style="border-radius:12px" src={shuffle()} width="300" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    {/if}
</main>

<style>
    @keyframes wave {
        from {
            transform: scaleY(2);
        }

        50% {
            transform: scaleY(1);
        }

        to {
            transform: scaleY(2);
        }
    }

    .animate-1, .animate-2, .animate-3 {
        animation: wave 1.5s infinite;
    }

    .animate-2 {
        animation-delay: 0.5s;
    }

    .animate-3 {
        animation-delay: 1s;
    }
</style>