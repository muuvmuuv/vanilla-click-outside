export declare type Selector = HTMLElement | HTMLCollection | NodeList | Element;
export declare type Callback = (state: boolean | undefined, event: Event) => void;
export declare type Options = {
    removeListener: boolean;
};
declare function vanillaClickOutside(selector: Selector, callback: Callback, options?: Options): EventListener;
export default vanillaClickOutside;
