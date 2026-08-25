import { HashMap, type ReadonlyHashMap, type ReadonlyHashSet } from '@reactodia/hashmap';
import { ElementModel, ElementIri, LinkKey, LinkModel } from '../data/model';
export interface AuthoringState {
    readonly elements: ReadonlyMap<ElementIri, AuthoredEntity>;
    readonly links: ReadonlyHashMap<LinkKey, AuthoredRelation>;
}
export type AuthoringEvent = AuthoredEntity | AuthoredRelation;
export type AuthoredEntity = AuthoredEntityAdd | AuthoredEntityChange | AuthoredEntityDelete;
export type AuthoredRelation = AuthoredRelationAdd | AuthoredRelationChange | AuthoredRelationDelete;
export interface AuthoredEntityAdd {
    readonly type: 'entityAdd';
    readonly data: ElementModel;
}
export interface AuthoredEntityChange {
    readonly type: 'entityChange';
    readonly before: ElementModel;
    readonly data: ElementModel;
    readonly newIri?: ElementIri;
}
export interface AuthoredEntityDelete {
    readonly type: 'entityDelete';
    readonly data: ElementModel;
}
export interface AuthoredRelationAdd {
    readonly type: 'relationAdd';
    readonly data: LinkModel;
}
export interface AuthoredRelationChange {
    readonly type: 'relationChange';
    readonly before: LinkModel;
    readonly data: LinkModel;
}
export interface AuthoredRelationDelete {
    readonly type: 'relationDelete';
    readonly data: LinkModel;
}
export interface MutableAuthoringState extends AuthoringState {
    readonly elements: Map<ElementIri, AuthoredEntity>;
    readonly links: HashMap<LinkKey, AuthoredRelation>;
}
export declare namespace AuthoringState {
    const empty: AuthoringState;
    function isEmpty(state: AuthoringState): boolean;
    function clone(index: AuthoringState): MutableAuthoringState;
    function isEntityEvent(event: AuthoringEvent): event is AuthoredEntity;
    function isLinkEvent(event: AuthoringEvent): event is AuthoredRelation;
    function has(state: AuthoringState, event: AuthoringEvent): boolean;
    function discard(state: AuthoringState, discarded: AuthoringEvent): AuthoringState;
    function addEntity(state: AuthoringState, data: ElementModel): AuthoringState;
    function addRelation(state: AuthoringState, data: LinkModel): AuthoringState;
    function changeEntity(state: AuthoringState, before: ElementModel, after: ElementModel): AuthoringState;
    function changeRelation(state: AuthoringState, before: LinkModel, after: LinkModel): AuthoringState;
    function deleteEntity(state: AuthoringState, data: ElementModel): AuthoringState;
    function deleteRelation(state: AuthoringState, data: LinkModel): AuthoringState;
    function discardAddedRelations(state: AuthoringState, connectedEntities: ReadonlySet<ElementIri>): AuthoringState;
    function isAddedEntity(state: AuthoringState, target: ElementIri): boolean;
    function isDeletedEntity(state: AuthoringState, target: ElementIri): boolean;
    function hasEntityChangedIri(state: AuthoringState, target: ElementIri): boolean;
    function isAddedRelation(state: AuthoringState, key: LinkKey): boolean;
    function isDeletedRelation(state: AuthoringState, key: LinkKey): boolean;
}
export interface TemporaryState {
    readonly elements: ReadonlySet<ElementIri>;
    readonly links: ReadonlyHashSet<LinkKey>;
}
export declare namespace TemporaryState {
    const empty: TemporaryState;
    function addEntity(state: TemporaryState, element: ElementModel): TemporaryState;
    function removeEntity(state: TemporaryState, element: ElementModel): TemporaryState;
    function addRelation(state: TemporaryState, link: LinkKey): TemporaryState;
    function removeRelation(state: TemporaryState, link: LinkKey): TemporaryState;
}
//# sourceMappingURL=authoringState.d.ts.map