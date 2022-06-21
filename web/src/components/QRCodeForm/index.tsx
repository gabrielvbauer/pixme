import { FormEvent, useState } from 'react';
import { Button } from 'components/Button';
import { Textarea } from 'components/Textarea';

import style from './qrcodeform.module.scss';
import { api } from 'api/api';

type Props = {
  handleQRCodeUrl: (url: string) => void;
}

function QRCodeForm({ handleQRCodeUrl }: Props) {
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

    api.post('/new', {
      value: value
    })
      .then((response) => {
        const { QRCodeURL } = response.data;
        handleQRCodeUrl(QRCodeURL);
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <form 
      className={style.container}
      onSubmit={handleOnSubmit}
    >
      <div className={style.inputs}>
        <div className={style.form_input_grouper}>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={18}
            autoComplete='none'
            placeholder='Informe seu nome'
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <label htmlFor="name">Nome</label>
        </div>
        <div className={style.form_input_grouper}>
          <input
            type="text"
            name="value"
            id="value"
            autoComplete='none'
            placeholder='R$ 10,00'
            onChange={(event) => handleValue(event.target.value)}
            value={value}
          />
          <label htmlFor='value'>Valor</label>
        </div>
        <div className={style.form_input_grouper}>
          <Textarea
            name="message"
            id="message"
            maxLength={255}
            autoComplete='none'
            placeholder='Digite uma mensagem...'
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />
          <label htmlFor='message'>Mensagem</label>
        </div>
        <span className={style.observation}>O preenchimento do formulário é opcional</span>
      </div>

      <Button>Gerar QRCode</Button>
    </form>
  )
}

export { QRCodeForm };