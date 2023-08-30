/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import Pagination from "../components/Pagination";
import { usersDispatcher } from "../states/users/actions";
import Header from "../components/Header";
import Loader from "../components/Loader";

const Home = ({ state, getUser }) => {
  //   console.log("🚀 ~ file: Home.jsx:6 ~ Home ~ props:", state);

  const [search, setSearch] = useState("eko");
  const [type, setType] = useState("users");

  useEffect(() => {
    getUser({
      query: search,
      page: 1,
    });
  }, [search, getUser]);

  const { loading, users } = state?.userReducer;

  const items = useMemo(() => {
    let arr = [];
    if (users?.items?.length > 0) {
      arr = users?.items;
    }
    return arr;
  }, [users]);

  return (
    <div>
      <Header onChange={(e) => setSearch(e.target.value)} search={search} setType={setType}/>
      {loading && <Loader />}
      <div className="grid">
        {items.map((obj) => {
          return (
            <article key={obj?.id}>
              <div className="text">
                <img className="ava" src={obj?.avatar_url} alt={obj?.login} />
                <h3>{obj?.login}</h3>
                <a href="" className="btn">
                  read more
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <Pagination
        currentPage={1}
        setCurrentPage={() => {}}
        totalPosts={30}
        postPerPage={5}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: usersDispatcher(dispatch),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomePage;
