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
    const treeData = [
        {
            title: 'Trunk 0-0',
            key: '0-0',
            children: [
                {
                    title: 'Branch 0-0-2',
                    key: '0-0-2',
                    selectable: false,
                    children: [
                        {
                            title: 'Leaf',
                            key: '0-0-2-1',
                            children: [
                                {
                                    title: 'Leafsss 0-0-2',
                                    key: '0-0-2-1-0',
                                    children: [
                                        {
                                            title: 'Leaf',
                                            key: '0-0-2-1-0-0',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            title: 'Trunk 0-1',
            key: '0-1',
            children: [
                {
                    title: 'Branch 0-1-1',
                    key: '0-1-1',
                    children: [
                        {
                            title: 'Leaf',
                            key: '0-1-1-0',
                        },
                    ],
                },
            ],
        },
    ];
    const treePanel = React.createElement(arco.Tree, {
        treeData: treeData
    }, []);
    return React.createElement("div", {}, treePanel);
}
const MeteGroupGridView = () => {
    return React.createElement(arco.Grid.Col, {
            flex: '320px'
        }, React.createElement(MetaGroupGridPanel, {}, [])
    );
}
const MetaGroupGridPanel = () => {
    return React.createElement("div", {}, "GRID");
}
