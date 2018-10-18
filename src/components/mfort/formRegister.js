import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'

import Spinner from 'react-spinkit'
import ScrollableAnchor from 'react-scrollable-anchor'

import EndPageBackground from './backgrounds/pageEnd'

import { Header, Button } from '../../library/index'
import { flex, rem, theme, phone } from '../../library/utils'

const Wrapper = styled.section`
  height: 600px;
  padding: 45 0 ${rem(120)};
  position: relative;

  ${flex({ x: 'flex-end' })}
  flex-direction: column;
`

const Form = styled.form`
  position: relative;
  margin: 0;
  width: 500px;
  ${flex}
  flex-direction: column;

  ${phone(css`
    padding: ${rem(30)};
  `)}

  ${({ loading }) => loading && css`
    filter: blur(2px);
  `}

  transition: all .3s ease;
`

const Input = styled.input`
  background: ${theme.blue};

  font-size: ${rem(14)};
  color: #fff;

  border: none;
  border-bottom: 1px solid #fff;

  width: 100%;
  padding: ${rem(16)};
  margin: ${rem(10)} 0;

  &:focus {
    border-bottom: 1px solid ${theme.blue};
    box-shadow: inset 0 2px 20px rgba(0,0,0,0.17);

    &::-webkit-input-placeholder {
      color: ${theme.blue};
      transition: all .3s ease;
    }
  }
  transition: all .3s ease;
`


const Message = styled.p`
  margin: ${rem(6)} 0 0;
  font-size: ${rem(14)};
  color: #c6c6c6;

  ${({ error }) => error && css`
    color: ${theme.red}
  `}
`

const SpinWrapper = styled.div`
  position: absolute;
  top: 0;
  background: transparent;

  width: 100%;
  height: 100%;

  ${flex}
`

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Spin = () => (
  <SpinWrapper>
    <Spinner name="ball-triangle-path" color={theme.blue} />
  </SpinWrapper>
)

const DisplayMessage = ({ data }) => {
  let message = data.msg ? data.msg.replace(/([0-9]|-)/g, '').trim() : ''

  if (message.includes('already subscribed')) {
    [ message ] = message.split('<')
  }

  return (
    <Message
      error={data.result && data.result === 'error' && true}>
      {message}
    </Message>
  )
}

DisplayMessage.propTypes = {
  data: PropTypes.shape({
    msg: PropTypes.string,
    result: PropTypes.string
  }).isRequired
}

class Register extends Component {
  state = {
    name: '',
    email: '',
    response: null,
    loading: false
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  

  render() {
    const { loading, name, email } = this.state
    const { title, button } = this.props

    return (
      <Wrapper>
        <EndPageBackground/>
        <Header color={theme.whiteFont}>
          {title}
        </Header>
        <ScrollableAnchor id='subscribe'>
          <div style={{ position: 'relative' }}>
            <Form method="POST" action="https://formspree.io/hola@trifenix.com" loading={loading}>
              <Input
                placeholder='Su nombre (opcional)'
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
              />
              <Input
                required
                placeholder='Su E-mail'
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Button
                primary
                disabled={loading}
              >
                {button}
              </Button>
            </Form>
            { loading && <Spin /> }
          </div>

        </ScrollableAnchor>
      </Wrapper>
    )
  }
}

Register.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired
}

export default Register
