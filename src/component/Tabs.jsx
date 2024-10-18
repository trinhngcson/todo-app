import React from "react";

export const Tabs = (props) => {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["ALL", "OPEN", "COMPLETE"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "ALL"
            ? todos.length
            : tab === "OPEN"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            key={tabIndex}
            className={
              "tab-button" + (tab === selectedTab ? "tab-selected" : "")
            }
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
};
