import { i as colaRemoveOverlaps, n as colaFlowLayout, r as colaForceLayout, t as blockingDefaultLayout } from "./common/common-BWsVNoKq.js";
import { connectWorker } from "@reactodia/worker-proxy/protocol";
//#region src/layout.worker.ts
/**
* Provides a web worker with basic diagram layout algorithms.
*/
var DefaultLayouts = class {
	/**
	* Default layout algorithm, the same as {@link blockingDefaultLayout}
	* but non-blocking due to being run in a worker.
	*
	* @see {@link blockingDefaultLayout}
	*/
	defaultLayout = async (graph, state, options) => {
		return blockingDefaultLayout(graph, state, options);
	};
	/**
	* Force-directed layout algorithm from [cola.js](https://ialab.it.monash.edu/webcola/).
	*/
	forceLayout = async (graph, state, options) => {
		return Promise.resolve(colaForceLayout(graph, state, options));
	};
	/**
	* Flow layout algorithm from [cola.js](https://ialab.it.monash.edu/webcola/).
	*/
	flowLayout = async (graph, state, options) => {
		return Promise.resolve(colaFlowLayout(graph, state, options));
	};
	/**
	* Remove overlaps algorithm from [cola.js](https://ialab.it.monash.edu/webcola/).
	*/
	removeOverlaps = async (graph, state) => {
		return Promise.resolve(colaRemoveOverlaps(state));
	};
};
connectWorker(DefaultLayouts);
//#endregion

//# sourceMappingURL=layout.worker.js.map