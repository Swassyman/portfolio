<script lang="ts">
	import { Github, LayoutGrid } from 'lucide-svelte';
	import { isSidebarOpen } from '$lib/stores/ui';
</script>

<header
	class="relative z-40 flex items-center justify-end px-12 py-6 font-mono text-xs tracking-widest"
>
	<nav class="flex items-center gap-8 text-[#888888]">
		<a href="/" class="transition-colors hover:text-white">01. IDENTITY</a>
		<a href="/projects" class="transition-colors hover:text-white">02. PROJECTS</a>
		<a href="/contact" class="transition-colors hover:text-white">03. CONTACT</a>
	</nav>

	<div class="ml-8 flex items-center gap-4 border-l border-[#333333] pl-8">
		<button
			onclick={() => isSidebarOpen.update((v) => !v)}
			class="flex h-8 w-8 cursor-pointer items-center justify-center bg-[#1a1a1a] text-[#888888] transition-colors hover:text-white"
		>
			<Github size={16} />
		</button>
	</div>
</header>
