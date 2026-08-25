import { Events, AnyEvent } from '../coreUtils/events';
import { ElementTypeIri, LinkTypeIri, PropertyTypeIri } from '../data/model';
import { ElementType, ElementTypeEvents, PropertyType, PropertyTypeEvents, LinkType, LinkTypeEvents } from './dataElements';
export interface DataGraphEvents {
    elementTypeEvent: AnyEvent<ElementTypeEvents>;
    linkTypeEvent: AnyEvent<LinkTypeEvents>;
    propertyTypeEvent: AnyEvent<PropertyTypeEvents>;
}
export declare class DataGraph {
    private readonly source;
    readonly events: Events<DataGraphEvents>;
    private readonly classesById;
    private readonly propertiesById;
    private readonly linkTypes;
    getLinkType(linkTypeId: LinkTypeIri): LinkType | undefined;
    addLinkType(linkType: LinkType): void;
    private onLinkTypeEvent;
    getPropertyType(propertyId: PropertyTypeIri): PropertyType | undefined;
    addPropertyType(propertyType: PropertyType): void;
    private onPropertyTypeEvent;
    getElementType(elementTypeId: ElementTypeIri): ElementType | undefined;
    getElementTypes(): ElementType[];
    addElementType(elementType: ElementType): void;
    private onElementTypeEvent;
}
//# sourceMappingURL=dataGraph.d.ts.map