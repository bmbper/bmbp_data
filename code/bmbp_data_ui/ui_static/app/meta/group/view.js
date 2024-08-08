window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    const app = React.createElement(MetaGroupView, {}, null);
    root.render(app);
}

const MetaGroupView = (props) => {
    const meteGroupTreeView = React.createElement(MetaGroupTreeView, {}, []);
    const splitLine = React.createElement(arco.Grid.Col, {
        flex: '2px', style: {
            height: '100%'
        }
    }, React.createElement(arco.Divider, {
        type: 'vertical', style: {
            height: '100%'
        }
    }, []));
    const meteGroupGridView = React.createElement(MeteGroupGridView, {}, []);
    const leftCenterLayout = React.createElement(arco.Grid.Row,
        {
            style: {
                height: '100%'
            }
        }, [meteGroupTreeView, splitLine, meteGroupGridView]);
    const bodyView = React.createElement(
        "div",
        {
            className: "bmbp-app-fluid",
        },

        leftCenterLayout
    );
    return bodyView
}

const MetaGroupTreeView = () => {
    return React.createElement(arco.Grid.Col, {
        flex: '320px'
    }, React.createElement(MetaGroupTreePanel, {}, []));
}
const MetaGroupTreePanel = () => {
    const [treeData, setTreeData] = React.useState([]);
    MetaGroupState.treeData = treeData;
    MetaGroupState.setTreeData = setTreeData;
    const treePanel = React.createElement(arco.Tree, {
        showLine:true,
        blockNode:true,
        renderExtra: (node) => {
          return React.createElement(MetaTreeNodeMoreAction, { node: node }, []);
        }
    }, buildMetaGropTeeeNodeView(treeData));
    return React.createElement("div", {}, treePanel);
}
const buildMetaGropTeeeNodeView=(treeData)=>{
  let treeNodeVec = [];
  if (!treeData || !treeData instanceof Array) {
    return treeNodeVec;
  }
  for (let treeNodeData of treeData) {
    let childrenNodeView = buildMetaGropTeeeNodeView(treeNodeData.metaGroupChildren);
    let treeNodeView = React.createElement(arco.Tree.Node, {
      title:treeNodeData.metaGroupName,
      key:treeNodeData.metaGroupCode,
      dataRef:treeNodeData
    }, childrenNodeView);
    treeNodeVec.push(treeNodeView);
  }

  return treeNodeVec;
}
const MetaTreeNodeMoreAction = (props) => {
  const dropList = React.createElement(arco.Menu, {
    style: {
      maxHeight:'380px'
    }
  }, [
    React.createElement(arco.Menu.Item, {
      key: 'addBrother',
      onClick: () => {
        MetaGroupLogic.addMetaGroupBrother(props.node.dataRef);
      }
    }, "新增同级"),
    React.createElement(arco.Menu.Item, {
      key: 'addChildren',
      onClick: () => {
          MetaGroupLogic.addMetaGroupChild(props.node.dataRef);
      }
    }, "新增子级"),
    React.createElement(arco.Menu.Item, {
      key: 'edit',
      onClick: () => {
          MetaGroupLogic.editMetaGroup(props.node.dataRef);
      }
    }, "编辑"),
    React.createElement(arco.Menu.Item, {
      key: 'disable',
      onClick: () => {
          MetaGroupLogic.disableMetaGroup(props.node.dataRef);
      }
    }, "停用"),
    React.createElement(arco.Menu.Item, {
      key: 'enable',
      onClick: () => {
          MetaGroupLogic.enableMetaGroup(props.node.dataRef);
      }
    }, "启用"),

    React.createElement(arco.Menu.Item, {
      key: 'remove',
      onClick: () => {
          MetaGroupLogic.removeMetaGroup(props.node.dataRef);
      }
    }, "删除"),
  ]);
  return React.createElement(arco.Dropdown, {
    droplist:dropList,
  }, React.createElement(arcoicon.IconMore, {}, []));
}
const MeteGroupGridView = () => {
    return React.createElement(arco.Grid.Col, {
            flex: '320px'
        }, React.createElement(MetaGroupGridPanel, {}, [])
    );
}
const MetaGroupGridPanel = () => {
  return React.createElement("div", {}, React.createElement(arco.Button, { onClick: () => {
    MetaGroupLogic.addMetaGroupChild({metaGorupCode:"A"+new Date().getTime(),metaGroupName:"B"+Math.random(100)})
  } },"新增"));
}
