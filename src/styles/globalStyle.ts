import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
.notosanskr * { 
 font-family: 'Noto Sans KR';
}

#root, body, html {
    max-width: 43rem;
    height: 100vh;
    margin: 0 auto;
    overflow-y: auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
}

#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
  
* {
    box-sizing: border-box;
}
    
`;

export default GlobalStyle;
