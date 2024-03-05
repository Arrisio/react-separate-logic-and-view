import React, {useState, useRef, forwardRef, useImperativeHandle,} from "react";
import {useZno} from "../znoDomainHook";


export const ZnoContainerComponent = forwardRef(
  ({FormComponent, coock}, ref) => {
    console.log('ZnoContainerComponent')
    const {zno, actions, computed} = useZno(coock)

    useImperativeHandle(ref, () => ({
      save: async () => {
        console.log('useImperativeHandle', zno)
        await actions.save()
      },
    }))

    return <FormComponent
      zno={zno}
      actions={actions}
      computed={computed}
    />
  })