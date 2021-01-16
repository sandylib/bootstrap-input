import React, { useState, useRef, useEffect } from 'react'
import cn from 'classnames';
import { Row, Col, Form, } from 'react-bootstrap';
import styles from './ChipsInput.module.css';
import Chip from './Chip';

const Error = ({error}) => (<Row>
  <Col>
   <span className={styles.errorMessage}>{error}</span>
  </Col>
</Row>)


const ChipsInput = ({name, label, placeholder, classes, chips, onRemove, onSubmit, error}) => {
 
    const formControlRef = useRef();
    const [exitingIndex, setExitingIndex] = useState(-1);
    const [focus, setFocus] = useState(false);

    const  removeChip = (index) => {
        setExitingIndex(index);
        setTimeout(() => {
          onRemove(index);
          setExitingIndex(null);
        }, 250);
      };

    useEffect(() => {
      formControlRef.current.value = '';
       
    }, [chips])

    useEffect(() => {
      if(focus === false &&  formControlRef.current.value.trim().length > 0 ) {
        onSubmit(formControlRef.current.value);
      }
    }, [focus, onSubmit])
    
    return (
      <>
        <div className={ cn( styles.wrap, { [styles.focus]: focus, [classes]: Boolean(classes)})}>
          <Row className="align-items-center" noGutters>
            {label && <Col xs="auto"> <span className={styles.chipLabel}>{label}</span></Col>}
            {chips.map((chip, index) => ( chip ? 
              <Col xs="auto" className="p-2" key={index}>
                <Chip text={chip.value || chip} error={chip.isValid===false} onClick={ ()=>removeChip(index) }/>
              </Col> : null
            ))}
            <Col xs>
              <Form
                onSubmit={async (e) => {
                  e.preventDefault();
                  onSubmit(formControlRef.current.value);
                }}
                noValidate
              >
                  <Form.Control
                    onFocus={()=> setFocus(true)}
                    onBlur={() => setFocus(false)}
                    ref={formControlRef}
                    name={name}
                    placeholder={placeholder || 'Plan Number'}
                    className={['m-0', 'border-0', styles['no-focus'], 'mb-0'].join(
                      ' '
                    )}
                  />
               
              </Form>
            </Col>
          </Row>
        </div>
        {error && <Error error={error} /> }
        </>
      );
}

export default ChipsInput;