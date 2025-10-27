<script lang="ts">
	import { goto } from '$app/navigation';
	import WhiteButton from '$lib/components/buttons/WhiteButton.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import EmptyImageSvg from '$lib/components/SVGs/EmptyImageSVG.svelte';
	import ThreeLinesSVG from '$lib/components/SVGs/ThreeLinesSVG.svelte';
	import { caseStudies, services, tabsObj } from '$lib/general/helpers';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let showMobileMenu: boolean = false;

	onMount(() => {
		showProj.set(false);
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<section
	in:fade={{ duration: 1000 }}
	class="phone:min-h-[80svh] tablet:min-h-[100svh] laptop:min-h-[70vh] desktop:min-h-[70vh] items-center justify-center space-y-12 bg-cover bg-center bg-no-repeat"
	style="background-image: url('/images/header-hero-img-5.jpg');"
>
	<!-- <Header {tabs} /> -->
	<div class="mx-auto max-w-[1120px] min-w-[300px] px-3">
		<header class="inset-x-0 top-0 z-50 flex h-16 border-b border-gray-50">
			<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
				<div class="flex flex-1 items-center gap-x-3">
					<button
						on:click={() => {
							showMobileMenu = true;
						}}
						type="button"
						class="laptop:hidden -m-3 p-3"
					>
						<span class="sr-only">Open main menu</span>
						<ThreeLinesSVG />
					</button>
					<button
						on:click={() => goto('/')}
						class="laptop:gap-x-11 phone:text-2xl flex min-w-full text-xl leading-6 font-bold text-gray-50"
						>P&E Consulting LLC</button
					>
				</div>
				<nav
					class="laptop:flex laptop:gap-x-11 laptop:text-sm laptop:font-semibold laptop:leading-6 laptop:text-gray-50 hidden"
				>
					{#each Object.entries(tabsObj) as [key, tab]}
						<a href="/{tab == 'Home' ? '' : key.toLocaleLowerCase()}">{tab}</a>
					{/each}
				</nav>
			</div>
			{#if showMobileMenu}
				<!-- Mobile menu, show/hide based on menu open state. -->
				<div class="tablet:hidden" role="dialog" aria-modal="true">
					<!-- Background backdrop, show/hide based on slide-over state. -->
					<div class="fixed inset-0 z-50"></div>
					<div
						class="tablet:max-w-sm tablet:px-6 tablet:ring-1 tablet:ring-gray-900/10 fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6"
					>
						<div class="-ml-0.5 flex h-16 items-center gap-x-6">
							<!-- svelte-ignore a11y_click_events_have_key_events -->
							<!-- svelte-ignore a11y_no_static_element_interactions -->
							<div
								on:click={() => {
									showMobileMenu = false;
								}}
								class="-m-2.5 p-2.5 text-gray-700"
							>
								<span class="sr-only">Close menu</span>
								<button
									on:click={() => {
										showProj.set(false);
									}}
								>
									<CloseSVG />
								</button>
							</div>
						</div>
						<div class="mt-2 space-y-2">
							{#each Object.entries(tabsObj) as [key, tab]}
								<a
									href="/{tab == 'Home' ? '' : key.toLocaleLowerCase()}"
									on:click={() => {
										showMobileMenu = false;
									}}
									class="-mx-3 block rounded-lg px-3 py-2 font-mono text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
									>{tab}</a
								>
							{/each}
							<!-- <a
									href="/"
									on:click={() => {
										showMobileMenu = false;
									}}
									class="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-gray-900 hover:bg-gray-50"
									>Home</a
								> -->
						</div>
					</div>
				</div>
			{/if}
		</header>

		<Hero pageTitle="studies" />
	</div>
</section>

<section
	class="relative items-center justify-center space-y-12 bg-gray-50 bg-cover bg-center bg-no-repeat pt-8 pb-28"
>
	<div class="mx-auto max-w-[1120px] min-w-[300px]">
		<div>
			<h1
				class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-4xl mx-2 mb-6 text-left text-xl font-bold text-gray-800"
			>
				Case Studies
			</h1>
			<div
				class=" phone:grid-cols-1 tablet:grid-cols-2
					laptop:grid-cols-3 desktop:grid-cols-3 grid"
			>
				{#each Object.entries(caseStudies) as [study, value]}
					<div class="{value.colour} px-2 py-8">
						<div class="mb-2 flex w-full justify-center">
							<!-- <div
								class="phone:h-44 phone:w-full tablet:h-44 tablet:w-4/5 laptop:h-48 laptop:w-4/5 desktop:h-52
									desktop:w-4/5 flex items-center justify-center rounded-sm bg-gray-300 text-center dark:bg-gray-700"
							>
								{#if value.image != ''}
									<img
										src={`/images/services/${value.image}`}
										alt={study}
										class="h-full w-full object-cover"
									/>
								{:else}
									<EmptyImageSvg />
								{/if}
							</div> -->
						</div>
						<div class="tablet:w-4/5 laptop:w-4/5 desktop:w-4/5 mx-auto mb-2 w-full">
							<div class="mb-1 text-center font-bold text-gray-900">
								{study}
							</div>
							<!-- <ul class="list-inside list-disc text-sm text-gray-800"> -->
							{#each value.description_text as text}
								<!-- <li class="py-1">{text}</li> -->
								<p class="py-1 text-left text-sm text-gray-800">{text}</p>
							{/each}
							<!-- </ul> -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
