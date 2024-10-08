import React from 'react'
import s from '../Line/index.module.css'

export default function Line() {

  return (
    <div>
          <div className={s.line}>
          <div className={s.lineFirstPart}></div>
          <div className={s.lineSecondPart}></div>
        </div>
    </div>
  )
}
