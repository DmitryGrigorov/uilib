import React, { Component } from "react";
import ErrorPage from "./ErrorPage";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  error: any;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDeriverStateFromError(error: Error): ErrorBoundaryState {
    return { error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({ error, errorInfo });
  }

  render(): React.ReactNode {
    return this.state.error ? (
      <ErrorPage error={this.state.error} errorInfo={this.state.errorInfo} />
    ) : (
      this.props.children
    );
  }
}
