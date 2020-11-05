import debounce from "lodash/debounce";
import { useCallback } from "react";
import { DEBOUND_INPUT_DELAY } from "./constants";

export const useDebounce = (callback: Function) =>
    useCallback(debounce((...args) => callback(...args), DEBOUND_INPUT_DELAY),
        []
    )