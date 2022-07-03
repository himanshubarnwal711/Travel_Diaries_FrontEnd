import React, { useRef } from "react";
import { createPortal } from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const nodeRef = useRef(null);
  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside ref={nodeRef} className="side-drawer">
        {props.children}
      </aside>
    </CSSTransition>
  );
  return createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
