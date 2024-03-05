import React, {useRef, useState} from 'react';
import {Button, Modal, Space} from "antd"
import {Console} from '../console'
import {ZnoFormA, ZnoFormB} from "../zno/znoForm";
import {ZnoContainer} from "../zno/znoContainer";
import {znoCookByIdx, znoCookCreate} from "../zno/znoCooks";

export const DisplayWithConsoleComponent = () => {
  const [modalContent, setModalContent] = useState(null);
  const showModal = (content) => {
    setModalContent(content)
  };

  const znoRef = useRef();

  const handleOnSubmit = async ()=>{
    await znoRef.current.save()
    setModalContent(null)
  }
  return <>
      <Space> <Button type="primary" onClick={() => {
      showModal(
        <ZnoContainer
          coock={() => znoCookCreate()}
          FormComponent={ZnoFormA}
        />
      )
    }}>
      NewZno
    </Button>
    <Button type="primary" onClick={() => {
      showModal(
        <ZnoContainer
          ref={znoRef}
          coock={() => znoCookByIdx(0)}
          FormComponent={ZnoFormA}
        />
      )
    }}>
      Zno1
    </Button>

    <Button type="primary" onClick={
      () => showModal(
        <ZnoContainer
          coock={() => znoCookByIdx(1)}
          FormComponent={ZnoFormB}
        />
      )
    }>
      Zno2
    </Button>
        </Space>
    <Console/>
    {!!modalContent && (
    <Modal
      title="Basic Modal"
      open={!!modalContent }
      onOk={handleOnSubmit}
      onCancel={()=>setModalContent(null)}
      width={1000}
      //       footer={[
      //   <Button
      //     key="cancel"
      //     onClick={handleHideModal}
      //   >
      //     Отмена
      //   </Button>,
      //   <Button
      //     form="znoForm"
      //     key="submit"
      //     htmlType="submit"
      //     type="primary"
      //   >
      //     Сохранить
      //   </Button>
      // ]}
    >
      {modalContent}
    </Modal>
    )}

  </>
}