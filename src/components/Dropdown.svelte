<script>
	import Caret from '../icons/Caret.svelte';
	import Checkbox from './Checkbox.svelte';

	const { options, value, onChange, disabled } = $props();
</script>

<div class="Dropdown">
	<select class={['', { disabled }]} onchange={(e) => onChange(e.target.value)} {value}>
		{#each options as option}
			<option value={option.value}>
				{option.label}
			</option>
		{/each}
	</select>
	<div class={['Dropdown-icon', { disabled }]}>
		<Caret />
	</div>
</div>

<style lang="scss">
	.Dropdown {
		width: 100%;
		display: flex;
		align-items: center;
		position: relative;

		&-icon {
			position: absolute;
			right: 0.5rem;
			pointer-events: none;
			width: 1rem;

			:global(svg) {
				width: 100%;
			}

			&.disabled {
				:global(svg path) {
					fill: var(--support-gray-4);
				}
			}
		}

		select {
			width: 100%;

			appearance: none;
			background: none;
			padding: 0.5em;
			border-radius: 0.5rem;
			cursor: pointer;
			padding-right: 2rem;

			color: var(--charles-blue);
			/* input */
			font-family: var(--primary-font);
			font-size: var(--font-size-ms);
			font-weight: var(--font-weight-medium);

			background-color: var(--white);

			&.disabled {
				color: var(--support-gray-4);
				background-color: var(--support-gray-3);
				pointer-events: none;
			}

			&:focus {
				outline: none;

				background-color: var(--support-gray-1-hover);
			}

			&:hover {
				background-color: var(--support-gray-1-hover);
			}
		}

		option {
			padding-right: 2rem;
		}
	}
</style>
