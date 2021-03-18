import styled from "styled-components";

import { darken } from "polished";

export const Wrapper = styled.div`
	height: 100%;
	overflow-y: auto;
	background: #c94b4b;
	background: linear-gradient(-30deg, #4b134f, #c94b4b);

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 15px 0;
`;

export const Content = styled.div`
	width: 90%;
	max-width: 330px;
	text-align: center;
	img {
		height: 100px;

		color: #fff;
	}

	form {
		display: flex;
		flex-direction: column;
		margin-top: 30px;

		input {
			background: rgba(0, 0, 0, 0.2);
			border: 0;
			border-radius: 4px;
			height: 44px;
			padding: 0 15px;
			color: #fff;
			margin: 0 0 10px;

			&::placeholder {
				color: rgba(255, 255, 255, 0.7);
			}
		}

		span {
			color: #fff;
			align-self: flex-end;
			margin: 0 0 15px;
		}

		button {
			margin: 5px 0 0;
			height: 44px;
			background: #0070b5;
			font-weight: bold;
			color: #fff;
			border: 0;
			border-radius: 4px;
			font-size: 16px;
			transition: background 0.2s;

			&:hover {
				background: ${darken(0.05, "#0070b5")};
			}
		}

		a {
			color: #fff;
			margin-top: 15px;
			font-size: 1.1rem;
			font-weight: bold;
			opacity: 0.6;

			&:hover {
				opacity: 1;
			}
		}
	}
`;
