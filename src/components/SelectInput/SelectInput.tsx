import style from './SelectInput.module.scss';
import globalStyle from '../../GlobalClasses.module.scss';
import offImg from '../../assets/switch-off.svg';
import SelectWithDropdown from '../SelectWithDropdown/SelectWithDropdown';
import { cheeseVariants } from '../../data/cheese';
import CircleButton from '../ui/Buttons/CircleButton/CircleButton';

interface ISelectInput {
  title: string;
}

const SelectInput = ({ title }: ISelectInput) => {
  return (
    <div className={globalStyle.inputContainer}>
      <h3 className={globalStyle.inputTitle}>{title}</h3>
      <div className={globalStyle.btnContainer}>
        <img src={offImg} alt="Switch button" className={globalStyle.switchBtn}/>
        <CircleButton type="add"/>
        <CircleButton type="remove"/>
      </div>
      <SelectWithDropdown data={cheeseVariants}/>
    </div>
  );
};

export default SelectInput;
