<script lang="ts">
	import SocialIcons from '@rodneylab/svelte-social-icons';
	export let bgColor: string = 'bg-gray-800';
	const socialMediaLinks = ['linkedin', 'twitter', 'instagram', 'facebook'];
</script>

<footer class="mt-auto">
	<div class="{bgColor} px-4 py-8 text-white">
		<div class="container mx-auto grid grid-cols-1 gap-6 sm:gap-8">
			<!-- Brand Section -->
			<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
				<h2 class="mb-3 text-xl font-bold sm:text-2xl">P&E Consulting</h2>
				<p class="max-w-xs text-sm opacity-75">
					Empowering Your Business for a Sustainable Future.
				</p>
			</div>

			<!-- Navigation Links -->
			<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
				<h3 class="mb-3 text-base font-semibold sm:text-lg">Quick Links</h3>
				<ul class="space-y-2 text-sm">
					<li><a href="/" class="hover:underline">Home</a></li>
					<li><a href="/about" class="hover:underline">About</a></li>
					<li><a href="/services" class="hover:underline">Services</a></li>
					<li><a href="/contact" class="hover:underline">Contact</a></li>
				</ul>
			</div>

			<!-- Contact Info -->
			<div class="flex flex-col items-center text-center sm:items-start sm:text-left">
				<h3 class="mb-3 text-base font-semibold sm:text-lg">Contact Us</h3>
				<ul class="space-y-2 text-sm">
					<li>
						<a href="mailto:info@yourbrand.com" class="hover:underline">info@peconsulting.com</a>
					</li>
					<li><a href="tel:+1234567890" class="hover:underline">+1 (234) 000-000</a></li>
					<li class="max-w-xs">Address: ....</li>
				</ul>
				<div class="mt-2 flex items-center gap-x-3">
					{#each socialMediaLinks as smLink}
						<a href="#" class="hover:underline"
							><SocialIcons
								fgColor="#eeeeee"
								bgColor="#111111"
								width="24"
								height="24"
								network={smLink}
							/></a
						>
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-6 border-t border-gray-700 pt-4 text-center text-sm">
			<p>&copy; {new Date().getFullYear()} P&E Consulting. All rights reserved.</p>
			<div
				class="mt-2 flex flex-col justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
			>
				<a href="#" class="hover:underline">Privacy Policy</a>
				<a href="#" class="hover:underline">Terms of Service</a>
			</div>
		</div>
	</div>
</footer>

<style>
	@media (min-width: 640px) {
		.container {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 639px) {
		.container {
			grid-template-columns: 1fr;
		}
	}
</style>
