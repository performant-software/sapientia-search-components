import styled from 'styled-components'

export const SearchDiv = styled.div`
padding: 10px;

.search {
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 10px;
}

.currentRefinementList {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0 0 10px 0;
  padding: 0;
}

.ais-RefinementList-labelText {
  max-width: 260px;
}

.currentRefinement {
  background: #eee;
  border: none;
  border-radius: 5px;
  padding: 4px;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
  transition: 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-size: 1rem;
  line-height: 1;
}

.currentRefinementLabel {
  padding: 5px;
}

.currentRefinement button {
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: none;
  background-color: #e0e0e0;
  padding: 5px;
}

.currentRefinement button:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}

.currentRefinement button svg {
  height: 16px;
  width: 16px;
}

.currentRefinementValue {
  color: #5a5e9a;
}

.hitList {
  margin: 0;
  padding: 0;
}

.hit {
  width: 100%;
  max-height: 380px;
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background: #eee;
  margin-bottom: 30px;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
  border-radius: 5px;
  transition: background-color 0.2s;
  gap: 4px;
}

.hit svg {
  height: 18px;
  width: 18px;
}

.hit svg:hover {
  cursor: help;
}

.hit p {
  font-size: 1rem;
  margin: 0;
}

.hit h2, .hit h3 {
  margin: 0;
  text-align: left;
  width: 100%;
}

.hit .right {
  overflow: hidden;
  position: relative;
  padding: 20px;
  border-left: 1px solid black;
}

.hitData {
  display: flex;
  gap: 8px;
}

.hitLink:hover .hit {
  background-color: rgba(0, 0, 0, 0.1);
}

.date {
  font-size: 0.8rem;
}

.box {
  background: #eee;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);
}

.box h2 {
  text-align: center;
}

.boxClickable:hover {
  cursor: pointer;
}

.sliderValues {
  display: flex;
  justify-content: space-between;
}

.filterButton {
  display: none;
}

.dateSlider {
  margin: 20px 0;
}

.header {
  text-transform: uppercase;
  color: #5a5e9a;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
}

.boxHeader {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: none;
  border: none;
}

.boxHeader svg {
  height: 16px;
  width: 16px;
}

.boxHeader:hover {
  cursor: pointer;
}

.hiddenPanelContent {
  visibility: hidden;
  height: 0;
}

.center {
  text-align: center;
}

@media (max-width: 800px) {
  .search {
      display: initial;
  }

  .filters {
      position: absolute;
      background: #aaa;
      padding: 20px;
      width: 100vw;
      transform: translateX(-120vw);
      transition: transform 0.3s;
      left: 0;
      z-index: 1000;
  }

  .filterButton {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border: none;
      background: #aaa;
      border-radius: 10px;
  }

  .filterButton:hover {
      cursor: pointer;
  }

  .filterButton svg {
      height: 30px;
      width: 30px;
  }

  .hit {
      margin-right: auto;
      margin-left: auto;
      overflow: hidden;
      display: flex;
      flex-flow: column;
  }

  .mainPanel {
      max-width: 100vw;
  }

  .mobileFilterToggle {
      display: initial;
  }

  .searchPanel div {
      display: flex;
      flex-flow: row;
      gap: 10px;
    }

  /* This is the search box */
  .searchPanel div div {
      width: 50%;
  }

  .hit p {
      font-size: 0.75rem;
  }

  .hit .right {
      mask-image: linear-gradient(180deg, #000 60%, transparent);
      border: none;
      padding: 0;
  }

  .headline {
      font-size: 1.2rem;
      display: flex;
      flex-flow: row-reverse;
  }
}

`
