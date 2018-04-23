import React from 'react';
import { connect } from 'dva';
import Text from '../components/Text';

interface TestProps {
    global: any;
};

class Test extends React.Component<TestProps, {}> {
    render() {
        let { global } = this.props;
        console.log(global);
        return (
            <div>
                <h2>{ global.text }</h2>
                <Text />
            </div>
        );
    }
}

export default connect(({ global }) => ({ global }))(Test);
