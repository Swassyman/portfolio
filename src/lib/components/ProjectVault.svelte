<script lang="ts">
	import { ExternalLink, Lock } from 'lucide-svelte';
	import { projects } from '$lib/data/projects';
</script>

<div class="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
	{#each projects as project}
		<a
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			class="group relative block overflow-hidden border border-[#333333] bg-[#0a0a0a] p-6 transition-colors hover:border-white"
		>
			<!-- Header -->
			<div
				class="mb-6 flex items-start justify-between text-[10px] tracking-widest text-[#888888] uppercase"
			>
				<span>{project.id} // {project.title}</span>

				<ExternalLink size={14} class="text-[#888888] transition-colors group-hover:text-white" />
			</div>

			<!-- Visual Content -->
			<div
				class="relative mb-6 aspect-video w-full border border-[#222222] bg-[#111] transition-colors group-hover:border-[#444444]"
			>
				<!-- Crosshair / Grid lines -->
				<div class="border-grid pointer-events-none absolute inset-0 z-10 opacity-20"></div>

				{#if project.image}
					<img src={project.image} alt={project.title} class="h-full w-full object-cover" />
				{:else}
					<!-- Wireframe Fallback -->
					<div class="absolute inset-0">
						<svg class="h-full w-full text-[#222222]" preserveAspectRatio="none">
							<line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" stroke-width="1" />
							<line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" stroke-width="1" />
							<rect x="25%" y="25%" width="50%" height="50%" fill="none" stroke="currentColor" />
						</svg>
					</div>
				{/if}
			</div>

			<!-- Content -->
			<div>
				<h3 class="mb-2 text-lg font-bold tracking-wide text-white uppercase">{project.title}</h3>
				<p class="font-mono text-sm leading-relaxed text-[#888888]">
					{project.desc}
				</p>
			</div>

			<!-- Tech Stack Badges -->
			{#if project.techStack && project.techStack.length > 0}
				<div class="mt-6 flex flex-wrap gap-2">
					{#each project.techStack as tech}
						<span
							class="border border-[#333333] bg-[#111111] px-2 py-1 text-[10px] font-bold tracking-wider text-[#666666] uppercase transition-colors group-hover:border-[#444444] group-hover:text-[#888888]"
						>
							{tech}
						</span>
					{/each}
				</div>
			{/if}

			<!-- Hover Corner Effect -->
			<div
				class="absolute top-0 right-0 h-2 w-2 border-t border-r border-white opacity-0 transition-opacity group-hover:opacity-100"
			></div>
			<div
				class="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-white opacity-0 transition-opacity group-hover:opacity-100"
			></div>
		</a>
	{/each}
</div>
