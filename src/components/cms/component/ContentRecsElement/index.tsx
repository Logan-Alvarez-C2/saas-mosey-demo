import { type CmsComponent } from "@remkoj/optimizely-cms-react";
import { ContentRecsElementDataFragmentDoc, type ContentRecsElementDataFragment } from "@/gql/graphql";

/**
 * Content Recommendations
 * Add a set of content recommendations
 */
export const ContentRecsElementComponent : CmsComponent<ContentRecsElementDataFragment> = ({ data, children }) => {
    const componentName = 'Content Recommendations'
    const componentInfo = 'Add a set of content recommendations'
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
ContentRecsElementComponent.displayName = "Content Recommendations (Component/ContentRecsElement)"
ContentRecsElementComponent.getDataFragment = () => ['ContentRecsElementData', ContentRecsElementDataFragmentDoc]

export default ContentRecsElementComponent