import { useState } from "react";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import { Flex, Divider, Button } from "antd";

export function withToggles(WrappedComponent) {
  return function List(props) {
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items;
    const arrow = isOpen ? "⤵" : "⤴";
    return (
      <>
        <Divider>
          <h2 onClick={() => setIsOpen(!isOpen)}>
            {props.title}&nbsp; {arrow}
          </h2>
        </Divider>
        {isOpen && (
          <>
            <WrappedComponent {...props} items={displayItems} />
            <Flex justify="center">
              <Button
                className="btn-action"
                icon={
                  isCollapsed ? <DownCircleOutlined /> : <UpCircleOutlined />
                }
                onClick={() => setIsCollapsed(!isCollapsed)}
                shape="round"
                type="primary"
              >
                {`Show ${isCollapsed ? "All" : "Less"}`}
              </Button>
            </Flex>
          </>
        )}
      </>
    );
  };
}
