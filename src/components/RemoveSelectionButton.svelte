<script>
	import Close from '../icons/Close.svelte';
	import { mapState, selectedAreaState } from '../state.svelte';

	const onRemove = () => {
		selectedAreaState.selected = null;
		selectedAreaState.type = null;
		selectedAreaState.policies = null;
		selectedAreaState.data = null;
		if (selectedAreaState.radius) {
			delete selectedAreaState.radius;
		}
	};
</script>

<button
	class={['RemoveSelectionButton', { invisible: !selectedAreaState.selected }]}
	onclick={onRemove}
>
	<div class={['RemoveSelectionButton-text', { invisible: !selectedAreaState.selected }]}>
		Remove selection
	</div>
	<div class={['RemoveSelectionButton-icon', { invisible: !selectedAreaState.selected }]}>
		<Close />
	</div>
</button>

<style lang="scss">
	.RemoveSelectionButton {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		cursor: pointer;

		&:focus {
			.RemoveSelectionButton-text {
				color: var(--support-gray-1-hover);
			}

			:global(svg path) {
				fill: var(--support-gray-1-hover);
			}
		}

		&.invisible {
			pointer-events: none;
		}

		&-text {
			color: var(--white);
			font-size: var(--font-size-ms);

			&.invisible {
				color: transparent !important;
			}
		}

		&-icon {
			height: 0.75rem;
			width: 0.75rem;
			display: flex;
			align-items: center;
			justify-content: center;

			:global(svg) {
				height: 100%;
				width: 100%;

				:global(path) {
					fill: var(--white);
				}
			}

			&.invisible {
				:global(svg path) {
					fill: transparent;
				}
			}
		}
	}
</style>
