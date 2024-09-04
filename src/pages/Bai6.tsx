import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faEye, faSave } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'


config.autoAddCss = false
library.add(faCoffee, faEye, faSave)


const FontAwesomeIcon = dynamic(
  () => import('@fortawesome/react-fontawesome').then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
)

const Bai6 = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div>
      <Head>
        <title>Kha</title>
        <link rel="icon" href="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/458284269_1032658831650929_1657173988442800454_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WOjAB-U8HOQQ7kNvgExk8y5&_nc_ht=scontent.fsgn2-4.fna&_nc_gid=AnMRM85BmSdKv1Z2oT1r25D&oh=00_AYCC7vVAKtnLl6nE54TXkDlJ4-hyXxG2AF168eckLfOr4A&oe=66DDBC5B" />
      </Head>
      <h1>Hello</h1>
      <h2>Danh sách các Icon</h2>
      {isClient && (
        <>
          <FontAwesomeIcon size="2x" icon="coffee" />
          <FontAwesomeIcon size="2x" icon="eye" />
          <FontAwesomeIcon size="2x" icon="save" />
        </>
      )}
    </div>
  )
}

export default Bai6