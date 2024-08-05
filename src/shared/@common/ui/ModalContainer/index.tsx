"use client"

import { useModalStore } from "@/shared/@common/store/useModalStore"

function ModalContainer() {
  const modals = useModalStore((state) => state.modals)

  return (
    <>
      {modals.map((modal, index) => {
        const { Component, props } = modal
        return (
          <div key={index} className="modal">
            <Component {...props} />
          </div>
        )
      })}
    </>
  )
}

export default ModalContainer
