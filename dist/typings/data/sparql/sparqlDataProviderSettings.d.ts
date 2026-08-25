export interface SparqlDataProviderSettings {
    defaultPrefix: string;
    schemaLabelProperty: string;
    dataLabelProperty: string;
    filterOnlyLanguages?: ReadonlyArray<string>;
    classTreeQuery?: string;
    classInfoQuery?: string;
    linkTypesQuery?: string;
    linkTypesPattern?: string;
    linkTypesInfoQuery?: string;
    propertyInfoQuery?: string;
    elementInfoQuery: string;
    linksInfoQuery: string;
    imageQueryPattern: string;
    linkTypesOfQuery: string;
    linkTypesStatisticsQuery: string;
    lookupQuery: string;
    filterInnerPrelude?: string;
    filterRefElementLinkPattern: string;
    filterTypePattern: string;
    filterElementInfoPattern: string;
    filterAdditionalRestriction: string;
    fullTextSearch: FullTextSearchSettings;
    linkConfigurations: LinkConfiguration[];
    openWorldLinks?: boolean;
    propertyConfigurations: PropertyConfiguration[];
    openWorldProperties?: boolean;
}
export interface FullTextSearchSettings {
    prefix: string;
    queryPattern: string;
    extractLabel?: boolean;
}
export interface LinkConfiguration {
    id: string;
    domain?: ReadonlyArray<string>;
    path: string;
    properties?: string;
}
export interface PropertyConfiguration {
    id: string;
    domain?: ReadonlyArray<string>;
    path: string;
}
export declare const RdfSettings: SparqlDataProviderSettings;
export declare const WikidataSettings: SparqlDataProviderSettings;
export declare const OwlRdfsSettings: SparqlDataProviderSettings;
export declare const OwlStatsSettings: SparqlDataProviderSettings;
export declare const DBPediaSettings: SparqlDataProviderSettings;
//# sourceMappingURL=sparqlDataProviderSettings.d.ts.map