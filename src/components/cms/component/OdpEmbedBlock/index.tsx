import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { OdpEmbedBlockDataFragmentDoc, type OdpEmbedBlockDataFragment } from "@/gql/graphql";

/**
 * Optimizely Data Platform Embed
 * Place an embed from the Optimizely Data Platform into your site
 */
export const OdpEmbedBlockComponent : CmsComponent<OdpEmbedBlockDataFragment> = ({ data, children }) => {
    const componentName = 'Optimizely Data Platform Embed'
    const componentInfo = 'Place an embed from the Optimizely Data Platform into your site'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
OdpEmbedBlockComponent.displayName = "Optimizely Data Platform Embed (Component/OdpEmbedBlock)"
OdpEmbedBlockComponent.getDataFragment = () => ['OdpEmbedBlockData', OdpEmbedBlockDataFragmentDoc]

export default OdpEmbedBlockComponent