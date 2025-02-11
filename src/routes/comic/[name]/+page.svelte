<script lang="ts">
    let data = $props()
    console.log(data);

    $effect(() => { console.log(data); })

</script>

<div>
    Test
</div>