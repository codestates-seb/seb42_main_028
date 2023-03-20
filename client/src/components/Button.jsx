import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

// 3버튼 css
const colorStyles = css`
	${({ theme, color }) => {
		const selected = theme.palette[color];
		return css`
			background: ${selected};
			&:hover {
				background: ${lighten(0.1, selected)};
			}
			&:active {
				background: ${darken(0.1, selected)};
			}
		`;
	}}
`;

const sizes = {
	medium: {
		height: '18rem',
		fontSize: '1rem',
	},
	small: {
		height: '3rem',
		fontSize: '1.2rem',
	},
};

const sizeStyles = css`
	${({ size }) => css`
		height: ${sizes[size].height};
		font-size: ${sizes[size].fontSize};
	`}
`;

const StyledButton = styled.button`
	/* 3공통 버튼안 스타일 */
	display: flex;
	outline: none;
	border: none;
	border-radius: 15px;
	color: black;
	font-weight: bold;
	cursor: pointer;

	/* 크기 */
	${sizeStyles}

	/* 색상 */
  ${colorStyles}

  기타
  & + & {
		margin-left: 10rem;
	}
`;
function Button({ children, color, size, outline, ...rest }) {
	return (
		<StyledButton color={color} size={size} outline={outline} {...rest}>
			{children}
		</StyledButton>
	);
}

Button.defaultProps = {
	color: 'gray',
	size: 'medium',
};

export default Button;
