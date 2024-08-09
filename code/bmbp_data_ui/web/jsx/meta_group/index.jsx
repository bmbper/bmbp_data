import { MetaGroupLogic } from "./logic";
const MetaGroupView = () => {
  return <div className="meta">
    <arco.Button onClick={() => {
      MetaGroupLogic.addMetaGroupBrother({ metaGroupCode: "AAAAA" });
    } }>验证</arco.Button>
    <arco.Button onClick={() => {
      MetaGroupLogic.addMetaGroupBrother({ metaGroupCode: "AAAAA" });
    } }>验证</arco.Button>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<MetaGroupView />);
