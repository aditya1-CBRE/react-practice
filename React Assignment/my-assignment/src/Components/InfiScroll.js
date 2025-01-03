import { useState } from "react";
import React from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    border: "2px solid black",
    margin: 12,
    padding: 8,
  };
  
function InfiScroll() {
    const [dataSource, setDataSource] = useState(Array.from({ length: 20 }));

    const [hasMore, setHasMore] = useState(true);
  
    const fetchMoreData = () => {
      if(dataSource.length<200){
        setTimeout(() => {
          // we have to make api calls here
          setDataSource(dataSource.concat(Array.from({ length: 20 })));
        }, 2000);
      }
      else{
        setHasMore(false);
      }
      
      
    };
  
    return (
      <div className="MainDiv">
        <p>Title : InfiniteScroll</p>
        {/* <MovieList /> */}
        <InfiniteScroll
          dataLength={dataSource.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<p>loading....</p>}
          endMessage={<p>End Of Records</p>}
          height={500}
        >
          {dataSource.map((item, index) => {
            return (
              <div style={style}>
                This is a div #{index + 1} in InfiniteScroll
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    );
  }

export default InfiScroll;
