import React, { useState, useEffect } from "react";
import CardRepository from "../CardRepository/CardRepository";
import InfiniteScroll from "react-infinite-scroll-component";
import {loadRepos} from "../../../redux/actions/_github/reposAction";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

function Repositories(props) {
  const [repositories, setRepositories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { loadRepos,isLoading,repos } = props; 

  useEffect(() => {
    loadRepos(currentPage);
    console.log(isLoading, repos);
    return () => {};
  }, [currentPage]);

  console.log(repos);

  return (
      <div className="container">
      <h1 className="bg-white p-4 shadow-sm text-center font-weight-normal">
        Github repositories
      </h1>
      <hr/>
      {
        repos.data ? 
      <InfiniteScroll
        dataLength={repos.data}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={repos.data < repos.data.totalCount}
        scrollableTarget="scrollableDiv"
      >
        <CardRepository data={repos.data} loader={isLoading} />
      </InfiniteScroll>
      :
      <div className="d-flex justify-content-center"><Loader/></div>
      }
    </div>
  );
}

const mapStateToProps = ({isLoading, repos}) =>  ({ isLoading, repos });

export default connect(mapStateToProps, { loadRepos })(Repositories);
