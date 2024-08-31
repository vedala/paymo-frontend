import React, { ReactElement, useState } from "react";
import TabTitle, { Props as TabTitleProps } from "./TabTitle";
import styles from "./tabs.module.css";

type Props = {
  children: ReactElement<TabTitleProps>[];
  preSelectedTabIndex?: number;
};

const Tabs = (props: Props) => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState(preSelectedTabIndex || 0);

  return (
    <div className={styles.tabs}>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>
      {children[selectedTabIndex]}
    </div>
  );
};

export default Tabs;
