import React, {Fragment} from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types';
import uuid from 'uuid';


export const ReactBasicInput = (props) => {

  const elId = `${uuid.v4()}`
  const {
     type = 'text',
     labelFor = elId,
     labelVal = '',
     inputVal = '',
     id = elId,
     alt='this is an input',
     inputElCLass='',
     labelElClass='',
     userMsgVal='',
     userMsgClass=''
  } = props
  return <Fragment>
    {labelVal.length? <label for={labelFor} className={labelElClass}>{labelVal}</label>: null}
    <input type={type} id={id} alt={alt} className={inputElCLass} value={inputVal}/>
    {userMsgVal.length ? <small className={userMsgClass}>{userMsgVal}</small>: null}
    </Fragment>;
}
ReactBasicInput.propTypes = {
  type: PropTypes.string,
  labelFor: PropTypes.string,
  labelVal: PropTypes.string,
  inputVal: PropTypes.string,
  id: PropTypes.string,
  alt: PropTypes.string,
  inputElCLass: PropTypes.string,
  labelElClass: PropTypes.string,
  userMsgVal: PropTypes.string,
  userMsgClass: PropTypes.string
}