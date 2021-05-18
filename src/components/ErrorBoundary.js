import React, { PureComponent } from 'react';

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: error };
  }

  componentDidCatch(error, info) {
    console.log(info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
