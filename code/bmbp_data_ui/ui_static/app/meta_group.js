window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById("app"));
    const app = React.createElement(MetaView, {}, null);
    root.render(app);
}

const MetaView = (props) => {
    const metaView = React.createElement(
        "div",
        {
            className: "meta-view",
        },
        [
            "ABC"
        ]
    );
    return metaView
}
