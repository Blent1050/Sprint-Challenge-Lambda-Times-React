import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({ selected: tab})
  };

  filterCards = () => {
    if(this.state.selected === 'all'){
      return cardData;
    }else{
     const selectedCards = this.state.cards.filter(card => card.tab === this.state.selected);
     return selectedCards;
    }
  };

  render() {
    return (
      <div className="content-container">
        <Tabs selectedTab={this.state.selected} selectTabHandler={this.changeSelected} tabs={this.state.tabs} />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
