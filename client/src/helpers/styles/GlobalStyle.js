import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
    /* global color */
	--dark-navy: #020d1f;
    --navy: #0a192f;
	--navy-shadow: rgba(2, 12, 27, 0.7);
    --light-navy: #172a45;
    --lightest-navy: #303C55;
    --lightestest-navy: #5b6e94;
    --lightestestest-navy: #7c95c7;
	--dark-steel: #727b95;
	--steel: #848ead;
    --light-steel: #a4afce;
    --lightest-steel: #d0dbff;
    --lightestest-steel: #dfe6ff;
    --white: #eaf3ff;
    --whiter: #edf0f7;
    --bright-white: #f7fbff;
    --brightest-white: #fdfeff;
	--lightest-teal: #e6fff6;
	--light-teal: #afffe4;
    --teal: #64FAC8;
    --dark-teal: #14cc8f;
    --darkest-teal: #12a171;
    --teal-tint: rgba(100, 250, 200, 0.1);
	--lightest-plum: #ffe8ff;
    --lighter-plum: #ffd3ff;
	--light-plum: #ffafff;
    --plum: #f564fa;
    --dark-plum: #bd14cc;
    --darkest-plum: #9c12a1;
    --teal-tint: rgba(245, 100, 250, 0.1);
	--light-reddish: #ffa2a2;
	--reddish: #fa6464;
    --dark-reddish: #d65858;
    --darkest-reddish: #aa4545;
    --teal-tint: rgba(250, 100, 100, 0.1);
    --light-bluish: #a3b1ff;
    --bluish: #647afa;
    --dark-bluish: #5669d6;
    --darkest-bluish: #4756ad;
    --teal-tint: rgba(100, 122, 250, 0.1);

	/* global font-size */
	--ft-xs: 0.75rem;
    --ft-sm: 0.875rem;
    --ft-xsm: 0.94rem;
    --ft-md: 1rem;
    --ft-lg: 1.125rem;
    --ft-xl: 1.25rem;
    --ft-xxl: 1.5rem;
    --ft-sm-heading: 1.75rem;
    --ft-heading: 2rem;
    --ft-lg-heading: 3rem;
    --ft-lgest-heading: 3.5rem;
    --ft-xl-heading: 4rem;

    /* animation */
	--easing: cubic-bezier(0.65, 0, 0.35, 1);
    --transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
    --transition-long: all 1s cubic-bezier(0.65, 0, 0.35, 1);
    }

    html {
		box-sizing: border-box;
		position: relative;
		width: 100%;
	}
	
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	html, body, #root {
		height: 100%;
	}

	body {
		margin: 0;
		padding: 0;
		width: 100%;
    }

    a {
		display: inline-block;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
	}

    input {
		display: inline-block;
		border: 0;
		outline: 0;
	}

	p, h1, h2, h3, h4, h5, h6 {
		margin: 0;
		padding: 0;
	}

	ul, ol {
		margin: 0 auto;
        list-style: none;
	}

	div {
		box-sizing: inherit;
	}
`;

export default GlobalStyle;