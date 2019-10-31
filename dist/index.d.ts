export declare type Selector = HTMLElement | HTMLCollection | NodeList;
export declare type Options = {
    removeListener: boolean;
};
export declare type Callback = (state: boolean | null) => {};
declare function vanillaClickOutside(selector: Selector, callback: Callback, options?: Options): EventListener;
export default vanillaClickOutside;
