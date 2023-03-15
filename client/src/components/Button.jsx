import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

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
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `}
    `;
  }}
`;

const sizes = {
  large: {
    height: '1rem',
    fontSize: '1.25rem',
  },
  medium: {
    height: '300px',
    fontSize: '1rem',
  },
  small: {
    height: '1.75rem',
    fontSize: '0.875rem',
  },
};

const sizeStyles = css`
  ${({ size }) => css`
    height: ${sizes[size].height};
    font-size: ${sizes[size].fontSize};
  `}
`;

const GroupStyle = css`
  ${(props) =>
    props.group &&
    css`
      width: 100%;

      justify-content: center;
      & + & {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;
// const StyleGroupButton = styled.groupbutton`
// margin-top100px`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: flex;
  outline: none;
  border: none;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  ${sizeStyles}

  /* 색상 */
  ${colorStyles}

  /* 기타 */
  & + & {
    margin-left: 1rem;
  }

  ${GroupStyle}
`;

function Button({ children, color, size, outline, Group, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      Group={Group}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default Button;

// import React from 'react';
// import styled, { css, keyframes } from 'styled-components';
// import { darken, lighten } from 'polished';

// const boxColors = {
//   s: '#2172b2',
//   ss: '#fdb810',
//   sss: '#0d905d',
//   default: '#7b7575',
// };

// const onEventAnimation = (color) => keyframes`
//     30%, 70% {
//       box-shadow: 0rem 0.2rem 1.2rem -0.1rem ${lighten(0.05, color)};
//     }
// `;

// const BoxButton = styled.button`
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   justify-content: center;
//   height: 10rem;
//   padding: 6rem;
//   color: #fff;
//   font-size: 1.6rem;
//   font-weight: 700;
//   border: 0;
//   border-radius: 0.5rem;
//   margin-top: 100px;

//   ${(props) => {
//     const color = boxColors[props.name] || boxColors['default'];

//     const eventStyle = () => {
//       if (props.event) {
//         return css`
//           grid-column: 1 / 4;
//           /* order: -1; */
//           animation: ${onEventAnimation(color)} 3s infinite;
//         `;
//       }
//     };

//     return css`
//       background-color: ${color};

//       &:hover {
//         cursor: pointer;
//         background-color: ${darken(0.05, color)};
//       }

//       &:disabled {
//         color: #999;
//         background-color: #c0c0c0;
//         cursor: not-allowed;
//       }

//       ${eventStyle};
//     `;
//   }}

//   span {
//     display: inline-block;
//     margin: 0.4rem 0 0;
//     font-size: 80%;
//     font-weight: normal;
//   }
// `;

// function Button({ children, ...rest }) {
//   return <BoxButton {...rest}>{children}</BoxButton>;
// }

// // 메인페이지에서 내려준 props도 가져올건데
// // 추후에 disabled 등의 props가 추가될 수도 있으므로 ...rest 형태로 가져옴

// export default  Button;
