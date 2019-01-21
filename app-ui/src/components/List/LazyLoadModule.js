
import * as React from "react";

export class LazyLoadModule extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      module: null
    };
  }

  // after the initial render, wait for module to load
  async componentDidMount() {
    const { resolve } = this.props;
            const { default: module } = await resolve();
            const { name, reducers } = module;
            const { store } = this.context;
            if (name && store && reducers)
                store.registerDynamicModule({ name, reducers });
                 this.setState({ module });
  }

  componentWillUnmount() {
          const { module } = this.state;
          const { store } = this.context;
          const { name } = module;
          if (store && name) store.unRegisterDynamicModule(name);
      }

  render() {
    const { module } = this.state;
  console.log('-----modile',module);
    if (!module) return <div>Loading module...</div>;
    if (module) return <div>Loading module...</div>;

  }
}