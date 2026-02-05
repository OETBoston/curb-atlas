<script>
	import Caret from '../icons/Caret.svelte';
	import Check from '../icons/Check.svelte';
	import { filterState } from '../state.svelte';
	import Checkbox from './Checkbox.svelte';
	import Toggle from './Toggle.svelte';

	const setMinimizeSection = (sectionTitle) => {
		filterState.current = filterState.current.map((s) => {
			if (s?.title === sectionTitle) {
				return { ...s, open: !s.open };
			}
			return s;
		});
	};

	const setCheckbox = (sectionTitle, optionLabel) => {
		filterState.current = filterState.current.map((s) => {
			if (s?.title === sectionTitle) {
				return {
					...s,
					options: s.options.map((o) => {
						if (o?.label === optionLabel) {
							return { ...o, value: !o.value };
						}
						return o;
					})
				};
			}
			return s;
		});
	};
</script>

<div class="Filters">
	{#each filterState.current as curbUseCheckbox}
		<div class="curb-use-section">
			<button class="curb-use-title" onclick={() => setMinimizeSection(curbUseCheckbox?.title)}>
				<div class={['caret', { closed: !curbUseCheckbox?.open }]}><Caret /></div>
				{curbUseCheckbox?.title}
			</button>
			{#if curbUseCheckbox?.open}
				<div class="curb-use-options">
					{#each curbUseCheckbox?.options as option}
						{#if option.type === 'toggle'}
							<Toggle
								label={option?.label}
								value={option?.value}
								onToggle={() => setCheckbox(curbUseCheckbox?.title, option?.label)}
							/>
						{:else}
							<Checkbox
								label={option?.label}
								value={option?.value}
								setValue={() => setCheckbox(curbUseCheckbox?.title, option?.label)}
							/>
						{/if}
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="scss">
	.Filters {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
	}

	.curb-use-section {
		gap: 0.25rem;
		display: flex;
		flex-direction: column;
	}

	.curb-use-title {
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-bold);
		color: var(--white);
		display: flex;
		gap: 0.5rem;
		align-items: center;
		cursor: pointer;

		.caret {
			width: 1rem;
			height: auto;

			&.closed {
				transform: rotate(-90deg);
			}

			:global(svg) {
				width: 100%;
				:global(path) {
					fill: var(--white);
				}
			}
		}
	}

	.curb-use-options {
		gap: 0.5rem;
		display: flex;
		flex-direction: column;
		margin-left: 1.5rem;
	}
</style>
