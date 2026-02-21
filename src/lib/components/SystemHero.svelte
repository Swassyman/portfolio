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
		<!-- CRT TV Frame -->
		<div class="crt-container relative mx-auto w-full max-w-sm">
			<!-- TV Case/Bezel -->
			<div class="relative z-20 border-[16px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_10px_rgba(255,255,255,0.1)] rounded-[2rem]">
				
				<!-- Screen Content -->
				<div class="relative overflow-hidden bg-black rounded-[1rem] aspect-square group">
					<!-- The Image -->
					<img
						src="/profile.jpg"
						alt="Swarag Siby"
						class="h-full w-full object-cover opacity-90"
					/>

					<!-- CRT Glass Reflection -->
					<div class="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
					
					<!-- CRT Scanlines -->
					<div class="crt-scanlines pointer-events-none absolute inset-0 z-20"></div>
					
					<!-- Screen Vignette -->
					<div class="pointer-events-none absolute inset-0 z-10 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)]"></div>
				</div>
			</div>
			
			<!-- TV Stand/Base Shadow -->
			<div class="mx-auto mt-[-10px] h-4 w-3/4 rounded-[100%] bg-black/40 blur-md"></div>
		</div>
	</div>
</section>

<style>
	.text-stroke-white {
		-webkit-text-stroke: 2px white;
	}

	.crt-scanlines {
		background: linear-gradient(
			rgba(18, 16, 16, 0) 50%,
			rgba(0, 0, 0, 0.2) 50%
		);
		background-size: 100% 4px;
	}

	.crt-flicker {
		animation: flicker 0.15s infinite;
	}

	@keyframes flicker {
		0% { opacity: 0.05; }
		5% { opacity: 0.1; }
		10% { opacity: 0.05; }
		15% { opacity: 0.15; }
		20% { opacity: 0.05; }
		100% { opacity: 0.05; }
	}

	/* Optional: Tube Curvature (Slight distortion) */
	.crt-container::after {
		content: "";
		position: absolute;
		top: 16px;
		left: 16px;
		right: 16px;
		bottom: 16px;
		background: radial-gradient(circle, transparent 70%, rgba(0,0,0,0.2) 100%);
		z-index: 25;
		pointer-events: none;
		border-radius: 1rem;
	}
</style>
