<script>
	import BostonLogo from '../images/low_res_boston_logo.png';

	const { onClickInfo } = $props();
</script>

<div class="TopBar">
	<div class="boston-app-title">Boston Curb Map </div>
	<div class="right-container">
		<button class="info-button" onclick={onClickInfo}>info</button>
		<div class="boston-logo">
			<img alt="Boston logo" src={BostonLogo} />
		</div>
	</div>
</div>

<style lang="scss">
	.TopBar {
		padding: 0.5rem 1rem;
		background-color: var(--charles-blue);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.boston-logo {
		width: 1.5rem;
		img {
			width: 100%;
			height: auto;
		}
	}

	.info-button {
		font-family: var(--secondary-font);
		font-size: var(--font-size-l);
		font-weight: var(--font-weight-regular);
		color: var(--white);
		cursor: pointer;

		&:focus {
			color: var(--support-gray-1-hover);
		}

		&:hover {
			color: var(--support-gray-1-hover);
		}
	}

	.right-container {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.boston-app-title {
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		color: var(--white);
		text-transform: uppercase;
	}
</style>
