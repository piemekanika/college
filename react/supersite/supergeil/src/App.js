import React, { Component } from 'react';
import spinnerImg from './spinner.png';
import './App.css';

// TODO
const hardInterface = (
  <div className='pageContent'>
    <h1>Пока не готово</h1>
  </div>
);

const spinner = (
  <div className='pageContent'>
    <h1>Наведи мышкой чтобы спиннер закрутился</h1>
    <img src={spinnerImg} className='spinner'/>
  </div>
);

const becomeProgrammer = (
  <div className='pageContent' id='helpPage'>
    <h1>Стать программистом</h1>
    <ul>
      <li>
        <h3>Интерактивное онлайн обучение</h3>
        <a href='#'>Codecademy</a><br/>
        <a href='#'>Htmlacademy</a>
      </li>
      <li>
        <h3>Онлайн курсы</h3>
        <a href='#'>Coursera</a><br/>
        <a href='#'>Udemy</a>
      </li>
      <li>
        <h3>Решать задачи</h3>
        <a href='#'>Codewars</a><br/>
        <a href='#'>Проблемы Евклида</a>
      </li>
      <li>
        <h3>Исходный код других разработчиков</h3>
        <a href='#'>Github</a><br/>
        <a href='#'>Bitbucket</a>
      </li>
    </ul>
  </div>
);

const help = (
  <div className='pageContent' id='helpPage'>
    <h1>Lorem ipsum</h1>
    <p className='helpParagraph'><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit. Proin vel libero auctor velit vehicula dictum sed et sapien. Quisque ac sagittis enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus mauris nibh, facilisis in maximus nec, vulputate et lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc faucibus arcu sed tortor viverra bibendum. Nunc eros purus, malesuada ac purus et, efficitur rhoncus magna. Aenean interdum efficitur facilisis. Donec nec felis vestibulum sem luctus bibendum. </p>
    <p className='helpParagraph'><strong>Duis bibendum vel sapien vel lobortis.</strong> Proin in dui a libero iaculis aliquet id placerat dui. Etiam magna enim, posuere id consequat aliquet, feugiat eget dolor. Phasellus vel ligula non diam molestie dignissim. Morbi dignissim metus sit amet magna sollicitudin scelerisque. Nam tempus ligula eget dui posuere, nec egestas turpis lacinia. Aenean dignissim risus vel libero hendrerit condimentum. Nulla vitae eros enim. </p>
    <p className='helpParagraph'><strong>Curabitur non metus ac mauris ultrices convallis.</strong> Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam luctus felis a tortor aliquam dictum. Donec justo enim, fringilla ac accumsan sit amet, iaculis vel purus. Aliquam et mollis urna, ut faucibus nunc. Nunc euismod nibh sodales est gravida, id suscipit dui facilisis. Curabitur tincidunt, ligula ac suscipit pulvinar, justo massa consectetur nisl, sed feugiat massa ex vel lorem. Aenean viverra erat nec eros tempus tempor. Duis imperdiet felis quis quam hendrerit, in varius risus ornare. Curabitur non odio nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis egestas tortor vel sapien tristique varius. Phasellus dictum ultrices tortor, ac ornare metus hendrerit at. Suspendisse fringilla tortor ut urna tempor tempor. Fusce sit amet felis at felis placerat gravida at vel dolor. Fusce maximus velit mauris, nec vulputate ex aliquam in. </p>
  </div>
);

// const vegan = (
//   <div className='pageContent'>
//     <h1>Быть веганом</h1>
//     <div className = 'veganDays'>{this.state.days}</div><br/>
//     <button className='PlusOneButton' onClick={(e) => this.setState({page: this.state.page, days: this.state.days + 1})}>
//       накинуть денёк
//     </button>
//   </div>
// );
const vegan = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: help, days: 0};

    this.vegan = (
      <div className='pageContent'>
        <h1>Быть веганом</h1>
        <div className = 'veganDays'>{this.state.days}</div><br/>
        <button className='PlusOneButton' onClick={(e) => this.setState({page: this.state.page, days: this.state.days + 1})}>
          накинуть денёк
        </button>
      </div>
    );
  }

  handleClickMenuItem(newPage) {
    this.setState(() => ({
      page: newPage,
      days: this.state.days
    }));
  }

  giveMeThePagePlease() {
    switch(this.state.page) {
      case vegan: return (
        <div className='pageContent'>
        <h1>Быть веганом</h1>
        <div className = 'veganDays'>{this.state.days}</div><br/>
        <button className='PlusOneButton' onClick={(e) => this.setState({page: this.state.page, days: this.state.days + 1})}>
          накинуть денёк
        </button>
      </div>
      );
      case hardInterface: return hardInterface;
      case spinner: return spinner;
      case becomeProgrammer: return becomeProgrammer;
      case help: return help;
    }
    return help;
  }

  render() {
    

    const menu = (
      <div className='menu'>
        <a onClick={(e) => this.handleClickMenuItem(hardInterface)} className='menuItem'>Очень сложный интерфейс</a>
        <a onClick={(e) => this.handleClickMenuItem(spinner)} className='menuItem'>Крутить спинер</a>
        <a onClick={(e) => this.handleClickMenuItem(vegan)} className='menuItem'>Быть веганом</a>
        <a onClick={(e) => this.handleClickMenuItem(becomeProgrammer)} className='menuItem'>Стать программистом</a>
        <a onClick={(e) => this.handleClickMenuItem(help)} className='menuItemRight'>???</a>
      </div>
    );

    return (
      <div className="App">
        {menu}
        {/* {this.state.page}  */}
        {this.giveMeThePagePlease()} 
      </div>
    );
  }
}

export default App;
