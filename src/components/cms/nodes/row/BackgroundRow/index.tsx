import { extractSettings, type CmsLayoutComponent } from "@remkoj/optimizely-cms-react/rsc";
import { BackgroundRowProps } from "../displayTemplates";

export const BackgroundRow : CmsLayoutComponent<BackgroundRowProps> = ({ contentLink, layoutProps, children }) => {
    const layout = extractSettings(layoutProps);
    return (<div className="vb:row vb:row:BackgroundRow">{ children }</div>);
}

export default BackgroundRow;