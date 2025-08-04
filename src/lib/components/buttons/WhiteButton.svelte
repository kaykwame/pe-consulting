<script lang="ts">
	export let buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let disabled = false;
	export let extraCss = '';
	export let rounded = true;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="my-auto">
	<button
		on:click
		{disabled}
		class:opacity-60={disabled}
		type="button"
		class={`${
			buttonSize === 'xs'
				? 'px-2 py-1 text-xs font-semibold'
				: buttonSize === 'sm'
					? 'px-2 py-1 text-sm font-semibold'
					: buttonSize === 'md'
						? 'px-2.5 py-1.5 text-sm font-semibold '
						: buttonSize === 'lg'
							? 'px-3 py-2 text-sm font-semibold'
							: buttonSize === 'xl'
								? 'px-3.5 py-2.5 text-sm font-semibold'
								: ''
		} ${extraCss} flex gap-1 ${rounded ? 'rounded-md' : ''} border bg-white text-gray-700 shadow-sm ${
			disabled ? '' : 'hover:bg-gray-100'
		}   focus:ring-energyblue-500 transition focus:ring-2 focus:ring-offset-2  focus:outline-none`}
		><slot name="svg" /><slot /></button
	>
</div>
