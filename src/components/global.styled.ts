import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer&family=Overpass&display=swap');

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Overpass', sans-serif;
    background: #f9f9f9;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4 {
    text-align: center;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p, li, ul {
    line-height: 1.5;
    font-size: 1.1rem;
  }

  * {
    box-sizing: border-box;
  }

  pre {
    overflow-x: scroll;
  }

  /* Using !important here to override the default Instantsearch styles */
  mark {
    background-color: yellow !important;
    color: black !important;
  }

  /* The search box uses these classes for styling. */
  /* Overriding default styles can get ugly so we sometimes have to use !important */

  .ais-RangeInput-form {
    display: inline !important;
  }

  .ais-SortBy {
    flex-grow: 1;
  }

  .ais-CurrentRefinements {
    margin-bottom: 20px;
  }

  .ais-CurrentRefinements-list {
    display: flex !important;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .ais-CurrentRefinements--noRefinement {
    height: 0;
    margin: 0;
    padding: 0;
  }

  .ais-CurrentRefinements-item {
    margin: auto;
    padding: 5px;
  }

  .ais-CurrentRefinements-label {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 800px) {
    .ais-SearchBox {
      flex-grow: 1;
    }
  }
`

export default GlobalStyle
