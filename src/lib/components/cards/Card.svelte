<script lang="ts">
	export let height: string = 'auto';
	export let extraClass: string = '';
	export let bg: string = 'white';
</script>

<div class="bg-{bg} rounded-lg p-2 shadow sm:rounded-lg sm:p-6 h-{height} {extraClass}">
	<slot />
</div>
