const MetaGroupState = {};

const MetaGroupLogic={
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
  }
  ,
  disableMetaGroup: (data) => {
    alert(data.metaGroupCode);
  }
  ,
  enableMetaGroup: (data) => {
    alert(data.metaGroupCode);
  }
  ,
  removeMetaGroup: (data) => {
    alert(data.metaGroupCode);
  }
}
