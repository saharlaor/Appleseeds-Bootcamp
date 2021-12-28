import React, { useEffect, useState } from "react";
import swapi from "../../api/swapi";
import axios from "axios";
import "./FetchButton.css";

function FetchButton() {
  const [fetching, setFetching] = useState(false);
  const [content, setContent] = useState("");
  const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    if (fetching) {
      (async () => {
        console.log("a");
        try {
          const {
            data: { title, director },
          } = await swapi.get("", {
            cancelToken: cancelToken.token,
          });
          console.log(`title`, title);
          console.log(`director`, director);
          setContent(`${title}, ${director}`);
        } catch (err) {
          if (axios.isCancel(err)) return;
        }
      })();
    } else {
      setContent("");
    }
    return () => {
      cancelToken.cancel();
    };
  }, [fetching, cancelToken]);

  const handleFetch = () => {
    setFetching((prevFetching) => !prevFetching);
  };

  return (
    <div className="FetchButton">
      <button onClick={handleFetch}>{fetching ? "hide" : "Fetch"}</button>
      {fetching && <div className="content">{content}</div>}
    </div>
  );
}

export default FetchButton;
