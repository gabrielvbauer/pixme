import { FormEvent, useState } from 'react';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';

import style from './qrcodeform.module.scss';

function QRCodeForm() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  function handleValue(val: string) {
    let value = val.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

    setValue(value)
  }

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    console.log(
      {
        name,
        value,
        message
      }
    )
  }

  return (
    <form 
      className={style.container}
      onSubmit={handleOnSubmit}
    >
      <div className={style.inputs}>
        <div className={style.form_input_grouper}>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            name="name"
            id="name"
            maxLength={18}
            autoComplete='none'
            placeholder='Informe o seu nome'
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className={style.form_input_grouper}>
          <label htmlFor='value'>Valor</label>
          <Input
            type="text"
            name="value"
            id="value"
            autoComplete='none'
            placeholder='10,00'
            onChange={(event) => handleValue(event.target.value)}
            value={value}
          />
        </div>
        <div className={style.form_input_grouper}>
          <label htmlFor='message'>Mensagem</label>
          <Textarea
            name="message"
            id="message"
            maxLength={255}
            autoComplete='none'
            placeholder='Digite sua mensagem'
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
        </div>
        <span className={style.observation}>O preenchimento do formulário é opcional</span>
      </div>


      <Button>Gerar QRCode</Button>
    </form>
  )
}

export { QRCodeForm };