import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0% {
    transform: translateY(6px) rotate(1deg);
  }
  50% {
    transform: translateY(0) rotate(-1deg);
  }
  100% {
    transform: translateY(6px) rotate(1deg);
  }
`
const fill = keyframes`
  0% {
    fill: rgba(255, 255, 255, 0.8)
  }
  75% {
    fill: transparent;
  }
  100% {
    fill: rgba(255, 255, 255, 0.8)
  }
`
const Svg = styled.svg`
  width: 150px;
  height: 150px;
  animation-name: ${bounce};
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`
const Group = styled.g`
  fill: rgba(255, 255, 255, 0.8);
  animation-name: ${fill};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`

export default function NotFoundSVG() {
  return(
    <Svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880.000000 920.000000" 
    preserveAspectRatio="xMidYMid meet">

      <Group transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)" stroke="none">

        <path d="M4080 8779 c-1946 -158 -3504 -1713 -3660 -3653 -5 -71 -10 -142 -10
        -157 l0 -29 3995 0 c3884 0 3995 1 3995 19 0 104 -45 491 -73 626 l-13 60
        -812 3 -812 2 0 145 0 145 285 0 285 0 0 140 0 140 -570 0 -570 0 0 145 0 145
        430 0 430 0 0 140 0 139 -142 3 -143 3 -3 143 -3 142 -284 0 -285 0 0 140 0
        139 143 3 142 3 3 143 3 142 -291 0 -291 0 3 143 3 142 143 3 142 3 0 230 0
        230 -77 36 c-399 183 -852 299 -1333 343 -133 12 -477 11 -630 -1z m-925 -861
        c440 -66 815 -406 924 -836 131 -516 -98 -1038 -569 -1295 -313 -171 -728
        -175 -1054 -10 -414 210 -667 673 -618 1130 72 660 659 1111 1317 1011z"/>

        <path d="M414 4543 c90 -1431 951 -2715 2241 -3339 787 -380 1614 -491 2488
        -333 l117 22 0 98 0 99 -140 0 -140 0 0 140 0 140 425 0 424 0 3 143 3 142
        143 3 142 3 0 139 0 140 430 0 430 0 0 145 0 145 140 0 140 0 0 140 0 140
        -285 0 -285 0 0 145 0 145 -430 0 -430 0 0 140 0 140 288 2 287 3 3 143 3 142
        569 0 570 0 0 140 0 140 -285 0 -285 0 0 145 0 145 664 0 c366 0 667 3 670 8
        19 31 85 553 86 680 l0 22 -3996 0 -3996 0 6 -107z"/>

      </Group>
    </Svg>
  )
}