import React, { Component, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar, MainContainer } from "./";
import { firestore, auth } from "../firebase";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Slack(props) {
  const { history } = props;
  const [channels, setChannels] = useState([]);
  const [currentChannel, setCurrentChannel] = useState({});
  const query = useQuery();
  const channelId = query.get("id");
  useEffect(() => {
    firestore
      .collection("channels")
      .where("members", "array-contains", auth.currentUser.uid)
      .get()
      .then((snapshot) => {
        const channels = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setChannels(channels);
        if (!channelId) {
          history.push({
            pathname: "/",
            search: `?id=${channels[0].id}`,
          });

          setCurrentChannel(channels[0]);
        } else {
          const filteredChannel = channels.filter((ch) => ch.id === channelId);
          setCurrentChannel(filteredChannel[0]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [channelId]);

  return (
    <div id="slack">
      <Sidebar channels={channels} />
      <MainContainer channel={currentChannel} />
    </div>
  );
}
export default Slack;
