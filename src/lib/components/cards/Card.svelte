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
		? 'bg-white shadow-sm shadow-gray-200'
		: bg == 'gray'
			? 'bg-gray-50 shadow-sm shadow-gray-100'
			: bg == 'red'
				? 'bg-red-50 shadow-sm shadow-red-100'
				: bg == 'blue'
					? 'bg-blue-50 shadow-sm shadow-blue-100'
					: bg == 'green'
						? 'bg-green-50 shadow-sm shadow-green-100'
						: bg == 'yellow'
							? 'bg-yellow-50 shadow-sm shadow-yellow-100'
							: bg == 'purple'
								? 'bg-purple-50 shadow-sm shadow-purple-100'
								: bg == 'fuchsia'
									? 'bg-fuchsia-50 shadow-sm shadow-fuchsia-100'
									: bg == 'orange'
										? 'bg-orange-50/40 shadow-sm shadow-orange-100'
										: ''} rounded-md p-2 sm:p-6 h-[{height}] {extraClass}"
>
	<slot />
</div>
