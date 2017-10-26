import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import emailChanged from '../actions';

class LoginForm extends Component {
  constructor() {
    super();
    this.onEmailChange.bind(this);
  }

  componentWillMount() {}

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="Password" secureTextEntry />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
