import { createGlobalStyle } from 'styled-components';
import font from '../../font/210옴니고딕030.ttf';

const Font = createGlobalStyle`
  @font-face {
     font-family: '210옴니고딕030';
     src: url(${font}) format('truetype');
  }
  * {
    font-family: '210옴니고딕030';
    color: #00b46a;
  }
`
export default Font;