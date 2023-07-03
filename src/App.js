// import './App.css';
import { Component } from 'react';
import BlogHomePageCard from './BlogCard';
import { isArrayEmpty as isMyArrayEmpty } from './utils';

class App extends Component {
  state = {
    showBlogs: true,
    blogArr: [
      {
        id: 1,
        title: 'Blog Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.',
        likeCount: 0
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.',
        likeCount: 0
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci numquam laborum vitae beatae molestias quia praesentium nihil illum labore et, consequuntur nesciunt optio expedita laboriosam voluptas ducimus aliquid eligendi enim.',
        likeCount: 0
      }
    ]
  }

  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount += 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});

    console.log(updatedBlogObj);
  }

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.state.showBlogs)
  }

  render(){
    console.log('Render Called');
    console.log(this.state);

    
    const blogCards = isMyArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
      // console.log(item);

      return (
        <BlogHomePageCard className='Blog' key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)}/>
        // <div className = "BlogCard" key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.description}</p>
        // </div>
      );
    });

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? blogCards : null}
      </div>
    );
  }
}

export default App;
