"use client";

import { removeItemQueue } from "@/redux/playControlSlice";
import { RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function PlayBar() {
  const queeu = useSelector((state: RootState) => state.playControl.queue);
  const playingItem = useSelector(
    (state: RootState) => state.playControl.playingItem
  );
  const dispatch = useDispatch();

  const handleRemoveItem = (index: number) => {
    dispatch(removeItemQueue(index));
  };
  return (
    <div className="m-5">
      <h1>Queue</h1>

      {playingItem && (
        <div>
          <p>Now playing</p>
          {playingItem?.title}
        </div>
      )}

      <div>
        <p>Following</p>
        <div className="flex flex-col-reverse">
          {queeu &&
            queeu.map((item, index) => (
              <div key={index}>
                {item.title}
                <div onClick={() => handleRemoveItem(index)}>
                  <span className="material-symbols-outlined">close</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PlayBar;
