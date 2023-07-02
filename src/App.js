// import './App.css';
import { Component } from 'react';
import BlogHomePageCard from './BlogCard';
import { isArrayEmpty as isMyArrayEmpty } from './utils';

class App extends Component {
  state = {
    showBlogs: true
  }

  blogArr = [
    {
      id: 1,
      title: 'Blog Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.'
    },
    {
      id: 2,
      title: 'Blog Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.'
    },
    {
      id: 3,
      title: 'Blog Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.'
    }
  ];

  blogCards = isMyArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item, pos) => {
    // console.log(item);

    return (
      <BlogHomePageCard className='Blog' key={pos} title={item.title} description={item.description} id={item.id}/>
      // <div className = "BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    );
  });

  onHideBtnClick = () => {
    let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.state.showBlogs)
  }

  render(){
    console.log('Render Called');
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? this.blogCards : null}
      </div>
    );
  }
}

export default App;
