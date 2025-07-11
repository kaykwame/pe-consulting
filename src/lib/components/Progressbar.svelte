<script lang="ts">
	import { onMount } from 'svelte';

	export let level: string | 'Novice' | 'Beginner' | 'Intermediate' | 'Expert' = 'Intermediate';
	export let skill: string = '';
	let width: 0 | 37.5 | 63 | 100 = 63;

	onMount(() => {
		switch (level) {
			case 'Novice':
				width = 0;
				break;
			case 'Beginner':
				width = 37.5;
				break;
			case 'Intermediate':
				width = 63;
				break;
			case 'Expert':
				width = 100;
				break;
		}
		console.log('running');
	});
</script>

<!-- {#if loaded}
	<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
		<div
			class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
			style="width: {width}%"
		>
			{width}
			{level}
		</div>
	</div>
{/if} -->

<div class="mt-4">
	<h4 class="text-base font-bold text-gray-900">{skill}</h4>
	<div class="mt-2" aria-hidden="true">
		<div class="overflow-hidden rounded-full bg-gray-200">
			<div class="h-2 rounded-full bg-indigo-600" style="width: {width}%"></div>
		</div>
		<div class="my-2 grid grid-cols-4 text-sm font-medium text-gray-600">
			<div class="{level == 'Novice' ? 'text-indigo-600' : ''} col-span-1">Novice</div>
			<div class="{level == 'Beginner' ? 'text-indigo-600' : ''} text-center col-span-1">
				Beginner
			</div>
			<div class="{level == 'Intermediate' ? 'text-indigo-600' : ''} text-center col-span-1">
				Intermediate
			</div>
			<div class="{level == 'Expert' ? 'text-indigo-600' : ''} text-right col-span-1">Expert</div>
		</div>
	</div>
</div>
