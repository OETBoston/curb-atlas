<script>
	import Check from '../icons/Check.svelte';

	let { label, value, setValue } = $props();
</script>

<button class="Checkbox" onclick={setValue}>
	<div class="checkbox-box">
		{#if value}
			<Check />
		{/if}
	</div>

	{#if label}
		<div class="checkbox-label">{label}</div>
	{/if}
</button>

<style lang="scss">
	.Checkbox {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		cursor: pointer;
		width: fit-content;

		&:focus {
			.checkbox-box {
				background-color: var(--support-gray-3);
			}
		}
	}

	.checkbox-label {
		font-family: var(--primary-font);
		font-size: var(--font-size-ms);
		font-weight: var(--font-weight-medium);
		color: var(--white);
	}

	.checkbox-box {
		width: 0.75rem;
		height: 0.75rem;
		background-color: var(--white);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;

		:global(svg) {
			width: 0.5rem;
			height: 0.5rem;

			:global(path) {
				stroke: var(--charles-blue);
			}
		}
	}
</style>
