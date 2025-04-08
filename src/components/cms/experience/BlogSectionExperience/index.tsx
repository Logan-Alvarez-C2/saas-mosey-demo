import { type OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { getFragmentData } from "@/gql/fragment-masking";
import { ExperienceDataFragmentDoc, CompositionDataFragmentDoc, BlogSectionExperienceDataFragmentDoc, type BlogSectionExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Blog/News Section
 * Add a blog/news section to your site
 */
export const BlogSectionExperienceExperience : CmsComponent<BlogSectionExperienceDataFragment> = ({ data }) => {
    const composition = getFragmentData(CompositionDataFragmentDoc, getFragmentData(ExperienceDataFragmentDoc, data)?.composition)
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
BlogSectionExperienceExperience.displayName = "Blog/News Section (Experience/BlogSectionExperience)"
BlogSectionExperienceExperience.getDataFragment = () => ['BlogSectionExperienceData', BlogSectionExperienceDataFragmentDoc]
BlogSectionExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default BlogSectionExperienceExperience