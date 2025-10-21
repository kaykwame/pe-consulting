<script lang="ts">
	import { goto } from '$app/navigation';
	import WhiteButton from '$lib/components/buttons/WhiteButton.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import CloseSVG from '$lib/components/SVGs/CloseSVG.svelte';
	import EmptyImageSvg from '$lib/components/SVGs/EmptyImageSVG.svelte';
	import PhoneSVG from '$lib/components/SVGs/PhoneSVG.svelte';
	import ThreeLinesSVG from '$lib/components/SVGs/ThreeLinesSVG.svelte';
	import { services, tabsObj } from '$lib/general/helpers';
	import { showProj } from '$lib/stores/showProjStore';
	import { onMount } from 'svelte';
	import { crossfade, draw, fade, fly } from 'svelte/transition';

	let showMobileMenu: boolean = false;
	let isVisible = false;
	onMount(() => {
		showProj.set(false);
		const target = document.querySelector('.animate-on-scroll');
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					isVisible = true;
					observer.disconnect(); // Stop observing once visible
				}
			},
			{ threshold: 0.1 } // Trigger when 10% of the element is visible
		);

		if (target) observer.observe(target);

		return () => observer.disconnect();
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home page" />
</svelte:head>

<section
	in:fade={{ duration: 1000 }}
	class="phone:min-h-[80svh] tablet:min-h-[100svh] laptop:min-h-[70vh] desktop:min-h-[70vh] items-center justify-center space-y-12 bg-cover bg-center bg-no-repeat"
	style="background-image: url('/images/header-hero-img-1.jpg');"
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

		<Hero />
	</div>
</section>
<section
	class="tablet:min-h-[50vh] laptop:min-h-[60vh] desktop:min-h-[70vh] relative flex min-h-[40vh] items-center justify-center bg-gray-100 bg-cover bg-center bg-no-repeat py-8"
>
	<!-- <Header {tabs} /> -->
	<div class="mx-auto max-w-[1120px] min-w-[300px] px-3">
		<header class="inset-x-0 top-0 z-50 flex h-16 border-b border-gray-100">
			<div class="mx-auto flex w-full max-w-7xl items-center justify-between">
				<div class="mx-auto flex items-center justify-center gap-x-5" in:fade={{ duration: 2000 }}>
					<WhiteButton
						extraCss="rounded rounded-md"
						on:click={() => goto('/about')}
						rounded={false}
						buttonSize="xl">Learn More</WhiteButton
					>
					<WhiteButton
						extraCss="rounded rounded-md"
						on:click={() => goto('/services')}
						rounded={false}
						buttonSize="xl">Our Services</WhiteButton
					>
					<WhiteButton
						extraCss="rounded rounded-md"
						on:click={() => goto('/studies')}
						rounded={false}
						buttonSize="xl"
					>
						Case Studies</WhiteButton
					>
				</div>
			</div>
		</header>
		<div class="mt-5">
			<div
				class="phone:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-4 laptop:mt-10 tablet:mt-7 phone:mt-4 grid"
			>
				<div
					class="animate-on-scroll col-span-4"
					in:fly={{ x: -100, duration: 800, delay: isVisible ? 0 : 200 }}
				>
					<h1
						class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-4xl mb-8 text-left text-xl font-bold text-gray-700"
					>
						Our Story
					</h1>
				</div>
				<div
					in:fly={{ x: 100, duration: 800, delay: isVisible ? 0 : 200 }}
					class="animate-scroll phone:col-span-1 tablet:col-span-2 laptop:col-span-3 desktop:col-span-3 flex items-center justify-center"
				>
					<div>
						<p class="desktop:text-base text-left font-mono text-sm text-wrap text-gray-700">
							Founded in 2025 by Prince Pappoe, P&E Consulting was created to address a critical
							gap: Our team is made of brilliant individuals with years of experience in
							engineering, environmental and business world and noticed that while large
							corporations have internal sustainability teams, SMEs often lack access to specialized
							expertise. We aim to change that by providing realistic, impactful solutions tailored
							to your business needs.
						</p>
					</div>
				</div>
				<div
					class="tablet:col-span-1 laptop:col-span-1 desktop:col-span-1 tablet:flex hidden items-center justify-center"
				>
					<div class="ml-8 flex h-full w-full items-center justify-center">
						<!-- svelte-ignore a11y_img_redundant_alt -->
						<img
							src="/images/header-hero-img-1 old.jpg"
							alt="about us image"
							class="my-6 h-34 w-full rounded-md object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section
	class="relative items-center justify-center space-y-12 bg-gray-50 bg-cover bg-center bg-no-repeat pb-8"
>
	<div class="mx-auto max-w-[1120px] min-w-[300px] bg-slate-50 px-3">
		<div>
			<h1
				class="phone:text-2xl tablet:text-2xl laptop:text-3xl desktop:text-4xl py-8 text-left text-xl font-bold text-gray-800"
			>
				Quick Highlights
			</h1>
			<div
				class=" phone:grid-cols-1 tablet:grid-cols-2
					laptop:grid-cols-3 desktop:grid-cols-3 grid gap-y-8 py-4"
			>
				{#each Object.entries(services) as [service, value]}
					<div class="">
						<div class="mb-2 flex w-full justify-center">
							<div
								class="phone:h-44 phone:w-full tablet:h-44 tablet:w-4/5 laptop:h-48 laptop:w-4/5 desktop:h-52
									desktop:w-4/5 flex items-center justify-center rounded-md bg-gray-300 text-center dark:bg-gray-700"
							>
								{#if value.image != ''}
									<img
										src={`/images/services/${value.image}`}
										alt={service}
										class="h-full w-full rounded-md object-cover"
									/>
								{:else}
									<EmptyImageSvg />
								{/if}
							</div>
						</div>
						<div class="tablet:w-4/5 laptop:w-4/5 desktop:w-4/5 mx-auto mb-2 w-full">
							<div class="mb-1 text-center font-bold text-gray-900">
								{service}
							</div>
							<!-- <ul class="list-inside list-disc text-sm text-gray-800"> -->
							{#each value.description_text as text}
								<!-- <li class="py-1">{text}</li> -->
								<p class="py-1 text-left text-sm text-gray-500">{text}</p>
							{/each}
							<!-- </ul> -->
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<section
	class="relative items-center justify-center space-y-12 bg-gray-50 bg-cover bg-center bg-no-repeat"
>
	<div class="bg-[#fff9e6]">
		<div class="flex justify-center">
			<div class="flex w-full max-w-xl flex-col items-center rounded-md px-8 py-10 shadow-none">
				<h4 class="mb-4 text-center text-2xl font-bold text-gray-800">Fancy Our Services?</h4>
				<p class="mb-6 text-center text-gray-600">
					Every business is unique. Let's discuss how we can create a tailored consulting package
					that addresses your specific challenges and objectives.
				</p>
				<button
					on:click={() => goto('/contact')}
					class="flex items-center justify-center gap-2 rounded-md px-6 py-3 text-xl font-bold text-white"
					style="background: linear-gradient(90deg, #fbbf24 0%, #f59e42 100%);"
				>
					Schedule a call
					<PhoneSVG size={16} />
				</button>
			</div>
		</div>
	</div>
</section>
