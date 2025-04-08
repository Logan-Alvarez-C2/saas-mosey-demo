import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'


export function getContentType(client: GraphQLClient, variables: Types.getContentTypeQueryVariables) : Promise<Types.getContentTypeQuery>
{
  const query = gql`query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { _metadata { types } } } }`
  return client.request<Types.getContentTypeQuery, Types.getContentTypeQueryVariables>(query, variables)
}
export function getContentByPath(client: GraphQLClient, variables: Types.getContentByPathQueryVariables) : Promise<Types.getContentByPathQuery>
{
  const query = gql`query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) { content: _Content( where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}} locale: $locale ) { total items { ...IContentData ...PageData ...BlankExperienceData ...BlogSectionExperienceData ...BlogPostPageData ...LandingPageData } } } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogSectionExperienceData on BlogSectionExperience { seo_data { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogPostPageData on BlogPostPage { Heading ArticleSubHeading Topic BlogPostBody { json html } ArticleAuthor BlogPostPromoImage { ...ReferenceData } continueReading { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } SeoSettings { ...PageSeoSettingsPropertyData } } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } MainContentArea { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } SeoSettings { ...PageSeoSettingsPropertyData } } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment PageData on _IContent { ...IContentData } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment LinkData on ContentUrl { base hierarchical default } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionComponentNode { component { ...BlockData ...ElementData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } } } fragment ArticleListElementData on ArticleListElement { articleListCount topics } fragment ButtonBlockData on ButtonBlock { ButtonText ButtonUrl { ...LinkData } ButtonClass ButtonType ButtonVariant } fragment CTAElementData on CTAElement { Text Link { ...LinkData } } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem } } fragment ContentRecsElementData on ContentRecsElement { ElementDeliveryApiKey ElementRecommendationCount } fragment HeadingElementData on HeadingElement { headingText } fragment HeroBlockData on HeroBlock { HeroImage { ...ReferenceData } Icon Eyebrow Heading SubHeading Description { json html } HeroColor HeroButton { ...ButtonBlockPropertyData } } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment LayoutSettingsBlockData on LayoutSettingsBlock { mainMenu { ...IContentListItem } contactInfoHeading serviceButtons { ...IContentListItem } contactInfo { json html } footerMenus { ...IContentListItem } copyright legalLinks { ...LinkItemData } appIdentifiers } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { MenuMenuHeading MegaMenuUrl { ...LinkData } MegaMenuContentArea { ...IContentListItem } } fragment MenuNavigationBlockData on MenuNavigationBlock { MenuNavigationHeading NavigationLinks { ...LinkItemData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment PageSeoSettingsData on PageSeoSettings { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ParagraphElementData on ParagraphElement { text { json html } } fragment QuoteBlockData on QuoteBlock { QuoteText QuoteColor QuoteProfilePicture { ...ReferenceData } QuoteProfileName QuoteProfileLocation QuoteActive } fragment RichTextElementData on RichTextElement { text { json html } } fragment TestimonialElementData on TestimonialElement { customerName customerLocation customerImage { ...ReferenceData } referenceTitle referenceText { json html } } fragment TextBlockData on TextBlock { TextBlockOverline TextBlockHeading TextBlockHeadingSize TextBlockDescription { json html } TextBlockWidth TextCenter TextClassName } fragment VideoElementData on VideoElement { video { ...ReferenceData } title placeholder { ...ReferenceData } } fragment ElementData on _IComponent { ...IElementData } fragment BlockData on _IComponent { ...IContentData } fragment IContentListItem on _IContent { ...IContentData } fragment ButtonBlockPropertyData on ButtonBlockProperty { ButtonText ButtonUrl { ...LinkData } ButtonClass ButtonType ButtonVariant } fragment LinkItemData on Link { title text target url { ...LinkData } } fragment IElementData on _IComponent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } }`
  return client.request<Types.getContentByPathQuery, Types.getContentByPathQueryVariables>(query, variables)
}
export function getContentById(client: GraphQLClient, variables: Types.getContentByIdQueryVariables) : Promise<Types.getContentByIdQuery>
{
  const query = gql`query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) { content: _Content( where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]} locale: $locale ) { total items { ...BlockData ...PageData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData ...BlankExperienceData ...BlogSectionExperienceData ...BlogPostPageData ...LandingPageData } } } fragment ArticleListElementData on ArticleListElement { articleListCount topics } fragment ButtonBlockData on ButtonBlock { ButtonText ButtonUrl { ...LinkData } ButtonClass ButtonType ButtonVariant } fragment CTAElementData on CTAElement { Text Link { ...LinkData } } fragment CarouselBlockData on CarouselBlock { CarouselItemsContentArea { ...IContentListItem } } fragment ContentRecsElementData on ContentRecsElement { ElementDeliveryApiKey ElementRecommendationCount } fragment HeadingElementData on HeadingElement { headingText } fragment HeroBlockData on HeroBlock { HeroImage { ...ReferenceData } Icon Eyebrow Heading SubHeading Description { json html } HeroColor HeroButton { ...ButtonBlockPropertyData } } fragment ImageElementData on ImageElement { altText imageLink { ...ReferenceData } } fragment LayoutSettingsBlockData on LayoutSettingsBlock { mainMenu { ...IContentListItem } contactInfoHeading serviceButtons { ...IContentListItem } contactInfo { json html } footerMenus { ...IContentListItem } copyright legalLinks { ...LinkItemData } appIdentifiers } fragment MegaMenuGroupBlockData on MegaMenuGroupBlock { MenuMenuHeading MegaMenuUrl { ...LinkData } MegaMenuContentArea { ...IContentListItem } } fragment MenuNavigationBlockData on MenuNavigationBlock { MenuNavigationHeading NavigationLinks { ...LinkItemData } } fragment OdpEmbedBlockData on OdpEmbedBlock { ContentId } fragment PageSeoSettingsData on PageSeoSettings { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ParagraphElementData on ParagraphElement { text { json html } } fragment QuoteBlockData on QuoteBlock { QuoteText QuoteColor QuoteProfilePicture { ...ReferenceData } QuoteProfileName QuoteProfileLocation QuoteActive } fragment RichTextElementData on RichTextElement { text { json html } } fragment TestimonialElementData on TestimonialElement { customerName customerLocation customerImage { ...ReferenceData } referenceTitle referenceText { json html } } fragment TextBlockData on TextBlock { TextBlockOverline TextBlockHeading TextBlockHeadingSize TextBlockDescription { json html } TextBlockWidth TextCenter TextClassName } fragment VideoElementData on VideoElement { video { ...ReferenceData } title placeholder { ...ReferenceData } } fragment BlankExperienceData on BlankExperience { BlankExperienceSeoSettings { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogSectionExperienceData on BlogSectionExperience { seo_data { ...PageSeoSettingsPropertyData } ...ExperienceData } fragment BlogPostPageData on BlogPostPage { Heading ArticleSubHeading Topic BlogPostBody { json html } ArticleAuthor BlogPostPromoImage { ...ReferenceData } continueReading { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } SeoSettings { ...PageSeoSettingsPropertyData } } fragment LandingPageData on LandingPage { TopContentArea { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } MainContentArea { ...BlockData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } SeoSettings { ...PageSeoSettingsPropertyData } } fragment BlockData on _IComponent { ...IContentData } fragment PageData on _IContent { ...IContentData } fragment LinkData on ContentUrl { base hierarchical default } fragment IContentListItem on _IContent { ...IContentData } fragment IContentData on _IContent { _metadata { ...IContentInfo } _type: __typename } fragment IContentInfo on IContentMetadata { key locale types displayName version url { ...LinkData } } fragment ButtonBlockPropertyData on ButtonBlockProperty { ButtonText ButtonUrl { ...LinkData } ButtonClass ButtonType ButtonVariant } fragment ReferenceData on ContentReference { key url { ...LinkData } } fragment LinkItemData on Link { title text target url { ...LinkData } } fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty { MetaTitle MetaDescription MetaKeywords SharingImage { ...ReferenceData } GraphType } fragment ExperienceData on _IExperience { composition { ...CompositionData } } fragment CompositionData on ICompositionNode { name: displayName layoutType: nodeType type key template: displayTemplateKey settings: displaySettings { key value } ... on ICompositionStructureNode { nodes @recursive(depth: 10) { name: displayName } } ... on ICompositionComponentNode { component { ...BlockData ...ElementData ...ArticleListElementData ...ButtonBlockData ...CTAElementData ...CarouselBlockData ...ContentRecsElementData ...HeadingElementData ...HeroBlockData ...ImageElementData ...LayoutSettingsBlockData ...MegaMenuGroupBlockData ...MenuNavigationBlockData ...OdpEmbedBlockData ...PageSeoSettingsData ...ParagraphElementData ...QuoteBlockData ...RichTextElementData ...TestimonialElementData ...TextBlockData ...VideoElementData } } } fragment ElementData on _IComponent { ...IElementData } fragment IElementData on _IComponent { _metadata { ...IContentInfo } _type: __typename }`
  return client.request<Types.getContentByIdQuery, Types.getContentByIdQueryVariables>(query, variables)
}

