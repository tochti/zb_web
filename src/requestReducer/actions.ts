export const START_REQUEST = 'START_REQUEST';
export function startRequest(name: string) {
    return {
        type: START_REQUEST,
        name,
    };
}

export const STOP_REQUEST = 'STOP_REQUEST';
export function stopRequest(name: string) {
    return {
        type: STOP_REQUEST,
        name,
    };
}

export const REQUEST_ERROR = 'REQUEST_ERROR';
export function requestError(name: string, error: Error) {
    return {
        type: REQUEST_ERROR,
        name,
        error,
    };
}

export const CLEAR_REQUEST_ERROR = 'CLEAR_REQUEST_ERROR';
export function clearError(name: string) {
    return {
        type: CLEAR_REQUEST_ERROR,
        name,
    };
}
