import React from 'react';

class PayButton extends React.Component {
  pbRef = React.createRef<any>();
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.pbRef.current.componentOnReady().then(pb => {
      pb.config = {
        client: '0728974bc0a30cd0df1e7f08a5229ce9',
        locale: 'en_CA',
        style: {
          shape: 'pill',
          color: 'silver',
          size: 'large',
          label: 'paywith'
        },
        payment: () => {
          return {
            amount: 0.01,
            currency: 'CAD'
          };
        },
        onAuthorize: () => {
          alert('Thank you for your purchase!');
        }
      };
    });
  }

  render() {
    //@ts-ignore
    return <ottpay-checkout-button ref={this.pbRef} />;
  }
}
export default PayButton;
