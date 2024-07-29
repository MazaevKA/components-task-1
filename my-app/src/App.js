import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [error, setError] = useState('');

  const onInputButtonClick = () => {
    const promptValue = prompt('Введите значение');

    promptValue.length >= 3
      ? setValue(promptValue)
      : setError('Введенное значение должно содержать минимум 3 символа');
  }

  const isValueValid = !!value;

  const onAddButtonClick = () => {
      setList(value);
      setValue('');
      setError('');
      setList(list.concat({ id: Date.now(), value: value}));
  }

	return (
    <div className={styles.app}>
      <h1 className={styles['page-heading']}>Ввод значения</h1>
      <p className={styles['no-margin-text']}>Текущее значение <code>value</code>: "
        <output className={styles['current-value']}>{value}"</output>
      </p>
      <div className={styles.error}>{error !== '' ? error : ''}</div>
      <div className={styles['buttons-container']}>
        <button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
        <button className={styles.button} onClick={onAddButtonClick} disabled={!isValueValid}>Добавить в список</button>
      </div>
      <div className={styles['list-container']}>
        <h2 className={styles['list-heading']}>Список:</h2>
        <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
        <ul className={styles.list}>
          {list.map(({id, value}) => (
            <li className={styles['list-item']} key={id}>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};