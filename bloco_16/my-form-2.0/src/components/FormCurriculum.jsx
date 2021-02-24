import React, { Component } from 'react'
import { Input } from './Input'

class FormCurriculum extends Component {

  render() {
    return (
      <section style={{ width: '80%', margin: '0 auto' }}>
        <form>
          <fieldset>
            <legend>Nome</legend>
            <Input typeString="type" nubMax="40"  value="nome" />
          </fieldset>

          <fieldset>
            <legend>Email</legend>
            <Input typeString="email" nubMax="50"  value="email" required />
          </fieldset>

          <fieldset>
            <legend>CPF</legend>
            <Input typeString="text" nubMax="50" value="cpf" valu />
          </fieldset>

          <fieldset>
            <legend>Endereço</legend>
            <Input typeString="text" nubMax="200" />
          </fieldset>

          <fieldset>
            <legend>Cidade</legend>
            <Input typeString="text" nubMax="28" />
          </fieldset>
          <button type='button'>Enviar</button>
        </form>
      </section>
    )
  }
}

export default FormCurriculum
