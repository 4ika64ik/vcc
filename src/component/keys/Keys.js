import s from './Keys.module.scss';
import KeyFirst from './keyfirst/keyfirst';
import KeyTwo from './keytwo/keytwo';
import keys from '../../img/Have/keys.png';
import d1 from '../../img/key/design/d1.jpg';
import d2 from '../../img/key/design/d2.jpg';
import d3 from '../../img/key/design/d3.jpg';
import d4 from '../../img/key/design/d4.jpg';
import d5 from '../../img/key/design/d5.jpg';
import d6 from '../../img/key/design/d6.jpg';
import d7 from '../../img/key/design/d7.jpg';
import d8 from '../../img/key/design/d8.jpg';
import d9 from '../../img/key/design/d9.jpg';
import d11 from '../../img/key/design/d11.jpg';
import d12 from '../../img/key/design/d12.jpg';

const Keys = () => {
  return (
    <div className={s.keys}>
      <h2 className={s.title}>Наши работы</h2>
      <img src={keys} className={s.icon} alt='keys'/>

      <KeyFirst />

      <KeyTwo />

      <div className={s.design}>
        <p>Примеры по дизайну</p>
        <div className={s.designBlock}>
          <img className={s.img} alt='design' src={d1} />
          <img className={s.img} alt='design' src={d2} />
          <img className={s.img} alt='design' src={d3} />
          <img className={s.img} alt='design' src={d4} />
          <img className={s.img} alt='design' src={d5} />
          <img className={s.img} alt='design' src={d6} />
          <img className={s.img} alt='design' src={d7} />
          <img className={s.img} alt='design' src={d8} />
          <img className={s.img} alt='design' src={d9} />
          <img className={s.img} alt='design' src={d11} />
          <img className={s.img} alt='design' src={d12} />
        </div>
      </div>
    </div>
  );
}

export default Keys