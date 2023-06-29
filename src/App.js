import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';

function App() {

  const blogArr = [
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

  const blogCards = blogArr.map((item, pos) => {
    console.log(item);

    return (
      <BlogCard key={pos}/>
      // <div className = "BlogCard" key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    );
  });

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;
