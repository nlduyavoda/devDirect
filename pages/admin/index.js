"use-client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../Components/Button";
import { Each } from "../Components/Each";
import {
  ButtonMessContent,
  ButtontextContent,
  ParagraphContent,
} from "../Components/PrimaryContent";
import { Right } from "../Components/RightComponent";
import { SplitScreen } from "../Components/SplitScreen";
import { ActionDanger, ActionPrimary } from "../Components/Tag";
import { getList, postMethods } from "./methods";
import { Card } from "../Components/card";

const ACTIONS = ["save", "view", "undo", "redo"];

const Admin = () => {
  const router = useRouter();
  const [meta, setMeta] = useState({
    data: [],
    draggingId: null,
    selectedIds: [],
    editedItem: null,
  });

  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleEditAction = (action) => {
    if (meta.editedItem?.id === action.id) {
      setMeta((prev) => ({
        ...prev,
        editedItem: null,
      }));
    } else {
      setMeta((prev) => ({
        ...prev,
        editedItem: action,
      }));
    }
  };

  const onChangeSource = (e, id, sourceName) => {
    const editedSource = meta.data.map((ele) => {
      if (ele.id === id) {
        return { ...ele, [`${sourceName}`]: e.target.value };
      } else {
        return ele;
      }
    });
    setMeta((prev) => ({ ...prev, data: editedSource }));
  };

  const handleDragStart = (e, id) => {
    e.target.style.opacity = "0.5";
    setMeta((prev) => ({ ...prev, draggingId: id }));
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
    setMeta((prev) => ({ ...prev, draggingId: null }));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const prevData = history[currentIndex - 1];
      setMeta((prev) => ({ ...prev, data: prevData.data }));
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const nextData = history[currentIndex + 1];
      setMeta(nextData);
    }
  };

  const onSave = async () => {
    const res = await postMethods("/api/items", meta.data);
    if (res) {
      setHistory([...history, meta]);
      setCurrentIndex(currentIndex + 1);
      return alert("action is saved !!");
    }
  };

  const handleAction = async (action) => {
    switch (action) {
      case "undo":
        return undo();
      case "redo":
        return redo();
      case "save":
        return onSave();
      default:
        return router.push("/customer");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.style.opacity = "1";

    // Check if the drop occurred inside the specific drop area
    const dropArea = document.getElementById("dropArea");
    const rect = dropArea.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    if (
      x >= rect.left &&
      x <= rect.right &&
      y >= rect.top &&
      y <= rect.bottom
    ) {
      const dropItem = meta.data.find(
        (action) => action.id === meta.draggingId
      );
      setMeta((prev) => ({
        ...prev,
        selectedIds: [...prev.selectedIds, dropItem.id],
      }));
    } else {
      console.log("fail");
    }
  };

  useEffect(() => {
    (async () => {
      const res = await getList("/api/items");
      if (res.data) {
        const newData = { ...meta, data: res.data };
        setMeta(newData);
        setHistory([...history, newData]);
        setCurrentIndex(currentIndex + 1);
      }
    })();
  }, []);

  const selectData = meta.data
    .map((ele) => meta.selectedIds.includes(ele.id) && ele)
    .filter(Boolean);
  const item_ = meta.data.find((ele) => ele.id === meta.editedItem?.id);

  const renderLeftSideAction = (action) => {
    const internalProps = {
      button: ActionDanger,
      paragraph: ActionPrimary,
    };
    const Component = internalProps[action.type];
    return (
      <div
        draggable="true"
        onDragStart={(e) => handleDragStart(e, action.id)}
        onDragEnd={handleDragEnd}
      >
        <Component content={action.label} />
      </div>
    );
  };

  return (
    <SplitScreen leftWidth="20%" rightWidth="80%">
      <div>
        <Each of={meta.data} render={renderLeftSideAction} />
      </div>
      <Right>
        <Each
          of={ACTIONS}
          render={(item, index) => {
            const isDisabled = {
              undo: currentIndex <= 0,
              redo: currentIndex >= history.length - 1,
            };
            return (
              <PrimaryButton
                disabled={isDisabled[item]}
                key={index}
                onClick={() => handleAction(item)}
                text={item}
              />
            );
          }}
        />
        <DropAreaStyled
          id="dropArea"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {selectData.length > 0 ? (
            <Each
              of={selectData}
              render={(item) => (
                <Card {...item} onClick={() => handleEditAction(item)} />
              )}
            />
          ) : (
            <div>Drop here !</div>
          )}
        </DropAreaStyled>
        <div>
          {item_?.type === "button" && (
            <>
              <ButtontextContent
                value={item_.text}
                onChange={(e) => onChangeSource(e, item_.id, "text")}
              />
              <ButtonMessContent
                value={item_.alerMess}
                onChange={(e) => onChangeSource(e, item_.id, "alerMess")}
              />
            </>
          )}
          {item_?.type === "paragraph" && (
            <ParagraphContent
              value={item_.content}
              onChange={(e) => onChangeSource(e, item_.id, "content")}
            />
          )}
        </div>
      </Right>
    </SplitScreen>
  );
};

export default Admin;

export const DropAreaStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`;
