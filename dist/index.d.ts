export declare type VanillaClickOutsideSelector = HTMLElement | HTMLCollection | NodeList;
export declare type VanillaClickOutsideOptions = {
    removeListener: boolean;
};
export declare type VanillaClickOutsideCallback = (state: boolean | null) => {};
export default function vanillaClickOutside(selector: VanillaClickOutsideSelector, callback: VanillaClickOutsideCallback, options?: VanillaClickOutsideOptions): EventListener;
