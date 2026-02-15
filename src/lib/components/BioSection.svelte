<script lang="ts">
	import { Cpu, Globe, Heart } from 'lucide-svelte';
</script>

<section class="mx-auto max-w-6xl py-20">
	<div class="mb-12 flex items-center gap-4">
		<div class="h-[1px] flex-1 bg-[#333333]"></div>
	</div>

	<div class="grid gap-12 md:grid-cols-2">
		<!-- Who I Am -->
		<div>
			<h3 class="mb-6 flex items-center gap-3 text-xl font-bold text-white uppercase">
				<Cpu class="text-[#FFB86C]" />
				WHO AM I?
			</h3>
			<div class="space-y-4 font-mono text-sm leading-relaxed text-[#888888]">
				<p>
					I'm a computer science student and developer curious about <span class="text-white"
						>how things work under the hood</span
					>. I'm an individual with particularly no special mastery over any trade. You can simply
					call me <span class="text-white">"Jack of all trades, Master of none"</span>.
				</p>
				<p>
					I identify myself as a <span class="text-[#50FA7B]">Game Developer</span> &
					<span class="text-[#FF79C6]">Backend Engineer</span>, I spend my time wondering about game
					mechanics and taking responsibility of doing backend when I can.
				</p>
				<p>
					Currently doing a bit of research on <span class="text-[#8BE9FD]">Image Dehazing</span> and
					methods to improve standard dehazing methods.
				</p>
				<p>
					Managing idk why studios with a bunch of my friends to make fun and well thought games.
					Currently working on
					<span
						class="bg-gradient-to-r bg-clip-text font-bold text-transparent"
						style="background-image: linear-gradient(to right, #ff5555, #ffb86c, #f1fa8c, #50fa7b, #8be9fd, #bd93f9, #ff79c6);"
					>
						Iroshi
					</span> with lots of love poured into it.
				</p>
			</div>
		</div>

		<!-- Experiences -->
		<div>
			<h3 class="mb-6 flex items-center gap-3 text-xl font-bold text-white uppercase">
				<Globe class="text-[#8BE9FD]" />
				EXPERIENCE LOG
			</h3>
			<div class="space-y-6">
				<div class="group border-l border-[#333333] pl-6 transition-colors hover:border-white">
					<div class="mb-1 text-xs text-[#666666]">2024 — PRESENT</div>
					<h4 class="font-bold text-white">Technical Head</h4>
					<p class="text-xs text-[#888888]">Coding Club TKMCE</p>
				</div>
				<div class="group border-l border-[#333333] pl-6 transition-colors hover:border-white">
					<div class="mb-1 text-xs text-[#666666]">2025</div>
					<h4 class="font-bold text-white">Hackathon Winner</h4>
					<p class="text-xs text-[#888888]">Hackade '25 Game Jam by CSI TKMCE</p>
				</div>
				<div class="group border-l border-[#333333] pl-6 transition-colors hover:border-white">
					<div class="mb-1 text-xs text-[#666666]">2025 - PRESENT</div>
					<h4 class="font-bold text-white">Game Director</h4>
					<p class="text-xs text-[#888888]">idk why studios</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Philosophy / Footer Note -->
	<div class="mt-16 border border-[#333333] bg-[#0a0a0a] p-8 text-center">
		<Heart class="mx-auto mb-4 h-6 w-6 text-[#FF5555]" />
		<p class="font-mono text-sm text-[#888888]">"Mmm...monke"</p>
	</div>
</section>
