import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    :root {
    /* global color */

    /* global font-size */

    /* animation */
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
	}

	div {
		box-sizing: inherit;
	}
`;

export default GlobalStyle;