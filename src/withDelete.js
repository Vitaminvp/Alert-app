import React from "react";

const withComponentDelete = delay => Component => {

    class WithDelayHOC extends React.Component {
        state = {
            isVisible: true
        };

        componentDidMount() {
            setTimeout(()=>{
                this.setState({
                    isVisible: false
                })
            }, delay)
        }

        render() {
            const { isVisible } = this.state;
            if (isVisible)
                return <Component {...this.props} />;
            else return null
        }
    }

    return WithDelayHOC;
};

export default withComponentDelete;
