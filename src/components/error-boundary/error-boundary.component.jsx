import React, { Component } from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error-boundary.style';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false,
    };
  }

  // this lifecycle will check error
  static getDerivedStateFromError(error) {
    // process error
    return { hasErrored: true };
  }

  // invoked after an error has been thrown
  // by a descendant component
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
          <ErrorImageText>Sorry This Page Has Broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
