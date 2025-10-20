<script lang="ts">
	export let height: string = 'auto';
	export let extraClass: string = '';
	export let bg:
		| 'white'
		| 'gray'
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'purple'
		| 'fuchsia'
		| 'orange' = 'white';
</script>

<div
	class="{bg == 'white'
		? 'bg-white'
		: bg == 'gray'
			? 'bg-gray-50'
			: bg == 'red'
				? 'bg-red-50'
				: bg == 'blue'
					? 'bg-blue-50'
					: bg == 'green'
						? 'bg-green-50'
						: bg == 'yellow'
							? 'bg-yellow-50'
							: bg == 'purple'
								? 'bg-purple-50'
								: bg == 'fuchsia'
									? 'bg-fuchsia-50'
									: bg == 'orange'
										? 'bg-orange-50'
										: ''} rounded-md p-2 sm:p-6 h-[{height}] {extraClass}"
>
	<slot />
</div>
