import React from 'react'
import './BarCode.css'

const BarCode = ({bar_code}) => {
  return (
    <div className= {`bar_code_container ${bar_code}`}>
              <div className="bar_code_txt">
                Download
                <br />
                Cash App
              </div>
              <img
                className="bar_code"
                src="https://cash.app/qr/click/home2022?margin=20"
                alt="CashApp bar code"
              />
            </div>
  )
}

export default BarCode
