import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';

const Home = () => {
  return (
    <>
      {/* Removed the unnecessary <div className="wrapper"> */}
      <div className="todos">
        <Header>
          <h1>todos</h1>
          <p>Items will persist in the browser local storage</p>
        </Header>
        <TodosLogic />
      </div>
      {/* Removed the unnecessary closing </div> */}
    </>
  );
};

export default Home;
