/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import "./styles.css";
import Pagination from "../components/Pagination";
import { usersDispatcher } from "../states/users/actions";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { reposDispatcher } from "../states/repositories/actions";

const Home = ({ state, getUser, getRepo }) => {
    console.log("🚀 ~ file: Home.jsx:6 ~ Home ~ props:", import.meta.env.GIT_ENV);

  const [search, setSearch] = useState("eko");
  const [type, setType] = useState("users");

  useEffect(() => {
    if (type === "users") {
      getUser({
        query: search,
        page: 1,
      });
    } else {
      getRepo({
        query: search,
        page: 1,
      });
    }
  }, [search, getUser, type, getRepo]);

  const { loading: loadingUser, users } = state?.userReducer;
  const { loading: loadingRepo, repositories } = state?.repositoryReducer;
  console.log("🚀 ~ file: Home.jsx:33 ~ Home ~ state?.userReducer:", state);

  const items = useMemo(() => {
    let arr = [];
    if (type === "users") {
      if (users?.items?.length > 0) {
        arr = users?.items;
      }
    } else {
      if (repositories?.items?.length > 0) {
        arr = repositories?.items;
      }
    }
    return arr;
  }, [users, repositories, type]);

  return (
    <div>
      <Header
        onChange={(e) => setSearch(e.target.value)}
        search={search}
        setType={setType}
      />
      {(loadingUser || loadingRepo) && <Loader />}
      <div className="grid">
        {items.map((obj) => {
          return (
            <article key={obj?.id}>
              <div className="text">
                {type === "users" && (
                  <img className="ava" src={obj?.avatar_url} alt={obj?.login} />
                )}
                <h3>{type === "users" ? obj?.login : obj?.full_name}</h3>
                {type === "repositories" && <p>watchers: {obj?.watchers}</p>}
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
    getRepo: reposDispatcher(dispatch),
  };
};

const HomePage = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomePage;
