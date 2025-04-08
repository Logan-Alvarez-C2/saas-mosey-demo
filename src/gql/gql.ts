/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": typeof types.ArticleListElementDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": typeof types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": typeof types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}": typeof types.CTAElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}": typeof types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": typeof types.ContentRecsElementDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": typeof types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": typeof types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": typeof types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": typeof types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": typeof types.OdpEmbedBlockDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": typeof types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}": typeof types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": typeof types.RichTextElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}": typeof types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}": typeof types.VideoElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": typeof types.BlogSectionExperienceDataFragmentDoc,
    "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlogPostPageDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.LandingPageDataFragmentDoc,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": typeof types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": typeof types.getContentByIdDocument,
};
const documents: Documents = {
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": types.ArticleListElementDataFragmentDoc,
    "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}": types.CTAElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}": types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": types.ContentRecsElementDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": types.OdpEmbedBlockDataFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}": types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": types.RichTextElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}": types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}": types.VideoElementDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}": types.BlogSectionExperienceDataFragmentDoc,
    "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlogPostPageDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.LandingPageDataFragmentDoc,
    "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }": types.IContentDataFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }": types.getContentByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    ...LinkData\n  }\n  ButtonClass\n  ButtonType\n  ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  Text\n  Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"): (typeof documents)["fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  HeroImage {\n    ...ReferenceData\n  }\n  Icon\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"): (typeof documents)["fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentListItem\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment MenuNavigationBlockData on MenuNavigationBlock {\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"): (typeof documents)["fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}"): (typeof documents)["fragment QuoteBlockData on QuoteBlock {\n  QuoteText\n  QuoteColor\n  QuoteProfilePicture {\n    ...ReferenceData\n  }\n  QuoteProfileName\n  QuoteProfileLocation\n  QuoteActive\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  TextBlockOverline\n  TextBlockHeading\n  TextBlockHeadingSize\n  TextBlockDescription {\n    json\n    html\n  }\n  TextBlockWidth\n  TextCenter\n  TextClassName\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment VideoElementData on VideoElement {\n  video {\n    ...ReferenceData\n  }\n  title\n  placeholder {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment BlogSectionExperienceData on BlogSectionExperience {\n  seo_data {\n    ...PageSeoSettingsPropertyData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment BlogPostPageData on BlogPostPage {\n  Heading\n  ArticleSubHeading\n  Topic\n  BlogPostBody {\n    json\n    html\n  }\n  ArticleAuthor\n  BlogPostPromoImage {\n    ...ReferenceData\n  }\n  continueReading {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment LandingPageData on LandingPage {\n  TopContentArea {\n    ...BlockData\n  }\n  MainContentArea {\n    ...BlockData\n  }\n  SeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"): (typeof documents)["fragment IContentData on _IContent\n    {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment CompositionData on ICompositionNode {\n        name: displayName\n        layoutType: nodeType    \n        type\n        key\n        template: displayTemplateKey\n        settings: displaySettings {\n            key\n            value\n        }\n        ... on ICompositionStructureNode {\n            nodes @recursive(depth: 10) {\n                name: displayName\n            }\n        }\n        ... on ICompositionComponentNode  {\n            component {\n                ...BlockData\n                ...ElementData\n            }\n        }\n    }\n\nfragment IElementData on _IComponent {\n        _metadata {\n            ...IContentInfo\n        }\n        _type: __typename\n    }\n\nfragment ElementData on _IComponent  {\n        ...IElementData\n    }\n\nfragment BlockData on _IComponent  {\n        ...IContentData\n    }\n\nfragment PageData on _IContent {\n        ...IContentData\n    }\n\nfragment LinkData on ContentUrl {\n        base\n        hierarchical\n        default\n    }\n\nfragment ReferenceData on ContentReference {\n        key\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentInfo on IContentMetadata {\n        key\n        locale\n        types\n        displayName\n        version\n        url {\n            ...LinkData\n        }\n    }\n\nfragment IContentListItem on _IContent {\n        ...IContentData\n    }\n\nfragment ExperienceData on _IExperience {\n        composition {\n            ...CompositionData\n        }\n    }\n\nfragment LinkItemData on Link {\n        title\n        text\n        target\n        url {\n            ...LinkData\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...BlockData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {\n        content: _Content(\n            where: {\n                _metadata: { url: { default: { in: $path }, base: { eq: $siteId } }}\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                ...IContentData\n                ...PageData\n            }\n        }\n    }\n\nquery getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n        content: _Content(\n            where: {\n                _or: [\n                    { _metadata: { key: { eq: $key }, version: { eq: $version } } }\n                    { _metadata: { url: { hierarchical: { eq: $path }, base: { eq: $domain } }, version: { eq: $version } } }\n                ]\n            }\n            locale: $locale\n        ) {\n            total\n            items {\n                _metadata {\n                    types\n                }\n            }\n        }\n    }"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;