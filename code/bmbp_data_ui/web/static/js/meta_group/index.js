// web/jsx/meta_group/logic.jsx
var MetaGroupState = {};
var MetaGroupLogic = {
  addMetaGroupBrother: (data) => {
    alert(data.metaGroupCode);
  },
  addMetaGroupChild: (data) => {
    let treeData = [...MetaGroupState.treeData];
    treeData.push(data);
    MetaGroupState.setTreeData(treeData);
    alert(data.metaGroupCode);
  },
  editMetaGroup: (data) => {
    alert(data.metaGroupCode);
  },
  disableMetaGroup: (data) => {
    alert(data.metaGroupCode);
  },
  enableMetaGroup: (data) => {
    alert(data.metaGroupCode);
  },
  removeMetaGroup: (data) => {
    alert(data.metaGroupCode);
  }
};

// web/jsx/meta_group/index.jsx
var MetaGroupView = () => {
  return React.createElement("div", {
    className: "meta"
  }, React.createElement(arco.Button, {
    onClick: () => {
      MetaGroupLogic.addMetaGroupBrother({ metaGroupCode: "AAAAA" });
    }
  }, "\u9A8C\u8BC1"), React.createElement(arco.Button, {
    onClick: () => {
      MetaGroupLogic.addMetaGroupBrother({ metaGroupCode: "AAAAA" });
    }
  }, "\u9A8C\u8BC1"));
};
var root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(MetaGroupView, null));
