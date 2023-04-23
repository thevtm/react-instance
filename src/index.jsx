import * as React from 'react';

export class Instance {
  constructor(component) {
    this.component = component;
  }

  useState(initialState) {
    let state = initialState;

    const setState = (newState) => {
      state = newState;
      this.component.forceUpdate();
    }

    const getState = () => state

    return [getState, setState];
  }
}

export class InstanceComponent extends React.Component {
  constructor(props) {
    super(props);

    const { component_function } = props;

    const instance = new Instance(this);
    this.render_function = component_function(instance);
  }

  render() {
    return this.render_function(this.props);
  }
}
