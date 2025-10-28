<script lang="ts">
	export let proj: {
		'image source': string;
		'project name': string;
		'project description': string;
	};
</script>

<div class="mx-1.5">
	<div
		class="cursor-pointer overflow-visible rounded-lg bg-white shadow-sm transition duration-100 ease-in-out hover:scale-105 hover:shadow-md"
	>
		<div class="relative flex h-full w-full flex-grow-0 flex-col flex-wrap justify-start">
			<img
				class="h-[180px] w-full rounded-lg object-cover"
				src="{proj['image source']}.png"
				alt="coverImg"
			/>
		</div>
	</div>
	<p class="mt-2 text-center text-base text-gray-600">
		{proj['project name']}
	</p>
	<p class="text-sm whitespace-pre-wrap text-gray-600">
		{proj['project description']}
	</p>
</div>
