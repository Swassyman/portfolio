<script lang="ts">
	import { Play, Terminal, Shuffle } from 'lucide-svelte';
</script>

<section class="mx-auto grid max-w-6xl gap-12 pt-20 pb-32 md:grid-cols-[1.5fr_1fr] md:items-center">
	<div>
		<h1 class="mb-8 text-6xl leading-tight font-bold tracking-tighter text-white md:text-8xl">
			SWARAG SIBY<br />
			<span class="text-stroke-white relative text-transparent">
				B.TECH CSE
				<span class="absolute inset-0 text-white opacity-50 blur-sm">B.TECH CSE</span>
			</span>
		</h1>

		<div class="mb-12 max-w-2xl text-lg leading-relaxed text-[#888888]">
			<p>
				I am a <strong class="border-b border-white pb-0.5 text-white">Game Developer</strong> specializing
				in backend systems and image processing. Building quirky games and fun projects while I can.
			</p>
		</div>

		<div class="flex gap-6">
			<!-- Link to /projects using standard anchor tag for now, or sveltekit goto if preferred, but existing code used anchors or buttons -->
			<a
				href="/projects"
				class="flex items-center gap-3 bg-white px-6 py-3 text-sm font-bold tracking-wider text-black uppercase transition-colors hover:bg-[#D4D4D8]"
			>
				<Terminal size={16} />
				View Projects
			</a>
		</div>
	</div>

	<div class="relative hidden md:block">
		<!-- Decorative Elements -->
		<div class="absolute -top-4 -right-4 h-24 w-24 border-t-2 border-r-2 border-[#FFB86C]"></div>
		<div class="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-[#50FA7B]"></div>

		<!-- Image Container -->
		<div class="relative grayscale transition-all duration-500 hover:grayscale-0">
			<!-- Scanline Overlay -->
			<div
				class="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]"
				style="background-size: 100% 2px, 3px 100%;"
			></div>

			<img
				src="/profile.jpg"
				alt="Swarag Siby"
				class="w-full border border-[#333333] bg-[#0a0a0a] object-cover shadow-2xl"
			/>
		</div>
	</div>
</section>

<style>
	.text-stroke-white {
		-webkit-text-stroke: 2px white;
	}
</style>
