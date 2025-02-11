<script lang="ts">
    interface Image{
        number: number,
        code: string,
        url: string
    }

    let { data } = $props()
    const images = data.images as Image[]

</script>

<div class="flex flex-col items-center justify-center max-w-full md:max-w-7xl m-auto">
    {#each images as image}
        <div>
            <img src={image.url} alt={image.code+String(image.number)}>
        </div>
    {/each}
</div>