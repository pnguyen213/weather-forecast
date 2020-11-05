import React from 'react';

interface DefaultErrorState {
    hasRuntimeError: boolean;
    error: Object | null;
}

export default class RuntimeErrorBoundary extends React.Component<{}, DefaultErrorState> {
    constructor(props: any) {
        super(props);
        this.state = { hasRuntimeError: false, error: null };
    }

    componentDidCatch(error: any) {
        this.setState({
            hasRuntimeError: true,
            error: error
        })
    }

    render() {
        if (this.state.hasRuntimeError) {
            return (
                <div>
                    ERROR OCCURED.
                    {this.state.error}
                </div>
            )
        }

        return this.props.children;
    }
}
