import React, { Component, useState, useEffect } from "react";
import Layout from "../components/Layout";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch("/api/getList")
      .then((res) => res.json())
      .then((list) => this.setState({ list }));
  };

  render() {
    const { list } = this.state;

    return (
      <Layout>
        <div className="App">
          <h1>List of Items</h1>
          {/* Check to see if any items are found*/}
          {list.length ? (
            <div>
              {/* Render the list of items */}
              {list.map((item) => {
                return <div>{item}</div>;
              })}
            </div>
          ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

export default List;

///////////////// Functional Component

// function List() {
//   const [list] = useState(0);

//   // Retrieves the list of items from the Express app
//   const getList = () => {
//     fetch("/api/getList")
//       .then((res) => res.json())
//       .then((list) => useState(list));
//   };

//   useEffect(() => {
//     getList();
//   }, []);

//   return (
//     <div className="App">
//       <h1>List of Items</h1>
//       {/* Check to see if any items are found*/}
//       {list.length ? (
//         <div>
//           {/* Render the list of items */}
//           {list.map((item) => {
//             return <div>{item}</div>;
//           })}
//         </div>
//       ) : (
//         <div>
//           <h2>No List Items Found</h2>
//         </div>
//       )}
//     </div>
//   );
// }

// export default List;
