import React, {useRef, useState} from 'react';
import {Button, Modal, Space} from "antd"
import {Console} from '../console'
import {ZnoFormA, ZnoFormB} from "../zno/znoForm";
import {ZnoContainer} from "../zno/znoContainer";
import {znoCookByIdx, znoCookCreate} from "../zno/znoCooks";

export const DisplayZnoStandaloneComponent = () => {

  const znoRef = useRef();

  const handleOnSubmit = async () => {
    await znoRef.current.save()
  }
  return <>
    <Space>
      <Button onClick={handleOnSubmit}>
        Сохранить
      </Button>
      <Button onClick={() => {
        window.location.reload();
      }}>
        отмена
      </Button>

    </Space>
    <ZnoContainer
      ref={znoRef}
      coocker={() => znoCookByIdx(0)}
      FormComponent={ZnoFormB}
    />


  </>
}